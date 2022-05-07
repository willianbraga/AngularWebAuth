import { Router } from '@angular/router';
import { User } from '../../interfaces/user';
import { Component } from '@angular/core';
import { ServerMockService } from 'src/app/services/server-mock.service';
import { WebAuthnService } from 'src/app/services/web-authn.service';
import { DialogService } from 'src/app/services/dialog.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {

    title = 'angular-web-authn';
    users: User[];
    email = '';
    password = '';
    useFingerprint = false;
    webAuthnAvailable = !!navigator.credentials && !!navigator.credentials.create;

    constructor(private serverMockService: ServerMockService, private webAuthnService: WebAuthnService, private dialog: DialogService, private route: Router) {
        this.users = serverMockService.getUsers();

    }

    signup() {

        console.log('Cadastro');

        if (this.email === '' || this.password === '') {
            this.dialog
                .confirmDialog({
                    titulo: 'Atenção!',
                    mensagem: 'Usuário e/ou senha inválidos.',
                    confirmar: 'Ok'
                })
                .subscribe((resposta) => {
                    if (resposta) {
                        return;
                    }
                });

            return;
        }

        const prevUser = this.serverMockService.getUser(this.email);

        if (prevUser) {

            this.dialog
                .confirmDialog({
                    titulo: 'Atenção!',
                    mensagem: 'Usuário já existe em nossa base.',
                    confirmar: 'Ok'
                })
                .subscribe((resposta) => {
                    if (resposta) {
                        return;
                    }
                });
        } else {

            const user: User = this.serverMockService.addUser({ email: this.email, password: this.password, credentials: [] });
            this.users = this.serverMockService.getUsers();

            if (this.webAuthnAvailable && this.useFingerprint) {

                this.webAuthnService.webAuthnSignup(user)
                    .then((credential: PublicKeyCredential) => {

                        console.log('credentials.create RESPONSE', credential);

                        const valid = this.serverMockService.registerCredential(user, credential);

                        this.users = this.serverMockService.getUsers();

                    }).catch((error) => {
                        console.log('credentials.create ERROR', error);
                    });
            }
        }
    }

    signin() {

        console.log('Login');

        if (this.email === '') {
            this.dialog
                .confirmDialog({
                    titulo: 'Atenção!',
                    mensagem: 'Usuário e/ou senha inválidos.',
                    confirmar: 'Ok'
                })
                .subscribe((resposta) => {
                    if (resposta) {
                        return;
                    }
                });

            return;
        }

        // const user = this.serverMockService.getUsers().find(u => u.email === this.email && u.password === this.password);
        // if (user) {
        //   alert('✅ Congrats! Authentication went fine!');
        // } else {
        //   alert('🚫 Sorry :( Invalid credentials!');
        // }

        this.webAuthSignin();
    }

    webAuthSignin() {

        const user = this.serverMockService.getUser(this.email);

        this.webAuthnService.webAuthnSignin(user).then((response) => {

            alert('✅ Congrats! Authentication went fine!');
            console.log('SUCCESSFULLY GOT AN ASSERTION!', response);
        }).catch((error) => {

            console.log('Autenticacao por dispositivo falhou: ', error);

            const user = this.serverMockService.getUsers().find(u => u.email === this.email && u.password === this.password);
            if (user) {

                user.token = '' + Math.floor(Math.random() * 100000000);

                localStorage.setItem('user.logged', JSON.stringify(user));

                this.dialog
                    .confirmDialog({
                        titulo: ' ✅ Autenticação efetuada com sucesso!',
                        mensagem: 'Deseja vincular seu login ao dispositivo?',
                        confirmar: 'Sim',
                        cancelar: 'Não'
                    })
                    .subscribe((resposta) => {
                        if (resposta) {
                            this.webAuthnService.webAuthnSignup(user)
                                .then((credential: PublicKeyCredential) => {

                                    console.log('Credenciais criadas com sucesso', credential);

                                    const valid = this.serverMockService.registerCredential(user, credential);

                                    this.users = this.serverMockService.getUsers();

                                    this.route.navigate(['home']);

                                }).catch((error) => {
                                    console.log('Credenciais erro: ', error);
                                });
                        } else {
                            this.route.navigate(['home']);
                        }
                    });

            } else {
                alert('🚫 Sorry :( Invalid credentials!');
            }
        });
    }

    removeUser(email: string) {

        this.dialog.confirmDialog({
            titulo: 'Remover usuário',
            mensagem: 'Deseja realmente remover o usuário ' + email + '?',
            confirmar: 'Sim',
            cancelar: 'Não',
        }).subscribe((resposta) => {
            if (resposta) {
                this.serverMockService.removeUser(email);
                this.users = this.serverMockService.getUsers();
            }
        });
    }
}

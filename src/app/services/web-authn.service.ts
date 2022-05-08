import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { ServerMockService } from './server-mock.service';

@Injectable({
  providedIn: 'root'
})
export class WebAuthnService {

  constructor(private serverMockService: ServerMockService) { }

  webAuthnSignup(user: User): Promise<CredentialType> {

    console.log('[webAuthnSignup]');

    const publicKeyCredentialCreationOptions: PublicKeyCredentialCreationOptions = {

      challenge: this.serverMockService.getChallenge(),
      rp: {
        name: 'Willian Braga WebAuthn'
      },
      user: {
        id: Uint8Array.from(user.id, c => c.charCodeAt(0)),
        name: user.email,
        displayName: user.email,
      },
      pubKeyCredParams: [{ alg: -7, type: 'public-key' }],
      authenticatorSelection: {
        authenticatorAttachment: 'platform'
      },
      timeout: 60000,
      attestation: 'direct'
    };

    return navigator.credentials.create({
      publicKey: publicKeyCredentialCreationOptions,
    });
  }

  webAuthnSignin(user: User): Promise<CredentialType> {
    const allowCredentials: PublicKeyCredentialDescriptor[] = user.credentials.map(c => {
      console.log(c.credentialId);
      return { type: 'public-key', id: Uint8Array.from(Object.values(c.credentialId)) };
    });

    console.log('allowCredentials', allowCredentials);

    const credentialRequestOptions: PublicKeyCredentialRequestOptions = {
      challenge: this.serverMockService.getChallenge(),
      allowCredentials,
    };

    return navigator.credentials.get({
      publicKey: credentialRequestOptions
    });
  }
}

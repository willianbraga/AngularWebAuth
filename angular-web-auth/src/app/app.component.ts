import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'

})
export class AppComponent implements OnInit {

  data: [];
  constructor(
    private router: Router
  ) {

  }

  ngOnInit(): void {
    if (this.data) {
      console.log(this.data);
      this.router.navigateByUrl('/');
    } else {
      this.router.navigateByUrl('/login');

    }
  }
}

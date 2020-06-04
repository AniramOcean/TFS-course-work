import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class NavigationService {
  constructor(private router: Router){
  }

  toMain() {
    this.router.navigate(['/']);
  }

  toLogin() {
    this.router.navigate(['login']);
  }
}

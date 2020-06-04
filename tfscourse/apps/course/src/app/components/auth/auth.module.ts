import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginModule} from './login/login.module';
import {SignupModule} from './signup/signup.module';
import {AuthComponent} from './auth.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AuthComponent,
  ],
  exports: [
    AuthComponent
  ],
  imports: [
    LoginModule,
    SignupModule,
    CommonModule,
    RouterModule
  ]
})
export class AuthModule { }

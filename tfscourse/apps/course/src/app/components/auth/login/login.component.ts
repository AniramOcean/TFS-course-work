import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AuthService } from '../../../shared/services/auth.service';
import { NavigationService } from '../../../shared/services/navigation.service';
import { ApiErrorsService } from '../../../shared/services/apiErrors.service';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'tfscourse-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  hide = true;
  hasError = false;

  get loginControl() {
    return this.form.get('login');
  }
  get passwordControl() {
    return this.form.get('password');
  }

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private navigationService: NavigationService,
    private apiErrorsService: ApiErrorsService) {
  }

  ngOnInit() {
    this.initLoginForm();
    this.apiErrorsService.errors$
      .pipe(filter(code => code === 401))
      .subscribe(() => {
        this.hasError = true
      });
  }

  initLoginForm() {
    this.form = this.fb.group({
      login: ['', [
        Validators.required,
      ]],
      password: ['', [
        Validators.required,
      ]],
    });
  }

  onSubmit() {
    this.hasError = false;
    if (this.form.invalid) {
      return;
    }
    this.authService
      .login(this.loginControl.value, this.passwordControl.value)
      .subscribe(() => {
        this.navigationService.toMain();
      })
  }
}

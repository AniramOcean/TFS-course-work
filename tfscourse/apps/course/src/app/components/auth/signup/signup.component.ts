import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AuthService } from '../../../shared/services/auth.service';
import { NavigationService } from '../../../shared/services/navigation.service';

@Component({
  selector: 'tfscourse-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  form: FormGroup;
  hidePass = true;
  hideConfPass = true;

  get firstnameControl() {
    return this.form.get('firstname');
  }
  get lastnameControl() {
    return this.form.get('lastname');
  }
  get usernameControl() {
    return this.form.get('username');
  }
  get emailControl() {
    return this.form.get('email');
  }
  get passwordControl() {
    return this.form.get('password');
  }
  get confirmPasswordControl() {
    return this.form.get('confirmPassword');
  }

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private navigationService: NavigationService) {
  }

  ngOnInit() {
    this.initRegForm();
  }

  initRegForm() {
    this.form = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(6)
      ]],
      confirmPassword: ['', [
        Validators.required,
      ]]
    }, {validator: this.passwordMatchValidator});
  }

  passwordMatchValidator(form: FormGroup) {
    if (form.get('password').value !== form.get('confirmPassword').value) {
      form.controls.confirmPassword.setErrors({ mismatch: true });
    } else {
      form.controls.confirmPassword.setErrors(null);
    }
    return null;
  }

  // onSubmit() {
  //   console.log(this.form);
  //   if (this.form.invalid) {
  //     return;
  //   }
  // }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }
    this.authService
      .register(this.form.value)
      .subscribe(() => {
        this.navigationService.toLogin();
      })
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { backendHost } from '../const/backendHost';
import { tap } from 'rxjs/operators';
import { isEmail } from 'class-validator';
import { User } from '../interfaces/User';

interface TokenResponse {
  access_token: string;
}

@Injectable()
export class AuthService {
  constructor(private httpClient: HttpClient) {
  }

  login(username: string, password: string): Observable<any> {
    return this.httpClient.post<TokenResponse>(`${backendHost}/auth/login`, {
      username: username,
      password: password
      }).pipe(
        tap(response => localStorage.setItem('TOKEN', response.access_token))
    );
  }

  register(user: User): Observable<User> {
    return this.httpClient.post<User>(`${backendHost}/auth/register`, {
      firstName: user.firstname,
      lastName: user.lastname,
      username: user.username,
      password: user.password,
      email: user.email
      })
  }
}

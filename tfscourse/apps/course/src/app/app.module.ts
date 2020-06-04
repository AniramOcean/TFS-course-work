import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainModule } from './main/main.module';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AuthModule } from './components/auth/auth.module';
import { LoginModule } from './components/auth/login/login.module';
import { BoardsModule } from './components/boards/boards.module';
import { IndexModule } from './main/index/index.module';
import { BoardModule } from './components/boards/board/board.module';
import { HeaderModule } from './components/header/header.module';
import { ApiErrorsService } from './shared/services/apiErrors.service';
import { ApiErrorsInterceptor } from './shared/interceptors/api-errors.interceptor';
import { NavigationService } from './shared/services/navigation.service';
import { AuthService } from './shared/services/auth.service';
import { AuthInterceptor } from './shared/interceptors/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
  ],
  providers: [
    ApiErrorsService,
    NavigationService,
    AuthService,
    {provide: HTTP_INTERCEPTORS, useClass: ApiErrorsInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HeaderModule,
    BoardsModule,
    HttpClientModule,
    BoardModule,
    IndexModule,
    AuthModule,
    LoginModule,
    MainModule,
    RouterModule,
    AppRoutingModule,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}

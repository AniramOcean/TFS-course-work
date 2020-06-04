import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { BoardsComponent } from './components/boards/boards.component';
import { IndexComponent } from './main/index/index.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { LoginComponent } from './components/auth/login/login.component';

const routes: Route[] = [
  { path: 'login', component: LoginComponent},
  { path: 'register', component: SignupComponent},
  { path: '', component: MainComponent, children: [
      {path: '', component: IndexComponent},
      {
        path: ':id',
        component: BoardsComponent,
        runGuardsAndResolvers: 'paramsOrQueryParamsChange',
      },
      {path: 'boards/:id', component: TasksComponent}
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}

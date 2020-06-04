import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from '../components/header/header.module';
import { AuthModule } from '../components/auth/auth.module';
import { BoardsModule } from '../components/boards/boards.module';
import { BoardModule } from '../components/boards/board/board.module';
import { TasksModule } from '../components/tasks/tasks.module';
import { MainComponent } from './main.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MainComponent],
  exports: [MainComponent],
  imports: [
    CommonModule,
    HeaderModule,
    AuthModule,
    BoardModule,
    BoardsModule,
    TasksModule,
    RouterModule
  ]
})
export class MainModule { }

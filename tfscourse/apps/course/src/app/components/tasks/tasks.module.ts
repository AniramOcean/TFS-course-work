import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { RouterModule } from '@angular/router';
import { AddTaskListModule } from './add-task-list/add-task-list.module';
import { TaskListModule } from './task-list/task-list.module';
import { TaskListService } from '../../shared/services/taskList.service';
import { CometService } from '../../shared/services/comet.service';
import { ITaskListApiServiceToken } from '../../shared/services/backend/task-list/ITaskListApiService';
import { TaskListApiService } from '../../shared/services/backend/task-list/taskListApi';
import { HttpClientModule } from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop';

const config: SocketIoConfig = {url: 'localhost:4000', options: {}};
@NgModule({
  declarations: [TasksComponent],
  exports: [TasksComponent],
  imports: [
    // SocketIoModule.forRoot(config),
    CommonModule,
    TaskListModule,
    AddTaskListModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    HttpClientModule,
    RouterModule,
    DragDropModule
  ],
  providers: [
    TaskListService,
    {provide: ITaskListApiServiceToken, useClass: TaskListApiService},
    CometService,
  ]
})
export class TasksModule { }

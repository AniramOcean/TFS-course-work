import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { AddTaskModule } from '../add-task/add-task.module';
import { TaskModule } from '../task/task.module';
import { TasksService } from '../../../shared/services/tasks.service';
import { ITasksApiServiceToken } from '../../../shared/services/backend/tasks/ITasksApiService';
import { TasksApiService } from '../../../shared/services/backend/tasks/tasksApi.service';
import { CometService } from '../../../shared/services/comet.service';
import { TaskPopupModule } from '../task-popup/task-popup.module';
import { TaskPopupComponent } from '../task-popup/task-popup.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [TaskListComponent],
  exports: [TaskListComponent],
  imports: [
    CommonModule,
    TaskPopupModule,
    AddTaskModule,
    TaskModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  entryComponents: [TaskPopupComponent],
  providers: [
    TasksService,
    {provide: ITasksApiServiceToken, useClass: TasksApiService},
    CometService
  ]
})
export class TaskListModule { }

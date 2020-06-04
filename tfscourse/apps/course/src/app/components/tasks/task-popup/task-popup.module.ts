import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskPopupComponent } from './task-popup.component';
import { AddTaskModule } from '../add-task/add-task.module';
import { TaskModule } from '../task/task.module';
import { TaskListComponent } from '../task-list/task-list.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { TasksService } from '../../../shared/services/tasks.service';
import { ITasksApiServiceToken } from '../../../shared/services/backend/tasks/ITasksApiService';
import { TasksApiService } from '../../../shared/services/backend/tasks/tasksApi.service';
import { CometService } from '../../../shared/services/comet.service';
import { MatDialogModule } from '@angular/material/dialog';
import { TaskListModule } from '../task-list/task-list.module';



@NgModule({
  declarations: [TaskPopupComponent],
  exports: [TaskPopupComponent],
  imports: [
    CommonModule,
    AddTaskModule,
    TaskModule,
    MatDialogModule
  ],
  providers: [
    TasksService,
    {provide: ITasksApiServiceToken, useClass: TasksApiService},
    CometService
  ]
})
export class TaskPopupModule { }

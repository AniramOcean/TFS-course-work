import { Component, Inject, OnInit } from '@angular/core';
import { TaskList } from '../../../shared/interfaces/TaskList';
import { Task } from '../../../shared/interfaces/Task';
import { TasksService } from '../../../shared/services/tasks.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'tfscourse-task-popup',
  templateUrl: './task-popup.component.html',
  styleUrls: ['./task-popup.component.scss']
})
export class TaskPopupComponent implements OnInit {
  public taskList: TaskList;

  get tasks(): Task[] {
    return this.tasksService.getTasks;
  }

  constructor(private tasksService: TasksService,
              @Inject(MAT_DIALOG_DATA) public options: any) {
    console.log(this.options);
    this.taskList = options.taskList;
  }

  ngOnInit(): void {
    this.tasksService.getTasksByTaskListId(this.taskList.id);
  }

  onAddTask(task: Task) {
    console.log(this.taskList.id);
    this.tasksService.addTask(task, this.taskList.id);
  }

  onDeleteTask(index: number) {
    this.tasksService.deleteTask(index, this.taskList.id);
  }

}

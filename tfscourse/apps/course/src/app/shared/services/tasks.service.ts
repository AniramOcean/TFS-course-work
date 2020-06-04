import { Inject, Injectable } from '@angular/core';
import { Task } from '../interfaces/Task';
import { ITasksApiService, ITasksApiServiceToken } from './backend/tasks/ITasksApiService';

@Injectable()
export class TasksService {
  private tasks: any = {};

  get getTasks(): Task[] {
    return this.tasks;
  }

  constructor(
    @Inject(ITasksApiServiceToken)
    private tasksApiService: ITasksApiService,
  ) {
  }

  getTasksByTaskListId(taskListId: number): void {
    this.tasksApiService.getTasksByTaskListId(taskListId).subscribe(tasks => {
      this.tasks[taskListId] = tasks;
    })
  }

  addTask(task: Task, tasksListId: number) {
    if (!task.title.trim()) {
      return;
    }
    this.tasksApiService.add(task, tasksListId).subscribe(newTask => {
      this.tasks[tasksListId].push(newTask);
    })
  }

  deleteTask(index: number, taskListId: number) {
    const id = this.tasks[taskListId][index].id;

    this.tasksApiService.delete(id).subscribe(() => {
      this.tasks[taskListId].splice(index, 1);
    })
  }
}

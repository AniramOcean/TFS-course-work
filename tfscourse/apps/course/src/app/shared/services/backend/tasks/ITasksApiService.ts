import { Observable } from 'rxjs';
import { Task } from '../../../interfaces/Task';
import { InjectionToken } from '@angular/core';

export const ITasksApiServiceToken = new InjectionToken('ITasksApiServiceToken');

export interface ITasksApiService {
  getAll(): Observable<Task[]>;

  add(entity: Task, taskListId: number): Observable<Task>;

  delete(id: number): Observable<void>;

  getTasksByTaskListId(taskListId: number): Observable<Task[]>;

}

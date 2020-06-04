import { ITasksApiService } from './ITasksApiService';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { backendHost } from '../../../const/backendHost';
import { Task } from '../../../interfaces/Task';

const prefix = 'tasks';

@Injectable({
  providedIn: 'root'
})
export class TasksApiService implements ITasksApiService {
  constructor(private httpClient: HttpClient) {
  }

  add(entity: Task, taskListId: number): Observable<Task> {
    entity.taskListId = taskListId;

    return this.httpClient.post<Task>(`${backendHost}/${prefix}`, entity);
  }

  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${backendHost}/${prefix}/${id}`);
  }

  getAll(): Observable<Task[]> {
    return this.httpClient.get<Task[]>(`${backendHost}/${prefix}`);
  }

  getTasksByTaskListId(taskListId: number): Observable<Task[]> {
    return this.httpClient.get<Task[]>(`${backendHost}/${prefix}/by-taskList/${taskListId}`);
  }

}

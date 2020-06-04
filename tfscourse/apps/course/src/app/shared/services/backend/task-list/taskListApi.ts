import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { backendHost } from '../../../const/backendHost';
import { ITaskListApiService } from './ITaskListApiService';
import { TaskList } from '../../../interfaces/TaskList';

const prefix = 'taskLists';

@Injectable()
export class TaskListApiService implements ITaskListApiService {
  constructor(private httpClient: HttpClient) {
  }

  add(entity: TaskList, boardId: number): Observable<TaskList> {
    entity.boardId = boardId;

    return this.httpClient.post<TaskList>(`${backendHost}/${prefix}`, entity);
  }

  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${backendHost}/${prefix}/${id}`);
  }

  getAll(): Observable<TaskList[]> {
    return this.httpClient.get<TaskList[]>(`${backendHost}/${prefix}`);
  }

  getTaskListsByBoardId(boardId: number): Observable<TaskList[]> {
    return this.httpClient.get<TaskList[]>(`${backendHost}/${prefix}/by-board/${boardId}`);
  }

  //
  update(entity: TaskList): Observable<TaskList> {
    return this.httpClient.post<TaskList>(`${backendHost}/${prefix}/update`, entity);
  }
}

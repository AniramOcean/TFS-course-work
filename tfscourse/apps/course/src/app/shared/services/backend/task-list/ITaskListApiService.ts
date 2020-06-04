import { Observable } from 'rxjs';
import { InjectionToken } from '@angular/core';
import { TaskList } from '../../../interfaces/TaskList';

export const ITaskListApiServiceToken = new InjectionToken('ITaskListApiServiceToken');

export interface ITaskListApiService {
  getAll(): Observable<TaskList[]>;

  add(entity: TaskList, boardId: number): Observable<TaskList>;

  delete(id: number): Observable<void>;

  getTaskListsByBoardId(boardId: number): Observable<TaskList[]>;

  update(entity: TaskList): Observable<TaskList>;
}

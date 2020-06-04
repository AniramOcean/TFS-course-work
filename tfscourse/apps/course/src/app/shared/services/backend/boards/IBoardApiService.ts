import { Observable } from 'rxjs';
import { InjectionToken } from '@angular/core';
import { Board } from '../../../interfaces/Board';

export const IBoardApiServiceToken = new InjectionToken('IBoardApiServiceToken');

export interface IBoardApiService {
  getAll(): Observable<Board[]>;

  getMyBoards(): Observable<Board[]>;

  add(entity: Board, userId: number): Observable<Board>;

  delete(id: number): Observable<void>;
}

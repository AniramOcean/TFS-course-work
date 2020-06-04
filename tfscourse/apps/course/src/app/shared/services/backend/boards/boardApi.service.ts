import { IBoardApiService } from './IBoardApiService';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { backendHost } from '../../../const/backendHost';
import { Board } from '../../../interfaces/Board';

const prefix = 'boards';

@Injectable({
  providedIn: 'root'
})
export class BoardApiService implements IBoardApiService {
  constructor(private httpClient: HttpClient) {
  }

  add(entity: Board, userId: number): Observable<Board> {
    entity.userId = userId;

    return this.httpClient.post<Board>(`${backendHost}/${prefix}`, entity);
  }

  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${backendHost}/${prefix}/${id}`);
  }

  getAll(): Observable<Board[]> {
    return this.httpClient.get<Board[]>(`${backendHost}/${prefix}`);
  }

  getMyBoards(): Observable<Board[]> {
    return this.httpClient.get<Board[]>(`${backendHost}/${prefix}/by-user`)
  }
}

import { Inject, Injectable } from '@angular/core';
import { Board } from '../interfaces/Board';
import { IBoardApiService, IBoardApiServiceToken } from './backend/boards/IBoardApiService';

@Injectable()
export class BoardService {
  private board: Board[] = [];

  private currentUserId = 0;

  get getBoard(): Board[] {
    return this.board;
  }

  constructor(
    @Inject(IBoardApiServiceToken)
    private boardApiService: IBoardApiService,
  ) {
  }

  getMyBoards(): void {
    this.boardApiService.getMyBoards().subscribe( boards => {
      this.board = boards;
    });
  }

  addBoard(board: Board) {
    this.boardApiService.add(board, this.currentUserId).subscribe(boards => {
      this.board.push(boards);
    });
  }

  deleteBoard(index: number) {
    const id = this.board[index].id;
    this.boardApiService.delete(id).subscribe(() => {
      this.board.splice(index,1);
    })
  }
}

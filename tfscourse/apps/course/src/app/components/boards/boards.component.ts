import { Component, OnInit } from '@angular/core';
import { BoardService } from '../../shared/services/board.service';
import { Board } from '../../shared/interfaces/Board';

@Component({
  selector: 'tfscourse-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.scss']
})
export class BoardsComponent implements OnInit {
  get boards(): Board[] {
    return this.boardService.getBoard;
  }

  constructor(private boardService: BoardService) {
  }

  ngOnInit(): void {
  }

  onAddBoard(board: Board) {
    this.boardService.addBoard(board);
  }

  onDeleteBoard(index: number) {
    this.boardService.deleteBoard(index);
  }
}

import { Component, OnInit } from '@angular/core';
import { BoardService } from '../shared/services/board.service';

@Component({
  selector: 'tfscourse-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  constructor(private boardService: BoardService) { }

  ngOnInit(): void {
    this.boardService.getMyBoards();
  }

}

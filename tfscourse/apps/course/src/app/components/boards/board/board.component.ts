import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Board } from '../../../shared/interfaces/Board';

@Component({
  selector: 'tfscourse-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  @Input() board: Board;

  @Output() deleted = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(event: MouseEvent) {
    event.stopPropagation();
    this.deleted.emit();
  }

}

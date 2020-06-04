import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../../../shared/interfaces/Task';

@Component({
  selector: 'tfscourse-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() task: Task;

  @Output() deleted = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onDeleteTask() {
    this.deleted.emit();
  }
}

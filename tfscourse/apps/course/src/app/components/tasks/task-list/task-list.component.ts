import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../../../shared/interfaces/Task';
import { TasksService } from '../../../shared/services/tasks.service';
import { TaskList } from '../../../shared/interfaces/TaskList';
import { MatDialog } from '@angular/material/dialog';
import { TaskPopupComponent } from '../task-popup/task-popup.component';

@Component({
  selector: 'tfscourse-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  @Input() taskList: TaskList;

  @Output() deleted = new EventEmitter<void>();

  today: number = Date.now();

  get tasks(): Task[] {
    return this.tasksService.getTasks;
  }

  constructor(private tasksService: TasksService,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.tasksService.getTasksByTaskListId(this.taskList.id);
  }

  openDialog() {
    const dialogRef = this.dialog.open(TaskPopupComponent, {data: {
        taskList: this.taskList
      }});

    dialogRef.afterClosed().subscribe();
  }

  onDeleteTaskList() {
    this.deleted.emit();
  }

}

import { Component, OnInit } from '@angular/core';
import { TaskList } from '../../shared/interfaces/TaskList';
import { TaskListService } from '../../shared/services/taskList.service';
import { ActivatedRoute } from '@angular/router';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';


@Component({
  selector: 'tfscourse-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  private boardId: number;

  get taskLists(): TaskList[] {
    return this.taskListService.getTaskList;
  }
  constructor(
    private route: ActivatedRoute,
    public taskListService: TaskListService,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.pipe()
      .subscribe(params => {
      this.boardId = Number(params.get('id'));
      this.taskListService.getTaskListsByBoardId(this.boardId);
    });
  }

  onAddTaskList(taskList: TaskList) {
    this.taskListService.addTaskList(taskList, this.boardId);
  }

  onDeleteTaskList(id: number) {
    this.taskListService.deleteTaskList(id);
  }

  updateTaskList(taskList: TaskList) {
    this.taskListService.updateTaskList(taskList);
  }

  getTaskListsByStatus(status: number) {
    return this.taskListService.taskListGroupedByStatus[status]
      ? this.taskListService.taskListGroupedByStatus[status]
      : [];
  }

  drop(event: CdkDragDrop<TaskList[]>, newStatus: number) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
      let taskList = event.container.data[event.currentIndex];
      taskList.status = newStatus;
      this.updateTaskList(taskList);
    }
  }

}

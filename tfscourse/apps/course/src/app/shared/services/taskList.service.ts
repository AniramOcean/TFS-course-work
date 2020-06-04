import { Inject, Injectable } from '@angular/core';
import { TaskList } from '../interfaces/TaskList';
import { ITaskListApiService, ITaskListApiServiceToken } from './backend/task-list/ITaskListApiService';

@Injectable()
export class TaskListService {
  private taskList: TaskList[] = [];

  public taskListGroupedByStatus: any = {};

  private groupTaskList(): void {
    this.taskListGroupedByStatus = {};
    this.taskList.map(item => {
      if (!this.taskListGroupedByStatus[item.status]) {
        this.taskListGroupedByStatus[item.status] = [];
      }
      this.taskListGroupedByStatus[item.status].push(item);
    })
  }

  get getTaskList(): TaskList[] {
    return this.taskList;
  }

  constructor(
    @Inject(ITaskListApiServiceToken)
    private taskListApiService: ITaskListApiService,
  ) {
  }

  getTaskListsByBoardId(boardId: number): void {
    this.taskListApiService.getTaskListsByBoardId(boardId).subscribe(taskList => {
      this.taskList = taskList;
      this.groupTaskList();
    })
  }

  addTaskList(taskList: TaskList, boardId: number) {
    if (!taskList.title.trim()) {return;}
    this.taskListApiService.add(taskList, boardId).subscribe(taskLists => {
      this.taskList.unshift(taskLists);
      this.groupTaskList();
    });
  }

  updateTaskList(taskList: TaskList) {
    this.taskListApiService.update(taskList).subscribe(resp => {
      let index = this.taskList.indexOf(taskList);
      if (index !== -1) {
        this.taskList[index] = taskList;
      }
      this.groupTaskList();
    });
  }


  deleteTaskList(id: number) {
    this.taskListApiService.delete(id).subscribe(() => {
      let index = this.taskList.findIndex(item => {
        return item.id === id;
      });
      this.taskList.splice(index, 1);
      this.groupTaskList();
    })
  }


}

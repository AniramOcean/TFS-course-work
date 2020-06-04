import {Body, Controller, Delete, Get, Param, Post, UseGuards} from '@nestjs/common';
import {UpdateService} from '../update/update.service';
import {JwtAuthGuard} from '../auth/jwt-auth.guard';
import { CreateTaskDto } from './dto/create-task.dto';
import { TasksService } from './tasks.service';
import { Task } from './task.entity';
import { TaskListsService } from '../taskLists/taskLists.service';

@UseGuards(JwtAuthGuard)
@Controller('tasks')
export class TasksController {
  constructor(
    private tasksService: TasksService,
    private updateService: UpdateService,
    private taskListsService: TaskListsService
  ) {
  }

  @Get()
  getAll(): Promise<Task[]> {
    return this.tasksService.findAll();
  }

  @Get('by-taskList/:id')
  async getByTaskListId(@Param('id') id: string): Promise<Task[]> {
    return this.tasksService.findByTaskList(id);
  }

  @Get(':id')
  get(@Param('id') id: string): Promise<Task> {
    return this.tasksService.findOne(id);
  }

  @Post('update')
  update() {
    this.updateService.subject.next();
  }

  @Post()
  async create(@Body() dto: CreateTaskDto): Promise<Task> {
    const taskList = await this.taskListsService.findOne(dto.taskListId);

    return this.tasksService.create(dto, taskList);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.tasksService.remove(id);
  }
}

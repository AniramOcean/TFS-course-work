import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import { Task } from './task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskList } from '../taskLists/taskList.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private readonly entityRepository: Repository<Task>,
  ) {
  }

  create(createTaskDto: CreateTaskDto, taskList: TaskList): Promise<Task> {
    const task = new Task();

    task.title = createTaskDto.title;
    task.taskList = taskList;

    return this.entityRepository.save(task);
  }

  async findAll(): Promise<Task[]> {
    return this.entityRepository.find();
  }

  async findByTaskList(taskListId: string): Promise<Task[]> {
    return this.entityRepository.find({where: {taskList: taskListId}});
  }

  findOne(id: string): Promise<Task> {
    return this.entityRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.entityRepository.delete(id);
  }
}

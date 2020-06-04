import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import {CreateTaskListDto} from './dto/create-taskList.dto';
import { TaskList } from './taskList.entity';
import { Board } from '../boards/board.entity';

@Injectable()
export class TaskListsService {
    constructor(
        @InjectRepository(TaskList)
        private readonly entityRepository: Repository<TaskList>,
    ) {
    }

    create(createUserDto: CreateTaskListDto, board: Board): Promise<TaskList> {
        const taskList = new TaskList();

        taskList.date = createUserDto.date;
        taskList.title = createUserDto.title;
        taskList.status = 0;
        taskList.board = board;

        return this.entityRepository.save(taskList);
    }

    async findAll(): Promise<TaskList[]> {
        return this.entityRepository.find();
    }

    async findByBoard(boardId: string): Promise<TaskList[]> {
      return this.entityRepository.find({where: {board: boardId}});
    }

    async update(taskList: TaskList): Promise<TaskList> {
        await this.entityRepository.update(taskList.id, taskList);
        return taskList;
    }

    findOne(id: string): Promise<TaskList> {
        return this.entityRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.entityRepository.delete(id);
    }
}

import {Body, Controller, Delete, Get, Param, Post, UseGuards} from '@nestjs/common';
import {UpdateService} from '../update/update.service';
import {TaskListsService} from './taskLists.service';
import { TaskList } from './taskList.entity';
import {CreateTaskListDto} from './dto/create-taskList.dto';
import {JwtAuthGuard} from '../auth/jwt-auth.guard';
import { BoardsService } from '../boards/boards.service';

@UseGuards(JwtAuthGuard)
@Controller('taskLists')
export class TaskListsController {
    constructor(
        private taskListsService: TaskListsService,
        private updateService: UpdateService,
        private boardsService: BoardsService,
    ) {
    }

    @Get()
    getAll(): Promise<TaskList[]> {
        return this.taskListsService.findAll();
    }

    @Get('by-board/:id')
    async getByBoardId(@Param('id') id: string): Promise<TaskList[]> {
        return this.taskListsService.findByBoard(id);
    }

    @Get(':id')
    get(@Param('id') id: string): Promise<TaskList> {
        return this.taskListsService.findOne(id);
    }

    @Post('update')
    update(@Body() taskList: TaskList) {
        return this.taskListsService.update(taskList);
    }

    @Post()
    async create(@Body() dto: CreateTaskListDto): Promise<TaskList> {
        const board = await this.boardsService.findOne(dto.boardId);

        return this.taskListsService.create(dto, board);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.taskListsService.remove(id);
    }
}

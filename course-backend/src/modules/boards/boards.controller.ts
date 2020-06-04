import { Body, Controller, Delete, Get, Param, Post, Req, UseGuards } from '@nestjs/common';
import {BoardsService} from './boards.service';
import {CreateBoardDto} from './dto/create-board.dto';
import { Board } from './board.entity';
import {JwtAuthGuard} from '../auth/jwt-auth.guard';
import { UpdateService } from '../update/update.service';
import { UsersService } from '../users/users.service';

@UseGuards(JwtAuthGuard)
@Controller('boards')
export class BoardsController {
    constructor(
      private readonly entitiesService: BoardsService,
      private updateService: UpdateService,
      private usersService: UsersService,
    ) {
    }

    @Get()
    findAll(): Promise<Board[]> {
        return this.entitiesService.findAll();
    }

    @Get('by-user')
    async getMyBoards(@Req() request): Promise<Board[]> {
        console.log(request.user);
        return this.entitiesService.findByUserName(request.user.id);
    }

    @Get(':id')
    get(@Param('id') id: string): Promise<Board> {
        return this.entitiesService.findOne(id);
    }

    @Post('update')
    update() {
        this.updateService.subject.next();
    }

    @Post()
    async create(@Req() request, @Body() dto: CreateBoardDto): Promise<Board> {
        dto.userId = request.user.id;
        const user = await this.usersService.findOne(dto.userId);
        return this.entitiesService.create(dto, user);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.entitiesService.remove(id);
    }
}

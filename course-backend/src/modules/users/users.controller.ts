import {Body, Controller, Delete, Get, Param, Post, UseGuards} from '@nestjs/common';
import {User} from './user.entity';
import {UsersService} from './users.service';
import {CreateUserDto} from './dto/create-user.dto';
import {JwtAuthGuard} from '../auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('users')
export class UsersController {
    constructor(private readonly entitiesService: UsersService) {
    }

    @Post()
    create(@Body() dto: CreateUserDto): Promise<User> {
        return this.entitiesService.create(dto);
    }

    @Get()
    findAll(): Promise<User[]> {
        return this.entitiesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<User> {
        return this.entitiesService.findById(id);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.entitiesService.remove(id);
    }
}

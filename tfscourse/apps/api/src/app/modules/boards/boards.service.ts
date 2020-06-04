import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import { Board } from './board.entity';
import {CreateBoardDto} from './dto/create-board.dto';
import { User } from '../users/user.entity';

@Injectable()
export class BoardsService {
    constructor(
        @InjectRepository(Board)
        private readonly entitiesRepository: Repository<Board>,
    ) {
    }

    create(createUserDto: CreateBoardDto, user: User): Promise<Board> {
        const board = new Board();

        board.title = createUserDto.title;
        board.user = user;

        return this.entitiesRepository.save(board);
    }

    findAll(): Promise<Board[]> {
        return this.entitiesRepository.find();
    }

    async findByUserName(userId: string): Promise<Board[]> {
        return this.entitiesRepository.find({where: {userId: userId}});
    }

    findOne(id: string): Promise<Board> {
        return this.entitiesRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.entitiesRepository.delete(id);
    }
}

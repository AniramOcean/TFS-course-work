import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import { Board } from './board.entity';
import {BoardsController} from './boards.controller';
import {BoardsService} from './boards.service';
import { UpdateModule } from '../update/update.module';
import { UsersModule } from '../users/users.module';

@Module({
    imports: [
        UpdateModule,
        UsersModule,
        TypeOrmModule.forFeature([Board])
    ],
    providers: [
        BoardsService
    ],
    exports: [
        BoardsService
    ],
    controllers: [
        BoardsController
    ]
})
export class BoardsModule {}

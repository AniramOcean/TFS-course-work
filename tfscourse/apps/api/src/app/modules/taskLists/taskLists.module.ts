import {Module} from '@nestjs/common';
import {TaskListsController} from './taskLists.controller';
import {UpdateModule} from '../update/update.module';
import {TaskListsService} from './taskLists.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import { TaskList } from './taskList.entity';
import { BoardsModule } from '../boards/boards.module';

@Module({
    imports: [
        UpdateModule,
        BoardsModule,
        TypeOrmModule.forFeature([TaskList])
    ],
    providers: [
        TaskListsService
    ],
    exports: [
        TaskListsService
    ],
    controllers: [
        TaskListsController
    ],
})
export class TaskListsModule {
}

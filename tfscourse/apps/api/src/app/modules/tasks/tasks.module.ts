import {Module} from '@nestjs/common';
import { TasksController } from './tasks.controller';
import {UpdateModule} from '../update/update.module';
import { TasksService } from './tasks.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import { Task } from './task.entity';
import { TaskListsModule } from '../taskLists/taskLists.module';

@Module({
  imports: [
    UpdateModule,
    TaskListsModule,
    TypeOrmModule.forFeature([Task])
  ],
  controllers: [TasksController],
  providers: [TasksService]
})
export class TasksModule {
}

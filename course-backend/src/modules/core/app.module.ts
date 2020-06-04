import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {TaskListsModule} from '../taskLists/taskLists.module';
import {CometModule} from '../comet/comet.module';
import {UpdateService} from '../update/update.service';
import {UsersModule} from '../users/users.module';
import {BoardsModule} from '../boards/boards.module';
import {AuthModule} from '../auth/auth.module';
import { TasksModule } from '../tasks/tasks.module';

@Module({
    imports: [
      TypeOrmModule.forRoot(),
      CometModule,
      UsersModule,
      AuthModule,
      BoardsModule,
      TaskListsModule,
      TasksModule,
    ],
    providers: [
      UpdateService
    ]
})
export class AppModule {
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardsComponent } from './boards.component';
import { BoardModule } from './board/board.module';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { AddBoardModule } from './add-board/add-board.module';
import { BoardApiService } from '../../shared/services/backend/boards/boardApi.service';
import { IBoardApiServiceToken } from '../../shared/services/backend/boards/IBoardApiService';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { BoardService } from '../../shared/services/board.service';
import { HttpClientModule } from '@angular/common/http';
import { CometService } from '../../shared/services/comet.service';

const config: SocketIoConfig = {url: 'localhost:4000', options: {}};
@NgModule({
  declarations: [BoardsComponent],
  exports: [BoardsComponent],
  imports: [
    SocketIoModule.forRoot(config),
    CommonModule,
    AddBoardModule,
    BoardModule,
    RouterModule,
    MatButtonModule,
    HttpClientModule,
    MatCardModule,
  ],
  providers: [
    BoardService,
    CometService,
    {provide: IBoardApiServiceToken, useClass: BoardApiService},
  ]
})
export class BoardsModule { }

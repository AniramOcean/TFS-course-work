import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';
import { BoardsModule } from '../../components/boards/boards.module';



@NgModule({
  declarations: [IndexComponent],
  exports: [IndexComponent],
  imports: [
    CommonModule,
    BoardsModule
  ]
})
export class IndexModule { }

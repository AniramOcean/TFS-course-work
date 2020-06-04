import { IsNotEmpty } from 'class-validator';

export class TaskListDTO {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  date: Date;
}

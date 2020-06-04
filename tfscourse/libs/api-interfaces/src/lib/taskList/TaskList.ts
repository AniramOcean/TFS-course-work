import { InMemoryDBEntity } from '@nestjs-addons/in-memory-db';

export interface TaskList extends InMemoryDBEntity {
  title: string;
  date: Date;
}

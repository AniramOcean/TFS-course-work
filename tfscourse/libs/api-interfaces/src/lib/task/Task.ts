import { InMemoryDBEntity } from '@nestjs-addons/in-memory-db';

export interface Task extends InMemoryDBEntity {
  additionalInfoId: number;
  title: string;
}

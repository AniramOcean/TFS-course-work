import { InMemoryDBEntity } from '@nestjs-addons/in-memory-db';

export interface Board extends InMemoryDBEntity {
  title: string;
}

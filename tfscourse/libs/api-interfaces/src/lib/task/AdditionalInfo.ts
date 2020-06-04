import { InMemoryDBEntity } from '@nestjs-addons/in-memory-db';

export interface AdditionalInfo extends InMemoryDBEntity {
  color: string;
}

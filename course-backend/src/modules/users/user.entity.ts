import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import { Board } from '../boards/board.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column({default: true})
  isActive: boolean;

  @OneToMany(() => Board, entity => entity.user)
  boards: Board[];
}

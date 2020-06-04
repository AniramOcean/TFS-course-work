import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import { TaskList } from '../taskLists/taskList.entity';
import {User} from '../users/user.entity';

@Entity()
export class Board {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    userId: string;

    @OneToMany(() => TaskList, entity => entity.board)
    taskLists: TaskList[];

    @ManyToOne(() => User, entity => entity.boards)
    user: User;
}

import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import { TaskList } from '../taskLists/taskList.entity';

@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @ManyToOne(() => TaskList, entity => entity.tasks)
    taskList: TaskList;
}

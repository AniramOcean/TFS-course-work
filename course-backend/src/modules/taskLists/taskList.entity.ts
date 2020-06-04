import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Board } from '../boards/board.entity';
import { Task } from '../tasks/task.entity';

@Entity()
export class TaskList {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    date: Date;

    @Column()
    status: number;

    @OneToMany(() => Task, entity => entity.taskList)
    tasks: Task[];

    @ManyToOne(() => Board, entity => entity.taskLists)
    board: Board;
}

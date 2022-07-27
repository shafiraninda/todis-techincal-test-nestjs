import { Entity, PrimaryGeneratedColumn, OneToOne, Column, JoinColumn, Generated } from "typeorm";
import { Staff } from "./staff.entity";

@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    @Generated("increment")
    uniqueId: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @OneToOne(()=> Staff)
    @JoinColumn()
    assignee: Staff;
}
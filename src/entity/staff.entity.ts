import { Column, Entity, Generated, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Staff {
    @PrimaryGeneratedColumn()
    @Generated("increment")
    uniqueId: number;

    @Column()
    name: string;
}
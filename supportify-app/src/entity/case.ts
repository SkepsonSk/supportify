import {Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Project} from "./project";
import {User} from "./user";

@Entity()
export class Case {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    content: string;

    @ManyToOne( () => Project, project => project.cases)
    project: Project

    @ManyToMany( () => User, user => user.cases)
    users: User[];
}
import {Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Case} from "./case";
import {User} from "./user";

@Entity()
export class Project {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToMany( () => Case, c => c.project)
    cases: Case[];

    @ManyToMany( () => User, user => user.projects)
    users: User[];
}
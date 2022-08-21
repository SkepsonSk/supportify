import {Column, Entity, JoinTable, ManyToMany, PrimaryColumn} from "typeorm";
import {Organization} from "./organization";
import {Project} from "./project";
import {Case} from "./case";

@Entity()
export class User {
    @PrimaryColumn()
    id: string;

    @Column()
    username: string;

    @ManyToMany(
        () => Organization,
        organization => organization.users, {
        cascade: false
    })
    @JoinTable({ name: 'organization_assignment' })
    organizations: Organization[];

    @ManyToMany(
        () => Project,
        project => project.users, {
            cascade: false
        })
    @JoinTable({ name: 'project_assignment' })
    projects: Project[];

    @ManyToMany(
        () => Case,
        c => c.users, {
            cascade: false
        })
    @JoinTable({ name: 'case_assignment' })
    cases: Case[];
}
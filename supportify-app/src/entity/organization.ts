import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { OrganizationAssignment } from './organization-assignment';
import { Project } from './project';

@Entity()
export class Organization {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Project, (project) => project.organization)
  projects: Project[];

  @OneToMany(
    () => OrganizationAssignment,
    (organizationAssignment) => organizationAssignment.organization,
  )
  public organizationAssignments: OrganizationAssignment[];
}

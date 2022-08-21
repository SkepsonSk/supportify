import { Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Case } from './case';
import { ProjectAssignment } from './project-assignment';
import { Organization } from './organization';

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Organization, (organization) => organization.projects)
  organization: Organization;

  @OneToMany(() => Case, (c) => c.project)
  cases: Case[];

  @OneToMany(
    () => ProjectAssignment,
    (projectAssignment) => projectAssignment.project,
  )
  public projectAssignments: ProjectAssignment[];
}

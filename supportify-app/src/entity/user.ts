import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { OrganizationAssignment } from './organization-assignment';
import { ProjectAssignment } from './project-assignment';
import { CaseAssignment } from './case-assignment';

@Entity()
export class User {
  @PrimaryColumn()
  id: string;

  @Column()
  username: string;

  @OneToMany(
    () => OrganizationAssignment,
    (organizationAssignment) => organizationAssignment.user,
  )
  public organizationAssignments: OrganizationAssignment[];

  @OneToMany(
    () => ProjectAssignment,
    (projectAssignment) => projectAssignment.user,
  )
  public projectAssignments: ProjectAssignment[];

  @OneToMany(() => CaseAssignment, (caseAssignment) => caseAssignment.user)
  public caseAssignments: CaseAssignment[];
}

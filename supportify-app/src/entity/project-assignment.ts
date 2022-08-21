import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user';
import { Project } from './project';

@Entity()
export class ProjectAssignment {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public organizationId: number;

  @Column()
  public userId: number;

  @ManyToOne(() => User, (user) => user.projectAssignments)
  public user: User;

  @ManyToOne(() => Project, (project) => project.projectAssignments)
  public project: Project;
}

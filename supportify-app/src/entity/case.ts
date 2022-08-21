import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Project } from './project';
import { CaseAssignment } from './case-assignment';

@Entity()
export class Case {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  content: string;

  @ManyToOne(() => Project, (project) => project.cases)
  project: Project;

  @OneToMany(() => CaseAssignment, (caseAssignment) => caseAssignment.case)
  public caseAssignments: CaseAssignment[];
}

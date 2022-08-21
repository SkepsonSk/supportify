import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user';
import { Case } from './case';

@Entity()
export class CaseAssignment {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public organizationId: number;

  @Column()
  public userId: number;

  @ManyToOne(() => User, (user) => user.caseAssignments)
  public user: User;

  @ManyToOne(() => Case, (c) => c.caseAssignments)
  public case: Case;
}

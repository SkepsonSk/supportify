import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user';
import { Organization } from './organization';

@Entity()
export class OrganizationAssignment {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public organizationId: number;

  @Column()
  public userId: number;

  @ManyToOne(() => User, (user) => user.organizationAssignments)
  public user: User;

  @ManyToOne(
    () => Organization,
    (organization) => organization.organizationAssignments,
  )
  public organization: Organization;
}

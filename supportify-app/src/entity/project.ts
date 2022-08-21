import { Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Case } from './case';

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => Case, (c) => c.project)
  cases: Case[];
}

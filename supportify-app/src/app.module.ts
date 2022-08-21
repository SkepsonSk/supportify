import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Organization } from './entity/organization';
import { User } from './entity/user';
import { Project } from './entity/project';
import { Case } from './entity/case';
import { OrganizationAssignment } from './entity/organization-assignment';
import { CasesModule } from './module/cases/cases.module';
import { ProjectAssignment } from './entity/project-assignment';
import { CaseAssignment } from './entity/case-assignment';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'supportify',
      entities: [
        Organization,
        User,
        Project,
        Case,
        OrganizationAssignment,
        ProjectAssignment,
        CaseAssignment,
      ],
      synchronize: true,
      dropSchema: true,
    }),
    CasesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Organization } from './entity/organization';
import { User } from './entity/user';
import { Project } from './entity/project';
import { Case } from './entity/case';
import { CasesModule } from './module/cases/cases.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'supportify',
      entities: [Organization, User, Project, Case],
      synchronize: true,
      dropSchema: true,
    }),
    CasesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { staffsModule } from './staffs/staffs.module';
import { tasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    staffsModule,
    RouterModule.register([
      {
        path: 'staffs',
        module: staffsModule,
      },
      {
        path: 'tasks',
        module: tasksModule
      }
    ])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

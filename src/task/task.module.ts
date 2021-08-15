import { Module } from '@nestjs/common';
import { TasksController } from './tasks/tasks.controller';
import { TaskService } from './tasks/shared/task.service';

@Module({
  controllers: [TasksController],
  providers: [TaskService],
})
export class TaskModule {}

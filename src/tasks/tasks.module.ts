import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';

/**
 * Module for managing tasks.
 * This module brings together the controller and service for tasks.
 */
@Module({
  // Specifies the controllers to be used in this module
  controllers: [TasksController],

  // Specifies the providers (services) to be used in this module
  providers: [TasksService],
})
export class TasksModule { }

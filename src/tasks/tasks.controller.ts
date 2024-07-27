import { Body, Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.model';

@Controller('tasks')
export class TasksController {
  constructor(private tsaksService: TasksService) {}

  @Get()
  getAllTasks(): Task[] {
    return this.tsaksService.getAllTasks();
  }

  @Post()
  createTask(
    @Body('title') title: string,
    @Body('description') description: string,
): Task {
    return this.tsaksService.createTask(title, description);
  }
}

import { Body, Controller, Get, Param, Post, Delete, Patch, Query } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task, TaskStatus } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTaskFilterDto } from './dto/get-tasks-filter.dto';
import { UpdateTaskStatusDto } from './dto/update-task-status.dto';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) { }

  /**
   * GET /tasks
   * Retrieves tasks, optionally filtered by certain criteria.
   * @param filterDto - Data Transfer Object for filtering tasks.
   * @returns An array of tasks, either filtered or all tasks.
   */
  @Get()
  getTasks(@Query() filterDto: GetTaskFilterDto): Task[] {
    if (Object.keys(filterDto).length) {
      // If there are any filters provided, retrieve tasks with those filters.
      return this.tasksService.getTaskWithFilters(filterDto);
    } else {
      // If no filters are provided, retrieve all tasks.
      return this.tasksService.getAllTasks();
    }
  }

  /**
   * POST /tasks
   * Creates a new task.
   * @param createTaskDto - Data Transfer Object for creating a new task.
   * @returns The created task.
   */
  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto): Task {
    return this.tasksService.createTask(createTaskDto);
  }

  /**
   * GET /tasks/:id
   * Retrieves a task by its ID.
   * @param id - The ID of the task to retrieve.
   * @returns The task with the specified ID.
   */
  @Get('/:id')
  getTaskById(@Param('id') id: string): Task {
    return this.tasksService.getTaskById(id);
  }

  /**
   * DELETE /tasks/:id
   * Deletes a task by its ID.
   * @param id - The ID of the task to delete.
   */
  @Delete('/:id')
  deleteTaskById(@Param('id') id: string): void {
    return this.tasksService.deleteTaskById(id);
  }

  /**
   * PATCH /tasks/:id/status
   * Updates the status of a task.
   * @param id - The ID of the task to update.
   * @param updateTaskStatusDto - Data Transfer Object for updating the task status.
   * @returns The updated task.
   */
  @Patch('/:id/status')
  updateTaskStatus(
    @Param('id') id: string,
    @Body() updateTaskStatusDto: UpdateTaskStatusDto,
  ): Task {
    const { status } = updateTaskStatusDto;
    return this.tasksService.updateTaskStatus(id, status);
  }
}

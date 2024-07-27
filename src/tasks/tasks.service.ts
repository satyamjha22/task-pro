import { Injectable, NotFoundException } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v4 as uuid } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTaskFilterDto } from './dto/get-tasks-filter.dto';

@Injectable()
export class TasksService {
  // Array to hold tasks in memory
  private tasks: Task[] = [];

  /**
   * Retrieves all tasks.
   * @returns An array of all tasks.
   */
  getAllTasks(): Task[] {
    return this.tasks;
  }

  /**
   * Retrieves tasks based on filtering criteria.
   * @param filterDto - Data Transfer Object containing filter criteria.
   * @returns An array of tasks that match the filtering criteria.
   */
  getTaskWithFilters(filterDto: GetTaskFilterDto): Task[] {
    const { status, search } = filterDto;
    let tasks = this.getAllTasks();

    // Filter tasks by status if provided
    if (status) {
      tasks = tasks.filter((task) => task.status === status);
    }

    // Filter tasks by search term if provided
    if (search) {
      tasks = tasks.filter((task) => {
        if (task.title.includes(search) || task.description.includes(search)) {
          return true;
        }
        return false;
      });
    }

    return tasks;
  }

  /**
   * Creates a new task.
   * @param createTaskDto - Data Transfer Object containing task creation data.
   * @returns The created task.
   */
  createTask(createTaskDto: CreateTaskDto): Task {
    const { title, description } = createTaskDto;
    const task: Task = {
      id: uuid(),  // Generate a unique ID for the task
      title,
      description,
      status: TaskStatus.OPEN,
    };
    this.tasks.push(task);  // Add the new task to the array
    return task;
  }

  /**
   * Retrieves a task by its ID.
   * @param id - The ID of the task to retrieve.
   * @returns The task with the specified ID.
   * @throws NotFoundException if the task is not found.
   */
  getTaskById(id: string): Task {
    const found = this.tasks.find((task) => task.id === id);

    if (!found) {
      throw new NotFoundException(`Task with ID "${id}" not found`);
    }

    return found;
  }

  /**
   * Deletes a task by its ID.
   * @param id - The ID of the task to delete.
   */
  deleteTaskById(id: string): void {
    const found = this.getTaskById(id);  // Ensure the task exists
    this.tasks = this.tasks.filter((task) => task.id !== found.id);  // Remove the task from the array
  }

  /**
   * Updates the status of a task.
   * @param id - The ID of the task to update.
   * @param status - The new status to set for the task.
   * @returns The updated task.
   */
  updateTaskStatus(id: string, status: TaskStatus): Task {
    let task = this.getTaskById(id);  // Retrieve the task by ID
    task.status = status;  // Update the task's status
    return task;
  }
}

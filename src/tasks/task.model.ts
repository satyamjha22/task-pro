/**
 * Interface representing a Task.
 * Contains the properties that define a task.
 */
export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}

/**
 * Enum representing the possible statuses of a task.
 */
export enum TaskStatus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}

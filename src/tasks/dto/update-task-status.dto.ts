import { IsEnum } from 'class-validator';
import { TaskStatus } from '../task.model';

/**
 * Data Transfer Object for updating the status of a task.
 * Contains a single field for the new status of the task.
 */
export class UpdateTaskStatusDto {
    /**
     * Field for the new status of the task.
     * Uses class-validator decorator to ensure it is a valid TaskStatus enum value.
     */
    @IsEnum(TaskStatus)
    status: TaskStatus;
}

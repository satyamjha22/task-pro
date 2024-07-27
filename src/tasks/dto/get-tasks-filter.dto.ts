import { IsEnum, IsOptional, IsString } from 'class-validator';
import { TaskStatus } from '../task.model';

/**
 * Data Transfer Object for filtering tasks.
 * Contains optional fields for filtering tasks by status and search term.
 */
export class GetTaskFilterDto {
    /**
     * Optional field to filter tasks by status.
     * Uses class-validator decorators to ensure it is a valid TaskStatus enum value if provided.
     */
    @IsOptional()
    @IsEnum(TaskStatus)
    status?: TaskStatus;

    /**
     * Optional field to filter tasks by a search term.
     * Uses class-validator decorators to ensure it is a string if provided.
     */
    @IsOptional()
    @IsString()
    search?: string;
}

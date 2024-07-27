import { IsNotEmpty } from 'class-validator';

/**
 * Data Transfer Object for creating a new task.
 */
export class CreateTaskDto {
    /**
     * Uses class-validator decorator to ensure it is not empty.
     */
    @IsNotEmpty()
    title: string;

    /**
     * Uses class-validator decorator to ensure it is not empty.
     */
    @IsNotEmpty()
    description: string;
}

import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';

/**
 * Root module of the application.
 * This module imports the TasksModule, making it available throughout the application.
 */
@Module({
  // Specifies the modules to be imported into this root module
  imports: [TasksModule],
})
export class AppModule {}

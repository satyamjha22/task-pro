import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

/**
 * Main function to bootstrap and start the NestJS application.
 */
async function bootstrap() {
  // Create an instance of the NestJS application using the root module (AppModule)
  const app = await NestFactory.create(AppModule);

  // Use a global validation pipe to automatically validate incoming requests
  app.useGlobalPipes(new ValidationPipe());

  // Start the application and listen for incoming requests on port 3000
  await app.listen(3000);
}

// Call the bootstrap function to start the application
bootstrap();

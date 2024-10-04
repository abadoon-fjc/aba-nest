import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { initKafka } from '../kafka/kafka-config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Initialize Kafka
  await initKafka();

  await app.listen(3000); // Update with your port
  console.log('Application is running on: http://localhost:3000');
}
bootstrap();

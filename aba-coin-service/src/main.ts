import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { initKafka } from '../kafka/kafka-config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await initKafka();

  await app.listen(3000);
  console.log('Application is running on: http://localhost:3000');
}
bootstrap();

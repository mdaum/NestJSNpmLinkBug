import { NestFactory } from '@nestjs/core';
import { ModuleA } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(ModuleA);
  await app.listen(3000);
}
bootstrap();

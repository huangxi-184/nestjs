import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 开启CROS,解决跨域
  app.enableCors();
  await app.listen(3000);
}
bootstrap();

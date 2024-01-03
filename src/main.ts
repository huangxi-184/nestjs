import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 开启Swagger配置
  const config = new DocumentBuilder()
    .setTitle('Nest example')
    .setDescription('The Nest API description')
    .setVersion('1.0')
    .addTag('Nest API')
    .addBearerAuth({
      type: 'http',
      description: 'JWT Authorization header using the Bearer scheme. Example: "Authorization: Bearer {token}"',
      name: 'Authorization',
    })
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('doc', app, document);

  // 开启CROS,解决跨域,使用nginx.反向代理
  // app.enableCors();
  await app.listen(3000);
}
bootstrap();

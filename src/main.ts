import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Ticket Management System API')
    .setDescription('API documentation for Ticket & Agent services')
    .setVersion('1.0')
    .addTag('Tickets')
    .addTag('Agents')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);
  await app.listen(4000);
}
bootstrap();

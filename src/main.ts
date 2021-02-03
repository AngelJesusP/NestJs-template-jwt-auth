import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';
import { urlencoded, json } from 'express';
import { renderFile } from 'ejs';

async function bootstrap() {

  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  
  app.set('views', join(__dirname, 'views'));
  app.engine('html', renderFile);
  app.set('view engine', 'html');

  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  

  app.use(urlencoded({extended: false}));
  app.use(json());
  await app.listen(process.env.PORT || 3000, () => console.log('Servidor en proceso'));
}
bootstrap();

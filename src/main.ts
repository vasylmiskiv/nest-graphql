import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = await app.get(ConfigService);
  const PORT = config.get<number>('PORT');
  console.log(PORT);
  await app.listen(PORT || 8080, () => {
    console.log(`listening on port ${PORT}`);
  });
}

bootstrap();

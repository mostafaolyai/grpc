import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        package: 'storeproto',
        protoPath: join(__dirname, '../../protos/store.proto'),
        url: 'localhost:50050',
      },
    },
  );
  await app.listen();
}
bootstrap();

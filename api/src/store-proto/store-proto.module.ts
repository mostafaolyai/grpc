import { Module } from '@nestjs/common';
import { StoreProtoController } from './store-proto.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'STORE_PACKAGE',
        transport: Transport.GRPC,
        options: {
          url: 'localhost:50050',
          package: 'storeproto',
          protoPath: join(__dirname, '../../../protos/store.proto'),
        },
      },
    ]),
  ],
  controllers: [StoreProtoController],
})
export class StoreProtoModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StoreProtoModule } from './store-proto/store-proto.module';

@Module({
  imports: [StoreProtoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

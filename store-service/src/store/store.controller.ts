import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

@Controller('store')
export class StoreController {
  stores = [
    {
      id: 1,
      name: 'store1',
    },
    {
      id: 2,
      name: 'store2',
    },
    {
      id: 3,
      name: 'store3',
    },
  ];

  @GrpcMethod('StoreService', 'getStores')
  getStores() {
    return { stores: this.stores };
  }

  @GrpcMethod('StoreService', 'addStore')
  addStore(body: { id: number; name: string }) {
    this.stores.push(body);

    return { stores: this.stores };
  }
}

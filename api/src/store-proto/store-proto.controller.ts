import { Body, Controller, Get, Inject, OnModuleInit, Post } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';

interface StoreService{
    getStores({}): Observable<any>;
    addStore(request:{id:number, name:string}): Observable<any>;
}

@Controller('store-proto')
export class StoreProtoController implements OnModuleInit {
    private storeService: StoreService

    constructor(@Inject("STORE_PACKAGE") private client : ClientGrpc){}

    onModuleInit() {
        this.storeService = this.client.getService<StoreService>('StoreService');
    }

    @Get()
    async getStores(){
        return this.storeService.getStores(null)
    }

    @Post()
    async addStores(@Body() body:{id:number, name:string}){
        return this.storeService.addStore(body)
    }
}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../auth/auth.module';
import { ItemRepository } from './item.repository';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';

@Module({
  imports: [TypeOrmModule.forFeature([ItemRepository]), AuthModule], // MEMO: auth.moduleでexportsしたモジュールを利用可能にする
  controllers: [ItemsController],
  providers: [ItemsService],
})
export class ItemsModule {}

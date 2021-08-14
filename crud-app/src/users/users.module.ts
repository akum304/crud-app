import {  Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfigAsync } from 'src/config/typeorm.config';
import { Repository } from 'typeorm';
import { UsersController } from './controller/users/users.controller';
import { UsersEntity } from './entity/users.entity';
import { UsersService } from './service/users/users.service';
import { ConfigModule } from '@nestjs/config';

@Module({
    imports: [TypeOrmModule.forRootAsync(typeOrmConfigAsync),TypeOrmModule.forFeature([UsersEntity])],
    providers:[UsersService],
    controllers:[UsersController]
})
export class UsersModule {}

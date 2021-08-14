import { Inject } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModuleAsyncOptions, TypeOrmModuleOptions } from "@nestjs/typeorm";
import { dirname } from "path/posix";
import { async } from "rxjs";




export default class TypeOrmConfig{
    static getOrmConfig(configService:ConfigService):TypeOrmModuleOptions{
        return{
    type:     "mysql",
    host:    configService.get('DB_HOST'),
    username: "root",
    password: "Submanagehai@1",
    port:     3306,
    database: "myDb",
    entities: [__dirname+'/../**/*.entity{.ts,.js}'],
    synchronize: true



        }
    }
}


export const typeOrmConfigAsync:TypeOrmModuleAsyncOptions={
    imports:[ConfigModule],
    useFactory: async (configService:ConfigService):
    Promise<TypeOrmModuleOptions>=>TypeOrmConfig.getOrmConfig(configService),
    inject:[ConfigService]
    
};


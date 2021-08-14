import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersDTO } from 'src/users/dto/users.dto';
import { UsersEntity } from 'src/users/entity/users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UsersEntity)
        private usersRepository: Repository<UsersEntity>,
      ) {}

      async showAll() {
        return await this.usersRepository.find();
      }

      async create(data: UsersDTO) {
        const user = this.usersRepository.create(data);
        await this.usersRepository.save(data);
        return user;
      }

      

      async read(id: number) {
        return await this.usersRepository.findOne({ where: { id: id } });
      }

      async update(id: number, data: Partial<UsersDTO>) {
        await this.usersRepository.update({ id }, data);
        return await this.usersRepository.findOne({ id });
      }

      async destroy(id: number) {
        await this.usersRepository.delete({ id });
        return { deleted: true };
      }
}

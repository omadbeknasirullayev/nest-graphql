import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private readonly userRepository: Repository <User>) {}
  async create(createUserDto: CreateUserDto) {
    return await this.userRepository.save({...createUserDto})
  }

  async findAll() {
    return await this.userRepository.find()
  }

  async GetOne(id: number) {
    return await this.userRepository.findOne({where :{id}});
  }

  async updateUser(updateUserDto: UpdateUserDto) {
    await this.userRepository.update({id: updateUserDto.id}, {...updateUserDto})
    
    return await this.GetOne(updateUserDto.id)

    }

  async remove(id: number) {
    await this.userRepository.delete({id});
    return id
  }
}
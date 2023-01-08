import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@Resolver('User')
export class UsersResolver {
    constructor(private readonly userService: UsersService){}

    @Mutation(() => User)
    async create (
        @Args('create') createUserDto: CreateUserDto){
            return await this.userService.create(createUserDto)
        }
    @Mutation(() => User)
    async update(@Args('updateUser') updateUserDto: UpdateUserDto) {
        return await this.userService.updateUser(updateUserDto)
    }

    @Query(() => User)
    async getOneUser (@Args('id') id: number ): Promise<User> {
        return await this.userService.GetOne(id)
    }
    @Mutation(() => Number)
    async removeUser(@Args('id') id: number):Promise<number>{
        return await this.userService.remove(id)
    }
    @Query(() => [User])
    async findAll() :Promise<User[]> {
        return await this.userService.findAll()
    }
    }
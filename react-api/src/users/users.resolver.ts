import { Injectable } from '@nestjs/common';
import { Args, Mutation, Query } from '@nestjs/graphql';
import { User } from './users.entity';
import { CreateUserInput } from './users.input';
import { UsersService } from './users.service';
import { UserType } from './users.type';

@Injectable()
export class UsersResolver {
  constructor(private usersService: UsersService) {}

 @Query((returns) => UserType)
  user(@Args('username') username: string) {
    return this.usersService.findOne(username);
  }

  @Query((returns) => [UserType])
  users() {
    return this.usersService.findAll();
  }

  @Mutation((returns) => UserType)
  createUser(
    @Args('createUserInput') createUserInput: CreateUserInput,
  ): Promise<User> {
    return this.usersService.createUser(createUserInput);
  }
}

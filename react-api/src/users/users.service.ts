import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User, Role } from './users.entity';
import { v4 as uuid } from 'uuid';
import { CreateUserInput } from './users.input';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(username: string): Promise<User> {
    return this.usersRepository.findOneBy({ username });
  }

  async createUser(createUserInput: CreateUserInput): Promise<User> {
    const user = this.usersRepository.create({
      id: uuid(),
      role: Role.USER,
      ...createUserInput,
    });

    return this.usersRepository.save(user);
  }
}

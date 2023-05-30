import { Field, InputType } from '@nestjs/graphql';
import { Role } from './users.entity';

@InputType()
export class CreateUserInput {
  @Field()
  username: string;

  @Field()
  email: string;

  @Field()
  password: string;
}

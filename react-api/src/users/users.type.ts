import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Role } from './users.entity';

@ObjectType('User')
export class UserType {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Field((type) => ID)
  id: string;

  @Field()
  username: string;

  @Field()
  password: string;

  @Field()
  email: string;
}

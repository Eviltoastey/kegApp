import { Field, ID, ObjectType } from '@nestjs/graphql';
import { BeerType } from 'src/beer/beer.type';

@ObjectType('Keg')
export class KegType {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Field((type) => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  active: number;

  @Field()
  temprature: number;

  @Field()
  stage: number;

  @Field()
  beer: BeerType;

  @Field()
  image: string;
}

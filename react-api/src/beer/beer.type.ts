import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Flavour, Style } from './beer.entity';

@ObjectType('Beer')
export class BeerType {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Field((type) => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  active: boolean;

  @Field((type) => Flavour)
  flavour: Flavour;

  @Field((type) => Style)
  style: Style;

  @Field()
  alcohol: number;

  @Field()
  styleDescription: string;

  @Field()
  subStyle: string;

  @Field()
  subFlavour: string;

  @Field()
  startDate: string;

  @Field()
  endDate: string;
}

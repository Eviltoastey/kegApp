import { Field, InputType } from '@nestjs/graphql';
import { Flavour, Style } from './beer.entity';
import { IsDateString, IsNumber, Min, Max } from 'class-validator';

@InputType()
export class createBeerInput {
  @Field()
  active: boolean;

  @Field((type) => Flavour)
  flavour: Flavour;

  @Field((type) => Style)
  style: Style;

  @IsNumber()
  @Min(0)
  @Max(20)
  @Field()
  alcohol: number;

  // todo: add custom method to check with the minibrew api if the minibrew id exists
  // todo: add check to see if the id is unique in our db
  @IsNumber()
  @Field()
  minibrewId: number;

  @IsDateString()
  @Field()
  endDate: string;
}

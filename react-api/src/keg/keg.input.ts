import { Field, InputType } from '@nestjs/graphql';
import { MinLength } from 'class-validator';
import { Beer } from 'src/beer/beer.entity';
import { JoinColumn, OneToOne } from 'typeorm';

@InputType()
export class CreateKegInput {
  @MinLength(1)
  @Field()
  name: string;

  //Enter the id for the minibrew keg here
  //todo: add method that check if keg actually exists in api
  @Field()
  minibrewId: string;

  //Enter the id for the beer here (our database uuid)
  //todo: add method that check if beer actually exists
  @Field()
  beerId: string;

  @OneToOne(() => Beer)
  @JoinColumn()
  beer: Beer;
}

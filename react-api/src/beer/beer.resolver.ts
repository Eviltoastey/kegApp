import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Beer } from './beer.entity';
import { createBeerInput } from './beer.input';
import { BeerService } from './beer.service';
import { BeerType } from './beer.type';

@Resolver((of) => BeerType)
export class BeerResolver {
  constructor(private beerService: BeerService) {}

  @Query((returns) => BeerType)
  beer(@Args('id') id: string) {
    return this.beerService.findOne(id);
  }

  @Query((returns) => [BeerType])
  beers() {
    return this.beerService.findAll();
  }

  @Mutation((returns) => BeerType)
  createBeer(
    @Args('createBeerInput') createBeerInput: createBeerInput,
  ): Promise<Beer> {
    return this.beerService.createBeer(createBeerInput);
  }
}

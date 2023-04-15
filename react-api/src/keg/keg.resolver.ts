import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Keg } from './keg.entity';
import { CreateKegInput } from './keg.input';
import { KegService } from './keg.service';
import { KegType } from './keg.type';

@Resolver((of) => KegType)
export class KegResolver {
  constructor(private kegService: KegService) {}

  @Query((returns) => KegType)
  keg(@Args('id') id: string) {
    return this.kegService.findOne(id);
  }

  @Query((returns) => [KegType])
  async kegs() {
    return this.kegService.findAll();
  }

  @Mutation((returns) => KegType)
  createKeg(
    @Args('createKegInput') createKegInput: CreateKegInput,
  ): Promise<Keg> {
    return this.kegService.createKeg(createKegInput);
  }
}

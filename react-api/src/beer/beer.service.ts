import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Beer } from './beer.entity';
import { Repository } from 'typeorm';
import { createBeerInput } from './beer.input';
import { v4 as uuid } from 'uuid';
import {
  MinibrewBeer,
  MinibrewBeerDetail,
} from 'src/minibrew/interfaces/MinibrewBeer';
import { MinibrewService } from 'src/minibrew/minibrew.service';

@Injectable()
export class BeerService {
  constructor(
    @InjectRepository(Beer) private beerRepository: Repository<Beer>,
    private minibrewService: MinibrewService,
  ) {}

  findAll(): Promise<Beer[]> {
    return this.beerRepository.find();
  }

  findOne(id: string): Promise<Beer> {
    return this.beerRepository.findOneBy({ id });
  }

  async createBeer(createBeerInput: createBeerInput): Promise<Beer> {
    const minibrewBeerDetail: MinibrewBeerDetail =
      await this.minibrewService.getBeerDetail(createBeerInput.minibrewId);

    const minibrewBeer: MinibrewBeer = await this.minibrewService.getBeer(
      createBeerInput.minibrewId,
    );

    const beer = this.beerRepository.create({
      id: uuid(),
      name: minibrewBeer?.name,
      minibrewId: minibrewBeer?.id,
      startDate: minibrewBeer?.created,
      styleDescription: minibrewBeer?.style.description,
      subFlavour: minibrewBeer?.style.blurb,
      subStyle: minibrewBeer?.style.name,
      description: minibrewBeerDetail[0]?.public_note,
      ...createBeerInput,
    });

    return this.beerRepository.save(beer);
  }

  //TODO create update beer function
}

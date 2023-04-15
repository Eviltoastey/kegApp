import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MiniBrewModule } from 'src/minibrew/minibrew.module';
import { Beer } from './beer.entity';
import { BeerResolver } from './beer.resolver';
import { BeerService } from './beer.service';

@Module({
  imports: [TypeOrmModule.forFeature([Beer]), MiniBrewModule],
  providers: [BeerService, BeerResolver],
  exports: [BeerService],
})
export class BeerModule {}

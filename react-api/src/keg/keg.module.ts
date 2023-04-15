import { Module } from '@nestjs/common';
import { KegResolver } from './keg.resolver';
import { KegService } from './keg.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Keg } from './keg.entity';
import { MiniBrewModule } from 'src/minibrew/minibrew.module';

@Module({
  imports: [TypeOrmModule.forFeature([Keg]), MiniBrewModule],
  providers: [KegResolver, KegService],
  exports: [KegService],
})
export class KegModule {}

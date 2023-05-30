import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MinibrewService } from './minibrew.service';

@Module({
  imports: [HttpModule, ConfigModule],
  providers: [MinibrewService],
  exports: [MinibrewService],
})
export class MiniBrewModule {}

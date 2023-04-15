import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { MinibrewService } from './minibrew.service';

@Module({
  imports: [HttpModule],
  providers: [MinibrewService],
  exports: [MinibrewService],
})
export class MiniBrewModule {}

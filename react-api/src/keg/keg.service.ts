import { Injectable } from '@nestjs/common';
import { Keg } from './keg.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { CreateKegInput } from './keg.input';
import { MinibrewService } from 'src/minibrew/minibrew.service';
import { MinibrewKeg } from 'src/minibrew/interfaces/minibrewKeg';
import { KegType } from './keg.type';

@Injectable()
export class KegService {
  constructor(
    @InjectRepository(Keg) private kegRepository: Repository<Keg>,
    private minibrewService: MinibrewService,
  ) {}

  async findAll(): Promise<Keg[]> {
    return this.kegRepository.find({
      relations: ['beer'],
    });
  }

  async findOne(id: string): Promise<KegType> {
    //todo: combine api data with database data and return that.
    const keg: Keg = await this.kegRepository.findOne({
      where: {
        id,
      },
      relations: ['beer'],
    });

    const minibrewData: MinibrewKeg = await this.minibrewService.getKeg(
      keg.minibrewId,
    );

    return {
      id: keg.id,
      name: keg.name,
      active: minibrewData.connection_status,
      temprature: 1,
      stage: minibrewData.process_type,
      beer: keg.beer,
      image: minibrewData.image,
    };
  }

  async remove(id: string): Promise<void> {
    await this.kegRepository.delete(id);
  }

  async createKeg(createKegInput: CreateKegInput): Promise<Keg> {
    // get static minibrew data to put in our database
    const minibrewKeg: MinibrewKeg = await this.minibrewService.getKeg(
      createKegInput.minibrewId,
    );

    const keg: Keg = this.kegRepository.create({
      id: uuid(),
      beer: createKegInput?.beerId,
      active: minibrewKeg.connection_status,
      image: minibrewKeg.image,
      ...createKegInput,
    });

    return this.kegRepository.save(keg);
  }
}

import { ObjectType } from '@nestjs/graphql';
import { Beer } from 'src/beer/beer.entity';
import { Entity, PrimaryColumn, Column, OneToOne, JoinColumn } from 'typeorm';

@Entity()
export class Keg {
  @PrimaryColumn()
  id: string;

  @Column()
  minibrewId: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  active: number;

  @Column({ nullable: true })
  image: string;

  @OneToOne(() => Beer, (beer) => beer.keg)
  @JoinColumn()
  beer: Beer;
}

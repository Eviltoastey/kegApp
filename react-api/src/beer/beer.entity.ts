import { Entity, PrimaryColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { registerEnumType } from '@nestjs/graphql';
import { Keg } from 'src/keg/keg.entity';

export enum Style {
  IPA,
  IMPERIAL_IPA,
  SOUR,
  SMOOTHIE_SOUR,
  GOSE,
  STOUT,
}

registerEnumType(Style, {
  name: 'Style',
});

export enum Flavour {
  SOUR,
  SWEET,
  SMOKY,
  BITTER,
  FRESH,
}

registerEnumType(Flavour, {
  name: 'Flavour',
});

@Entity()
export class Beer {
  @PrimaryColumn()
  id: string;

  @Column()
  minibrewId: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  styleDescription: string;

  @Column({ nullable: true })
  subStyle: string;

  @Column({ nullable: true })
  subFlavour: string;

  @Column({ nullable: true })
  active: boolean;

  @Column({ nullable: true })
  style: Style;

  @Column({ nullable: true })
  flavour: Flavour;

  @Column({ nullable: true })
  endDate: string;

  @Column({ nullable: true })
  alcohol: number;

  @Column()
  startDate: string;

  @OneToOne(() => Keg, (keg) => keg.beer)
  keg: Keg;
}

import { Entity, PrimaryColumn, Column } from 'typeorm';
import { registerEnumType } from '@nestjs/graphql';
import { Keg } from 'src/keg/keg.entity';

export enum Role {
  ADMIN,
  USER,
}

registerEnumType(Role, {
  name: 'Role',
});

@Entity()
export class User {
  @PrimaryColumn()
  id: string;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  role: Role;
}

import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { KegModule } from './keg/keg.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Keg } from './keg/keg.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { BeerModule } from './beer/beer.module';
import { Beer } from './beer/beer.entity';
import { MiniBrewModule } from './minibrew/minibrew.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { User } from './users/users.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: +configService.get<number>('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        entities: [Keg, Beer, User],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    KegModule,
    BeerModule,
    MiniBrewModule,
    AuthModule,
    UsersModule,
  ],
})
export class AppModule {}

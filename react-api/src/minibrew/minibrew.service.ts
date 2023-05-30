import { Injectable, OnModuleInit } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';
import { MinibrewBeer, MinibrewBeerDetail } from './interfaces/MinibrewBeer';
import { MinibrewKeg } from './interfaces/minibrewKeg';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MinibrewService implements OnModuleInit {
  bearer: string;
  constructor(
    private readonly httpService: HttpService,
    private configService: ConfigService,
  ) {
    this.bearer = 'Bearer eb7e1835174641d48420c357cb706ae4';
  }

  //TODO: sets a bearer for every module that uses this service.. Kinda nnoying need to fix later so it gets called once
  async onModuleInit() {
    if (!this.bearer) {
      console.log('IF USING LOCALLY COPY BEARER AND SET IN CONSTRUCTOR');
      console.log(this.bearer);
      this.bearer = await this.getNewToken();
    } else {
      console.log('default bearer used');
    }
  }

  async getNewToken(): Promise<string> {
    const headersRequest = {
      Authorization: 'TOKEN 4c433da015985d17669c604a5a4e2c906083e815',
      Origin: `https://pro.minibrew.io`,
      'sec-fetch-mode': 'cors',
      'content-type': 'application/json',
      Client: 'Breweryportal',
    };

    const body = {
      email: this.configService.get('DB_USERNAME'),
      password: this.configService.get('DB_USERNAME'),
    };

    const { data } = await firstValueFrom(
      this.httpService
        .post('https://api.minibrew.io/v2/token/', body, {
          headers: headersRequest,
        })
        .pipe(
          catchError((error: AxiosError) => {
            console.log(error.response.status);
            throw 'An error happened!';
          }),
        ),
    );

    return 'Bearer ' + data.token;
  }

  async getData(url) {
    const headersRequest = {
      Authorization: this.bearer,
      Origin: `https://pro.minibrew.io`,
      'sec-fetch-mode': 'cors',
      'content-type': 'application/json',
      Client: 'Breweryportal',
    };

    const { data } = await firstValueFrom(
      this.httpService
        .get(url, {
          headers: headersRequest,
        })
        .pipe(
          catchError((error: AxiosError) => {
            console.log(error.response.status);

            if (error.response.status == 401) {
              this.getNewToken();
            }

            throw 'An error happened or the bearer token was outdated and the app needs a refresh!';
          }),
        ),
    );

    return data;
  }

  async getBeers(): Promise<MinibrewBeer[]> {
    const minibrewBeers: MinibrewBeer[] = await this.getData(
      'https://api.minibrew.io/v1/beers/?brewer=2983',
    );

    return minibrewBeers;
  }

  // you can find the id on the beer page itself
  // the detail call for some reason has the info for the brewing process itself
  async getBeerDetail(id: number): Promise<MinibrewBeerDetail> {
    const minibrewBeerDetail: MinibrewBeerDetail = await this.getData(
      'https://api.minibrew.io/v1/recipes/?beer=' + id,
    );

    return minibrewBeerDetail;
  }

  // you can find the id on the beer page itself
  // this call for some reason has the info of the beer itself inclusing the style
  async getBeer(id: number): Promise<MinibrewBeer> {
    const minibrewBeer: MinibrewBeer = await this.getData(
      'https://api.minibrew.io/v1/beers/' + id + '/',
    );

    return minibrewBeer;
  }

  // you can find the id on the beer page itself
  // this call for some reason has the info of the beer itself inclusing the style
  async getKeg(minibrewId: string): Promise<MinibrewKeg> {
    const devices = await this.getData('https://api.minibrew.io/v1/devices/');

    // todo: we can use device_type == 1 to make sure the device we are getting is a keg.
    // for now this is a bit of an overkill since we only have kegs.

    return devices.filter((device) => device.uuid == minibrewId)[0];
  }
}

// date format '2022-07-24T15:09:07Z'
export interface MinibrewBeer {
  id: number;
  created: string;
  modified: string;
  name: string;
  style: MinibrewBeerStyle;
}

export interface MinibrewBeerStyle {
  id: number;
  name: string;
  blurb: string;
  description: string;
}

export interface MinibrewBeerDetail {
  id: number;
  created: string;
  modified: string;
  beer_name: string;
  public_note: string;
  kcal: string;
  ibu: number;
  og: string;
  fg: string;
  serving_temperature: string;
}

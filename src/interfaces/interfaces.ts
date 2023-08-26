export interface PokemonBaseRequest {
  name: string;
  url: string;
}

export interface PokemonBaseWithId extends PokemonBaseRequest {
  id: number;
}

export interface Pokemon {
  name: any;
  img: any;
}

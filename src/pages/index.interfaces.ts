export interface iHomeProps {
  listPokemon: Array<iPokemonBaseWithId>;
}

export interface iPokemonBaseRequest {
  name: string;
  url: string;
}

export interface iPokemonBaseWithId extends iPokemonBaseRequest {
  id: number;
}

export interface iPokemon {
  name: any;
  img: any;
}

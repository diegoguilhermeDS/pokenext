export interface iHomeProps {
  listPokemon: Array<any>;
}

export interface iPokemonBaseRequest {
  name: string;
  url: string;
  id: number
}

export interface iPokemon {
  name: any;
  img: any;
}
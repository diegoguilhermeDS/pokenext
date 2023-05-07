import { iPokemonBaseRequest, iPokemonBaseWithId } from "@/pages/index.interfaces";
import React from "react";
import CardPokemon from "./cardPokemon";

interface iListPokemonProps {
  listPokemon: iPokemonBaseWithId[];
}

export default function ListPokemon({ listPokemon }: iListPokemonProps) {
  return (
    <ul className="grid grid-cols-5 gap-y-6 overflow-y-auto mx-auto h-[450px] md:w-[1200px] border-2 p-2 rounded-md border-brand-100 bg-brand-50 mb-10">
      {listPokemon.map((pokemon, index) => (
        <CardPokemon pokemon={pokemon} key={index} />
      ))}
    </ul>
  );
}

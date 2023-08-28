import React, { Suspense } from "react";
import CardPokemon from "../Pokemon/Card";
import { usePokemon } from "@/providers/pokemon.context";
import Loading from "@/pages/loading";

export default function ListPokemon() {
  const { pokemonList } = usePokemon();

  return (
    <ul className="flex overflow-auto gap-6 lg:grid lg:grid-cols-5 lg:gap-y-6 mx-auto h-fit md:w-[1200px] p-2 rounded-md mb-10">
      {pokemonList.map((pokemon) => (
        <>
          <Suspense fallback={<Loading/>}>
            <CardPokemon pokemon={pokemon} key={pokemon.name} />
          </Suspense>
        </>
      ))}
    </ul>
  );
}

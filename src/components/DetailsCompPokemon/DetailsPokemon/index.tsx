import { Ability, PokemonRoot } from "@/interfaces/pokemon.interfaces";
import React from "react";

interface iDetailsPokemonProps {
  pokemon: PokemonRoot;
}

export default function DetailsPokemon({ pokemon }: iDetailsPokemonProps) {
  return (
    <div className="flex justify-between lg:grid lg:grid-cols-3 gap-3">
      <div className="w-fit">
        <h3 className="font-semibold text-sm text-slate-800 dark:text-white">Height</h3>
        <span className="text-base text-brand-200 dark:text-gray-500">{pokemon.height}</span>
      </div>
      <div className="w-fit">
        <h3 className="font-semibold text-sm text-slate-800 dark:text-white">Abilities</h3>
        <div className="flex flex-col">
          {pokemon.abilities.map((ability: Ability, index: number) => (
            <span className="text-base text-brand-200 dark:text-gray-500" key={index}>
              - {ability.ability.name}
            </span>
          ))}
        </div>
      </div>
      <div className="w-fit">
        <h3 className="font-semibold text-sm text-slate-800 dark:text-white">Weight</h3>
        <span className="text-base text-brand-200 dark:text-gray-500">{pokemon.weight}</span>
      </div>
    </div>
  );
}

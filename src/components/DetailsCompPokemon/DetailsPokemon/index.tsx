import { Ability, PokemonRoot } from "@/pages/pokemon/pokemon.interfaces";
import React from "react";

interface iDetailsPokemonProps {
  pokemon: PokemonRoot;
}

export default function DetailsPokemon({ pokemon }: iDetailsPokemonProps) {
  return (
    <div className="grid grid-cols-2 gap-3">
      <div>
        <h3 className="font-semibold text-sm text-slate-800">Height</h3>
        <span className="text-base text-brand-200">{pokemon.height}</span>
      </div>
      <div>
        <h3 className="font-semibold text-sm text-slate-800">Abilities</h3>
        <div className="flex flex-col">
          {pokemon.abilities.map((ability: Ability, index: number) => (
            <span className="text-base text-brand-200" key={index}>
              - {ability.ability.name}
            </span>
          ))}
        </div>
      </div>
      <div>
        <h3 className="font-semibold text-sm text-slate-800">Weight</h3>
        <span className="text-base text-brand-200">{pokemon.weight}</span>
      </div>
    </div>
  );
}

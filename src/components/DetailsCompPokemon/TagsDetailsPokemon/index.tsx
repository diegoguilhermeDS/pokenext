import { TagsDetailsPokemonDb } from "@/database/TagsDetailsPokemon.database";
import { usePokemonDetails } from "@/providers/pokemonDetails.context";
import React from "react";

export default function TagsDetailsPokemon() {
  const { tagDetails, setTagDetails } = usePokemonDetails();

  return (
    <ul className="flex gap-6 justify-center mb-4">
      {TagsDetailsPokemonDb.map((tag, index) => (
        <li
          key={index}
          className={`font-semibold text-sm cursor-pointer transition-colors ease-in-out ${
            tag == tagDetails ? "text-brand-150" : "text-slate-400"
          }`}
          onClick={() => setTagDetails(tag)}
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}

import { TagsDetailsPokemonDb } from "@/database/TagsDetailsPokemon.database";
import { usePokemon } from "@/providers/pokemon.context";
import React from "react";

export default function TagsDetailsPokemon() {
  const { tagDetails, setTagDetails } = usePokemon();

  return (
    <ul className="flex gap-6 justify-center mb-4">
      {TagsDetailsPokemonDb.map((tag, index) => (
        <li
          key={index}
          className={`font-semibold text-sm cursor-pointer transition-colors ease-in-out ${
            tag == tagDetails ? "text-brand-150 dark:text-white underline" : "text-slate-400 dark:text-brand-150"
          }`}
          onClick={() => setTagDetails(tag)}
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}

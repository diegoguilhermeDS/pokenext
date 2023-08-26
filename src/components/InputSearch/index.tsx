import { usePokemon } from "@/providers/pokemon.context";
import { api } from "@/services/api";
import React, { ChangeEvent } from "react";

export default function Search() {
 
  const { searchPokemon } = usePokemon();

  return (
    <div className="h-10 flex justify-between gap-4 bg-slate-200 dark:bg-gray-800 rounded-md w-11/12 md:w-1/3 shadow-sm overflow-hidden">
      <button className="w-12 flex justify-center items-center">
        <svg
          className="w-8 stroke-brand-100 dark:stroke-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          ></path>
        </svg>
      </button>
      <input
        type="text"
        placeholder="Name or number"
        className="w-full bg-transparent outline-none placeholder:text-slate-400 text-slate-700"
        onChange={(event) => searchPokemon(event)}
      />
    </div>
  );
}

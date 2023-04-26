/* eslint-disable react-hooks/exhaustive-deps */
import { iPokemon, iPokemonBaseRequest } from "@/pages/index.interfaces";
import { api } from "@/services/api";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface iCardPokemonProps {
  pokemon: iPokemonBaseRequest;
}

export default function CardPokemon({ pokemon }: iCardPokemonProps) {
  /* const [inforPokemon, setInforPokemon] = useState<iPokemon>();

  const getpokemonInfor = async () => {
    const res = await api.get(`${pokemon.name}`);

    const pokemonData = {
      name: res.data.name,
      img: res.data.sprites.other.dream_world.front_default,
    };

    
    console.log(inforPokemon)
    setInforPokemon(pokemonData);
  };

  useEffect(() => {
    getpokemonInfor();
  }, []); */

  return (
    <Link href={`/pokemon/${pokemon.id}`} >
        <li className="bg-white h-[200px] w-[160px] overflow-hidden rounded-md shadow-md p-2 flex flex-col justify-between">
          <div className="w-full flex justify-center overflow-hidden">
              <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`} alt={pokemon.name} width="100" height="50" className="object-fill"/>
          </div>
          <div className="flex justify-between">
            <div>
                <span className="text-xs text-brand-100 opacity-70">{pokemon.id >= 10 && pokemon.id <= 99 ? `n 0${pokemon.id}` :  pokemon.id < 10 ? `n 00${pokemon.id}` : `n ${pokemon.id}`}</span>
                <h3 className="text-brand-150 font-semibold">{pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</h3>
            </div>
            <div>
                <span>Type</span>
            </div>
          </div>
        </li>
    </Link>
  );
}

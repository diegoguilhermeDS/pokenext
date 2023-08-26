import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { api } from "@/services/api";
import { PokemonBaseWithId } from "@/interfaces/interfaces";
import { PokemonRoot } from "@/interfaces/pokemon.interfaces";
import TagType from "../TagType";
import ContainerImgPokemon from "../ContainerImg";
import NumberPokedex from "../NumberPokedex";
import { usePokemon } from "@/providers/pokemon.context";

interface CardPokemonProps {
  pokemon: PokemonBaseWithId;
}

export default function CardPokemon({ pokemon }: CardPokemonProps) {
  const [currentPokemon, setCurrentPokemon] = useState<PokemonRoot>();

  const { getpokemonInfor } = usePokemon();

  (async () => {
    const getPokemon = await getpokemonInfor(pokemon.name);
    setCurrentPokemon(getPokemon);
  })();

  let pathImg = ""
  if (currentPokemon) {
    pathImg = currentPokemon.sprites.other.dream_world.front_default
      ? currentPokemon.sprites.other.dream_world.front_default
      : currentPokemon.sprites.front_default;
  }

  return (
    <>
      {currentPokemon && (
        <Link href={`/pokemon/${currentPokemon.id}`}>
          <li className="card transition-500 group">
            <ContainerImgPokemon type={currentPokemon.types[0].type.name}>
              <Image
                src={pathImg}
                alt={currentPokemon.name}
                width="100"
                height="100"
                className="object-fill group-hover:scale-110 transition-500"
              />
            </ContainerImgPokemon>
            <div className="flex flex-col justify-center h-[50%]">
              <div className="flex justify-between items-center">
                <NumberPokedex number={currentPokemon.id} />
                {currentPokemon && (
                  <TagType content={currentPokemon.types[0].type.name} />
                )}
              </div>
              <div>
                <h5 className="text-brand-150 dark:text-white">
                  {currentPokemon.name[0].toUpperCase() +
                    currentPokemon.name.slice(1)}
                </h5>
              </div>
            </div>
          </li>
        </Link>
      )}
    </>
  );
}

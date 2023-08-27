import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PokemonRoot } from "@/interfaces/pokemon.interfaces";
import TagType from "../TagType";
import ContainerImgPokemon from "../ContainerImg";
import NumberPokedex from "../NumberPokedex";

interface CardPokemonProps {
  pokemon: PokemonRoot;
}

export default function CardPokemon({ pokemon }: CardPokemonProps) {
  let pathImg = "";
  if (pokemon) {
    pathImg = pokemon.sprites.other.dream_world.front_default
      ? pokemon.sprites.other.dream_world.front_default
      : pokemon.sprites.front_default;
  }

  return (
    <>
      {pokemon && (
        <Link href={`/pokemon/${pokemon.id}`}>
          <li className="card transition-500 group">
            <ContainerImgPokemon type={pokemon.types[0].type.name}>
              <Image
                src={pathImg}
                alt={pokemon.name}
                width="100"
                height="100"
                className="object-fill group-hover:scale-110 transition-500"
              />
            </ContainerImgPokemon>
            <div className="flex flex-col justify-center h-[50%]">
              <div className="flex justify-between items-center">
                <NumberPokedex number={pokemon.id} />
                {pokemon && <TagType content={pokemon.types[0].type.name} />}
              </div>
              <div>
                <h5 className="text-brand-150 dark:text-white">
                  {pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}
                </h5>
              </div>
            </div>
          </li>
        </Link>
      )}
    </>
  );
}

import React from "react";
import Image from "next/image";
import TagType from "../TagType";
import NumberPokedex from "../NumberPokedex";
import ContainerImgPokemon from "../ContainerImg";
import { PokemonRoot, Type } from "@/interfaces";

interface ContainerCardDetailsProps {
  pokemon: PokemonRoot;
}

const ContainerCardDetails = ({ pokemon }: ContainerCardDetailsProps) => {
  let pathImg = pokemon.sprites.other.dream_world.front_default
    ? pokemon.sprites.other.dream_world.front_default
    : pokemon.sprites.front_default;

  return (
    <div className="lg:w-1/2 flex flex-col justify-around gap-1">
      <div className="flex items-end justify-between">
        <div className="mt-3">
          <NumberPokedex number={pokemon.id} />
          <h3 className="text-brand-150 dark:text-white">
            {pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}
          </h3>
        </div>
        <div className="flex gap-3">
          {pokemon.types.map((obj: Type) => (
            <TagType
              content={obj.type.name}
              key={obj.type.name + obj.type.url}
            />
          ))}
        </div>
      </div>
      <ContainerImgPokemon type={pokemon.types[0].type.name}>
        <Image
          src={pathImg}
          alt={pokemon.name}
          width={180}
          height={180}
          className="object-cover"
        />
      </ContainerImgPokemon>
    </div>
  );
};

export default ContainerCardDetails;

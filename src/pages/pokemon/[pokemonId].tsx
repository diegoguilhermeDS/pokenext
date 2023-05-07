/* eslint-disable react-hooks/rules-of-hooks */
import { api } from "@/services/api";
import React from "react";
import { iPokemonBaseRequest } from "../index.interfaces";
import { GetStaticProps } from "next";
import { Type, iPokemonPageProps } from "./pokemon.interfaces";
import Image from "next/image";
import { PokemonContainerImg, PokemonType } from "./style";
import DetailsPokemon from "@/components/DetailsCompPokemon/DetailsPokemon";
import StatsPokemon from "@/components/DetailsCompPokemon/StatsPokemon";
import TagsDetailsPokemon from "@/components/DetailsCompPokemon/TagsDetailsPokemon";
import { usePokemonDetails } from "@/providers/pokemonDetails.context";

export const getStaticPaths = async () => {
  const maxPokemon: number = 251;

  const res = await api.get("", {
    params: {
      limit: maxPokemon,
    },
  });

  const paths = res.data.results.map(
    (pokemon: iPokemonBaseRequest, index: number) => {
      return {
        params: { pokemonId: (index + 1).toString() },
      };
    }
  );

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context): Promise<any> => {
  const id = context.params!.pokemonId;

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

  const data = await res.json();

  return {
    props: { pokemon: data },
  };
};

export default function pokemonPage({ pokemon }: iPokemonPageProps) {
  const { tagDetails } = usePokemonDetails();

  return (
    <>
      <div className="flex justify-center items-center w-full h-[535px] bg-slate-100">
        <div className="h-[450px] w-3/5 border-2 p-2 px-4 rounded-md border-brand-100 bg-brand-50 flex gap-5">
          <div className="w-1/2 flex flex-col justify-around">
            <div className="flex items-end justify-between">
              <div className="mt-3">
                <span className="text-xs text-brand-100 opacity-70">
                  {pokemon.id >= 10 && pokemon.id <= 99
                    ? `n 0${pokemon.id}`
                    : pokemon.id < 10
                    ? `n 00${pokemon.id}`
                    : `n ${pokemon.id}`}
                </span>
                <h1 className="text-xl text-brand-150 font-semibold">
                  {pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}
                </h1>
              </div>
              <div className="flex gap-3">
                {pokemon.types.map((obj: Type, index) => (
                  <PokemonType
                    typeId={
                      Number(obj.type.url.slice(31, 33).replace("/", "")) - 1
                    }
                    key={index}
                  >
                    {obj.type.name[0].toUpperCase() + obj.type.name.slice(1)}
                  </PokemonType>
                ))}
              </div>
            </div>
            <PokemonContainerImg
              typeId={
                Number(
                  pokemon.types[0].type.url.slice(31, 33).replace("/", "")
                ) - 1
              }
            >
              <Image
                src={pokemon.sprites.other.dream_world.front_default}
                alt={pokemon.name}
                width={180}
                height={180}
                className="object-cover"
              />
            </PokemonContainerImg>
          </div>
          <div className="w-1/2 flex flex-col pt-36 bg-violet-5000">
            <TagsDetailsPokemon />
            <div className="bg-brand-100 rounded-lg p-2">
              {tagDetails == "Details" && <DetailsPokemon pokemon={pokemon}/>}
              {tagDetails == "Stats" && <StatsPokemon pokemon={pokemon}/>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { GetStaticProps } from "next";
import Link from "next/link";

import { usePokemon } from "@/providers/pokemon.context";
import { api } from "@/services/api";
import DetailsPokemon from "@/components/DetailsCompPokemon/DetailsPokemon";
import StatsPokemon from "@/components/DetailsCompPokemon/StatsPokemon";
import TagsDetailsPokemon from "@/components/DetailsCompPokemon/TagsDetailsPokemon";
import { FaArrowAltCircleLeft } from "react-icons/fa";

import { PokemonBaseRequest } from "../../interfaces/interfaces";
import { PokemonPageProps } from "../../interfaces";
import ContainerCardDetails from "@/components/Pokemon/ContainerCardDetails";


export const revalidate = 60;

export const getStaticPaths = async () => {
  const maxPokemon: number = 1000;

  const res = await api.get("", {
    params: {
      limit: maxPokemon,
    },
  });

  const paths = res.data.results.slice(0, 5).map(
    (pokemon: PokemonBaseRequest, index: number) => {
      return {
        params: { pokemonId: (index + 1).toString() },
      };
    }
  );

  return {
    paths,
    fallback: 'blocking',
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

const pokemonPage = ({ pokemon }: PokemonPageProps) => {
  const { tagDetails } = usePokemon();

  return (
    <>
      <div className="flex justify-center items-center w-full h-[535px] bg-slate-100 dark:bg-gray-950 min-h-[79.7vh] px-4">
        <div className="relative lg:h-[450px] w-full lg:w-3/5 border-2 p-2 px-4 rounded-md border-brand-100 dark:border-brand-150 bg-brand-50 dark:bg-gray-800 flex flex-col lg:flex-row gap-5">
          <ContainerCardDetails pokemon={pokemon} />

          <div className="lg:w-1/2 flex flex-col lg:pt-36 bg-violet-5000">
            <TagsDetailsPokemon />
            <div className="bg-brand-100 dark:bg-gray-900 rounded-lg p-2">
              {tagDetails == "Details" && <DetailsPokemon pokemon={pokemon} />}
              {tagDetails == "Stats" && <StatsPokemon pokemon={pokemon} />}
            </div>
          </div>

          <Link href={"/"} className="absolute top-4 right-4 buttonPage">
            <FaArrowAltCircleLeft />
          </Link>
        </div>
      </div>
    </>
  );
};

export default pokemonPage;

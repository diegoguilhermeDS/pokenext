import Search from "@/components/InputSearch";
import { iHomeProps, iPokemonBaseWithId } from "./index.interfaces";
import { api } from "@/services/api";
import ListPokemon from "@/components/ListPokemon";

export async function getStaticProps() {
  const maxPokemon: number = 251;

  const res = await api.get("", {
    params: {
      limit: maxPokemon,
    },
  });

  res.data.results.forEach((item: iPokemonBaseWithId, index: number) => item.id = index+1)

  return {
    props: {
      listPokemon: res.data.results,
    },
  };
}

export default function Home({ listPokemon }: iHomeProps) {
  return (
    <div className="container mx-auto pt-4 p-2">
      <section className="flex flex-col items-center gap-2">
        <h1 className="font-semibold text-3xl text-center text-brand-150">
          PokeNext
        </h1>
        <p className="text-brand-100 text-center">
          Search for a Pokemon by name or using its National Pokedex number.
        </p>
        <Search />
      </section>
      <section className="mt-10">
        <ListPokemon listPokemon={listPokemon}/>
      </section>
    </div>
  );
}

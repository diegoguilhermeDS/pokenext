import Search from "@/components/InputSearch";
import { iHomeProps } from "./index.interfaces";
import { api } from "@/services/api";

export async function getStaticProps() {
  const maxPokemon: number = 251;
  const baseUrl: string = "https://pokeapi.co/api/v2/pokemon/";

  const res = await api.get("", {
    params: {
      limit: maxPokemon,
    },
  });
  
  return {
    props: {
      listPokemon: res.data.results,
    },
  };
}

export default function Home({ listPokemon }: iHomeProps) {

  return (
    <div className="container mx-auto pt-4">
      <section className="flex flex-col items-center gap-2">
        <h1 className="font-semibold text-3xl text-center text-brand-150">
          PokeNext
        </h1>
        <p className="text-brand-100">
          Search for a Pokemon by name or using its National Pokedex number.
        </p>
        <Search />
      </section>
      <section>
        <ul>{listPokemon.map((pokemon, index) => <li key={index}>{pokemon.name}</li>)}</ul>
      </section>
    </div>
  );
}

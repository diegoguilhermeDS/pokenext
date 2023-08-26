import ControllPage from "@/components/ControllPage";
import Search from "@/components/InputSearch";
import ListPokemon from "@/components/ListPokemon";


export default function Home() {
  return (
    <div className="container mx-auto pt-4 p-2 min-h-[79.7vh]">
      <section className="flex flex-col items-center gap-2">
        <h2 className="text-center text-brand-100 dark:text-white">Poke<span className="text-brand-100 font-semibold text-4xl">Next</span></h2>
        <p className="text-brand-100 dark:text-white text-center">
          Search for a Pokemon by name or using its National Pokedex number.
        </p>
        <Search />
      </section>
      <section className="mt-10">
        <ListPokemon/>
        <ControllPage/>
      </section>
    </div>
  );
}

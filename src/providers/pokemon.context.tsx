import { PokemonBaseWithId, PokemonRoot } from "@/interfaces";
import { api } from "@/services/api";
import { useRouter } from "next/router";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
  ChangeEvent,
} from "react";

interface PokemonProvidersProps {
  children: ReactNode;
}

interface PokemonContextProps {
  tagDetails: string;
  setTagDetails: Dispatch<SetStateAction<string>>;
  isNotHome: boolean;
  pokemonList: PokemonBaseWithId[];
  getpokemonInfor: (name: string) => Promise<PokemonRoot>;
  searchPokemon: (event: ChangeEvent<HTMLInputElement>) => void;
  nextPage: () => void;
  previusPage: () => void;
  currentPage: number;
  theme: string;
  changeTheme: () => void;
}

const PokemonContext = createContext({} as PokemonContextProps);

export const PokemonProvider = ({ children }: PokemonProvidersProps) => {
  const [tagDetails, setTagDetails] = useState("Details");
  const [isNotHome, setIsNotHome] = useState(false);
  const [limit, setLimit] = useState(150);
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [theme, setTheme] = useState("dark")
  const [pokemonList, setPokemonList] = useState<PokemonBaseWithId[]>(
    [] as PokemonBaseWithId[]
  );
  const [firstPokemonList, setFirstPokemonList] = useState<PokemonBaseWithId[]>(
    [] as PokemonBaseWithId[]
  );

  const router = useRouter();

  const baseUrl = "https://pokeapi.co/api/v2/pokemon/";

  useEffect(() => {
    const chageStateIsNotHome = () => {
      if (router.pathname !== "/") {
        setIsNotHome(true);
      } else {
        setIsNotHome(false);
      }
    };

    const getPokemonList = async () => {
      const res = await api.get("", {
        params: {
          limit: limit,
          offset: offset,
        },
      });

      if (res.status == 200) {
        res.data.results.forEach(
          (pokemon: PokemonBaseWithId, index: number) =>
            (pokemon.id = index + 1)
        );
        setFirstPokemonList(res.data.results);
        setPokemonList(res.data.results);
      }
    };

    getPokemonList();
    chageStateIsNotHome();
  }, [limit, offset, router]);

  const getpokemonInfor = async (name: string) => {
    const res = await api.get(`${name}`);

    return res.data;
  };

  const searchPokemon = async (event: ChangeEvent<HTMLInputElement>) => {
    let valueByInput = event.target.value;

    if (valueByInput.length <= 0) {
      setPokemonList(firstPokemonList);
    } else {
      const filteredPokemon = firstPokemonList.filter(
        (pokemon) =>
          pokemon.name.includes(valueByInput.toLowerCase()) ||
          pokemon.id == Number(valueByInput)
      );

      if (filteredPokemon.length > 0) {
        setPokemonList(filteredPokemon);
      } else {
        try {
          const findPokemon = await api.get(`${valueByInput}`);

          const { data } = findPokemon;
          setPokemonList([
            {
              name: data.name,
              url: `${baseUrl}${data.name}`,
              id: data.id,
            },
          ]);
        } catch (error) {
          setPokemonList(firstPokemonList);
        }
      }
    }
  };

  const nextPage = () => {
    if (currentPage < 7) {
      setOffset(limit * currentPage);
      setCurrentPage(currentPage + 1);
    }
  };

  const previusPage = () => {
    if (currentPage > 1) {
      setOffset(offset - limit);
      setCurrentPage(currentPage - 1);
    }
  };

  const changeTheme = () => {
    if (theme == "dark"){
      setTheme("light")
    } else {
      setTheme("dark")
    }
  }

  return (
    <PokemonContext.Provider
      value={{
        tagDetails,
        setTagDetails,
        isNotHome,
        pokemonList,
        getpokemonInfor,
        searchPokemon,
        nextPage,
        previusPage,
        currentPage,
        theme,
        changeTheme
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export const usePokemon = () => useContext(PokemonContext);

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
  pokemonList: PokemonRoot[];
  getpokemon: (name: string) => Promise<PokemonRoot>;
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
  const [theme, setTheme] = useState("light");
  const [pokemonList, setPokemonList] = useState<PokemonRoot[]>(
    [] as PokemonRoot[]
  );
  const [firstPokemonList, setFirstPokemonList] = useState<PokemonRoot[]>(
    [] as PokemonRoot[]
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

    chageStateIsNotHome();
  }, [router.pathname]);

  useEffect(() => {
    const getPokemonList = async () => {
      try {
        const pokemonListRequest = await getOnlySomePokemonInformation();

        if (pokemonListRequest.status == 200) {
          try {
            const newList: PokemonRoot[] = await getAllPokemonInformation(pokemonListRequest.data.results);

            setFirstPokemonList(newList);
            setPokemonList(newList);
          } catch (error) {
            console.log(error);
          }
        }
      } catch (error) {
        console.log(error);
      }
    };

    const getThemeFromLocalStorage = () => {
      const theme = localStorage.getItem("theme") || "light";
      setTheme(theme);
    };

    getPokemonList();
    getThemeFromLocalStorage();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [limit, offset]);

  const getpokemon = async (name: string) => {
    const res = await api.get(`${name}`);

    const pokemon: PokemonRoot = res.data;

    return pokemon;
  };

  const getOnlySomePokemonInformation = async () => {
    const res = await api.get("", {
      params: {
        limit: limit,
        offset: offset,
      },
    });

    return res
  };

  const getAllPokemonInformation = async (list: PokemonBaseWithId[]) => {
    return await Promise.all(
      list.map(async (pokemon: PokemonBaseWithId) => {
        const newRequest = await getpokemon(pokemon.name);
        return newRequest;
      })
    );
  }

  const searchPokemon = async (event: ChangeEvent<HTMLInputElement>) => {
    let valueByInput = event.target.value.trim();

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
          setPokemonList([data]);
        } catch (error) {
          console.log(error)
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
    if (theme == "dark") {
      setTheme("light");
      localStorage.setItem("theme", "light");
    } else {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <PokemonContext.Provider
      value={{
        tagDetails,
        setTagDetails,
        isNotHome,
        pokemonList,
        getpokemon,
        searchPokemon,
        nextPage,
        previusPage,
        currentPage,
        theme,
        changeTheme,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export const usePokemon = () => useContext(PokemonContext);

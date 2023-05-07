import { SetStateAction, createContext, useContext, useState } from "react";

interface iPokemonDetailsProvidersProps {
  children: React.ReactNode;
}

interface iPokemonDetailsContextProps {
  tagDetails: string;
  setTagDetails: React.Dispatch<SetStateAction<string>>;
}

const PokemonDetailsContext = createContext({} as iPokemonDetailsContextProps);

export const PokemonDetailsProvider = ({
  children,
}: iPokemonDetailsProvidersProps) => {
  const [tagDetails, setTagDetails] = useState("Details");

  return (
    <PokemonDetailsContext.Provider value={{ tagDetails, setTagDetails }}>
      {children}
    </PokemonDetailsContext.Provider>
  );
};

export const usePokemonDetails = () => useContext(PokemonDetailsContext);

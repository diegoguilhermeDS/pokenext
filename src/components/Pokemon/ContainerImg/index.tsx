import React, { ReactNode } from "react";

interface ContainerImgPokemonProps {
  children: ReactNode;
  type:
    | "normal"
    | "fighting"
    | "flying"
    | "poison"
    | "ground"
    | "rock"
    | "bug"
    | "ghost"
    | "steel"
    | "fire"
    | "water"
    | "grass"
    | "electric"
    | "psychic"
    | "ice"
    | "dragon"
    | "dark"
    | "fairy";
}

const ContainerImgPokemon = ({ children, type }: ContainerImgPokemonProps) => {
  const colorVariants = {
    normal: "bg-[#A4ACAF80]",
    fighting: "bg-[#D5672380]",
    flying: "bg-[#3DC7EF80]",
    poison: "bg-[#B97FC980]",
    ground: "bg-[#F7DE3F80]",
    rock: "bg-[#A38C2180]",
    bug: "bg-[#729F3F80]",
    ghost: "bg-[#7B62A380]",
    steel: "bg-[#9EB7B880]",
    fire: "bg-[#FD7D2480]",
    water: "bg-[#4592C480]",
    grass: "bg-[#9BCC5080]",
    electric: "bg-[#EED53580]",
    psychic: "bg-[#F366B980]",
    ice: "bg-[#51C4E780]",
    dragon: "bg-[#F16E5780]",
    dark: "bg-[#70707080]",
    fairy: "bg-[#FDB9E980]",
  };

  return <div className={`flex justify-center items-center rounded-xl h-[80%] overflow-hidden ${colorVariants[type]}`}>{children}</div>;
};

export default ContainerImgPokemon;

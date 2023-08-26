import React from "react";

interface TagTypeProps {
  content:
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

const TagType = ({ content }: TagTypeProps) => {
  const colorVariants = {
    normal: "bg-[#A4ACAF]",
    fighting: "bg-[#D56723]",
    flying: "bg-[#3DC7EF]",
    poison: "bg-[#B97FC9]",
    ground: "bg-[#F7DE3F]",
    rock: "bg-[#A38C21]",
    bug: "bg-[#729F3F]",
    ghost: "bg-[#7B62A3]",
    steel: "bg-[#9EB7B8]",
    fire: "bg-[#FD7D24]",
    water: "bg-[#4592C4]",
    grass: "bg-[#9BCC50]",
    electric: "bg-[#EED535]",
    psychic: "bg-[#F366B9]",
    ice: "bg-[#51C4E7]",
    dragon: "bg-[#F16E57]",
    dark: "bg-[#707070]",
    fairy: "bg-[#FDB9E9]",
  };

  return <span className={`${colorVariants[content]} p-2 py-1 rounded-md text-white dark:text-gray-900 tracking-[0.8]`}>{content}</span>;
};

export default TagType;

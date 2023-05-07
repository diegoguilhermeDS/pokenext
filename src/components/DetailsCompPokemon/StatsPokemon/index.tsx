import { PokemonRoot, Stat } from "@/pages/pokemon/pokemon.interfaces";
import React from "react";
import styled from "styled-components";

interface iStatsPokemonProps {
  pokemon: PokemonRoot;
}

const Range = styled.input`
  -webkit-appearance: none;
  outline: none;
  width: 160px;
  height: 8px;
  background: #d3d3d3;
  border-radius: 12px;
  overflow: hidden;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;

  &:disabled {
    opacity: 1;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: #FF8552;
    cursor: pointer;
    box-shadow: -170px 0 0 160px #FF8552;
  }


  /* &::-moz-range-thumb {
    width: 25px;
    height: 25px;
    background: #04aa6d;
    cursor: pointer;
  } */
`;

export default function StatsPokemon({ pokemon }: iStatsPokemonProps) {
  return (
    <ul className="grid grid-cols-2">
      {pokemon.stats.map((item: Stat, index: number) => {
        return (
          <li key={index}>
            <h4 className="font-semibold text-sm text-slate-800">
              {item.stat.name}
            </h4>
            <Range
              type="range"
              name={item.stat.name}
              id={`${index}`}
              min="1"
              max="180"
              value={item.base_stat}
              disabled
            />
          </li>
        );
      })}
    </ul>
  );
}

import { typesPokemonColor } from "@/database/types";
import styled, { css } from "styled-components";

interface iPokemonTypeStyledProps {
  typeId: number;
}

export const PokemonType = styled.span<iPokemonTypeStyledProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6rem;
  border-radius: 0.125rem;
  color: ${({ typeId }) => (typeId % 2 == 0 ? "#020202" : "#fff")};
  ${({ typeId }) =>
    css`
      background-color: ${typesPokemonColor[typeId]};
    `}
`;

export const PokemonContainerImg = styled.div<iPokemonTypeStyledProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.75rem;
  height: 80%;
  ${({ typeId }) =>
    css`
      background-color: ${typesPokemonColor[typeId]}80;
    `}
  overflow: hidden;
`;

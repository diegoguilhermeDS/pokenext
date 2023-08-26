import React from "react";

interface NumberPokedexProps {
  number: number;
}

const NumberPokedex = ({ number }: NumberPokedexProps) => {
  let numberForRender = "";

  switch (true) {
    case number >= 10 && number <= 99:
      numberForRender = `n 0${number}`;
      break;
    case number < 10:
      numberForRender = `n 00${number}`;
      break;
    default:
      numberForRender = `n ${number}`;
      break;
  }

  return (
    <span className="text-xs text-brand-100 dark:text-brand-300 opacity-70">{numberForRender}</span>
  );
};

export default NumberPokedex;

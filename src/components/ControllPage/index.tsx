import { usePokemon } from "@/providers/pokemon.context";
import React from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const ControllPage = () => {
  const { nextPage, previusPage, currentPage } = usePokemon();

  return (
    <div className="mx-auto w-full flex justify-center gap-4 mb-4">
      {currentPage > 1 && (
        <button className="buttonPage" onClick={previusPage}>
          <FaArrowAltCircleLeft/>
        </button>
      )}
      <span className="font-semibold text-brand-100 dark:text-white">Página {currentPage}</span>
      {currentPage < 7 && (
        <button className="buttonPage" onClick={nextPage}>
          <FaArrowAltCircleRight/>
        </button>
      )}
    </div>
  );
};

export default ControllPage;

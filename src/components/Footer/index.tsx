import { usePokemon } from "@/providers/pokemon.context";
import React from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";
import ScrollToTop from "react-scroll-to-top";

export default function Footer() {
  const { isNotHome } = usePokemon();

  return (
    <footer className="bg-brand-100 dark:bg-gray-900 w-full h-24 shadow-sm bottom-0">
      <div className="relative container mx-auto h-full flex justify-center items-center">
        <p className="text-white dark:text-brand-100">
          <span className="font-bold">PokeNext</span> &copy; 2023
        </p>
        {!isNotHome && (
          <>
            <ScrollToTop
              smooth
              top={1200}
              component={
                <button className="bg-brand-150 dark:bg-gray-800 w-full h-full flex justify-center items-center rounded">
                  <FaArrowAltCircleUp className="fill-white scale-[2.0] hover:scale-[2.2] transition-500" />
                </button>
              }
              className="flex justify-center items-center bg-black"
            />
          </>
        )}
      </div>
    </footer>
  );
}

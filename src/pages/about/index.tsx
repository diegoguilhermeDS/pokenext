import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <div className="flex flex-col items-center gap-6 h-[39.5rem] pt-9 min-h-[79.7vh]">
      <h2 className="text-gray-700 dark:text-brand-100">Sobre o projeto</h2>
      <p className="lg:w-[500px] text-center dark:text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
        eligendi consectetur hic adipisci eius repellendus quis natus soluta
        aperiam voluptates, nam voluptate culpa libero corrupti facere deserunt
        fugiat laborum at?
      </p>
      <Image
        src="/images/charizard.png"
        alt="imagem do charizard"
        width="300"
        height="300"
      />
    </div>
  );
}

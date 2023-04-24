import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <div className="flex flex-col items-center gap-6 h-[39.5rem] pt-9">
      <h1 className="font-semibold text-4xl text-gray-700">Sobre o projeto</h1>
      <p className="w-[500px] text-center">
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

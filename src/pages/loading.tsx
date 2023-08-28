import { CardEmpty } from "@/components/Pokemon/CardEmpty";
import React from "react";

export default function Loading() {
  return (
    <CardEmpty.Root>
      <CardEmpty.Image />
      <div className="flex flex-col justify-center h-[50%] gap-2">
        <div className="flex justify-between items-center">
          <CardEmpty.NumberIndex />
          <CardEmpty.Tag />
        </div>
        <div>
          <CardEmpty.Name />
        </div>
      </div>
    </CardEmpty.Root>
  );
}

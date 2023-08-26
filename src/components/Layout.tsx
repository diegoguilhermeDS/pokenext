import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";
import { Inter } from "next/font/google";
import { usePokemon } from "@/providers/pokemon.context";

const font = Inter({ subsets: ["latin"] });

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { theme } = usePokemon();

  return (
    <div className={`${theme}`}>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <title>PokeNext</title>
      </Head>
      <Header />
      <main className={`bg-slate-100 dark:bg-gray-950 ${font.className}}`}>{children}</main>
      <Footer />
    </div>
  );
}

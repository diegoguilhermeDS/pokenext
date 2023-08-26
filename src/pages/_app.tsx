import Layout from "@/components/Layout";
import { PokemonProvider } from "@/providers/pokemon.context";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PokemonProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </PokemonProvider>
  );
}

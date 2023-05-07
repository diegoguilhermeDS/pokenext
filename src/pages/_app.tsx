import Layout from "@/components/Layout";
import { PokemonDetailsProvider } from "@/providers/pokemonDetails.context";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PokemonDetailsProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </PokemonDetailsProvider>
  );
}

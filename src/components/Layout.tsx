import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";
import { Inter } from 'next/font/google'

const font = Inter({ subsets: ['latin']})

interface iLayout {
  children: React.ReactNode;
}

export default function Layout({ children }: iLayout) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <title>PokeNext</title>
      </Head>
      <Navbar />
      <main className={`bg-gray-100 min-h-screen ${font.className}}`}>{children}</main>
      <Footer/>
    </>
  );
}

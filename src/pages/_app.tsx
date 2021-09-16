import { AppProps } from "next/app";
import React from "react";
import { Header } from "../components/Header";

import "../styles/global.scss";

// app é o carinha que se repete em todas as páginas
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

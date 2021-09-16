import { AppProps } from "next/app";

import "../styles/global.scss"

// app é o carinha que se repete em todas as páginas
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;

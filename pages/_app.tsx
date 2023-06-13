import React from "react";
import Head from "next/head";
import { fira_code, roboto } from "../fonts";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>react-tab</title>
      </Head>
      <main className={roboto.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}

import React from "react";
import Head from "next/head";
import { roboto } from "../fonts";
import MetaData from "../components/metadata";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <MetaData
          url="reaact-tab.netlify.app"
          pageTitle="react-tab"
          description="state-aware tab components in react"
          previewImage="https://reaact-tab.netlify.app/preview.png"
        />
      </Head>
      <main className={roboto.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}

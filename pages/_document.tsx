import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        {/* This is required to work the PWA */}
        <link rel="manifest" href="/manifest.json" />

        {/* Theme-color color is the color of the header but it's not need it because we defined it in the manifest.json*/}
        {/* <meta name="theme-color" content="#fff" /> */}
      </Head>
      <body className="">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

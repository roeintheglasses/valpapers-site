import { Html, Head, Main, NextScript } from "next/document";
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="title" content="Valpapers" />
        <meta
          name="description"
          content="Noice! Check out Valpapers, the ultimate app for all val players who love Valorant. Valpapers are sure to make your phone look  totally badass!"
        />
        <meta name="keywords" content="wallpapers, valorant, valpapers" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://valpapers.tech/" />
        <meta property="og:title" content="Valpapers" />
        <meta
          property="og:description"
          content="Noice! Check out Valpapers, the ultimate app for all Val players who love Valorant. Valpapers are sure to make your phone look totally badass!"
        />
        <meta
          property="og:image"
          content="https://valpapers.tech/valpapers.png"
        />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://valpapers.tech/" />
        <meta property="twitter:title" content="Valpapers" />
        <meta
          property="twitter:description"
          content="Noice! Check out Valpapers, the ultimate app for all Val players who love Valorant. Valpapers are sure to make your phone look totally badass!"
        />
        <meta
          property="twitter:image"
          content="https://valpapers.tech/valpapers.png"
        ></meta>

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import localFont from "next/font/local";

import styles from "@/styles/Home.module.css";
// pages/_app.js

// Font files can be colocated inside of `pages`
const valFont = localFont({ src: "./font.ttf" });
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Valpapers</title>
        <meta name="title" content="Valpapers" />
        <meta
          name="description"
          content="Noice! Check out Valpapers, the ultimate app for all val players who love Valorant. Valpapers are sure to make your phone look  totally badass!"
        />
        <meta name="keywords" content="wallpapers, valorant, valpapers" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />

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
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            <code className={styles.code}>valpapers.tech</code>
          </p>
          <div>
            <a
              href="https://valpapers.tech"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/Valpapers.svg"
                alt="Valpapers Logo"
                className={styles.vercelLogo}
                width={70}
                height={70}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <h1 className={valFont.className} style={{ fontSize: "3.5rem" }}>
            Valpapers
          </h1>
          <h4 className={inter.className} style={{ fontSize: "1rem" }}>
            AI-Upscaled Wallpapers
          </h4>
          <a
            href="download link"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className={inter.className}>
              Download <span>-&gt;</span>
            </p>
          </a>
        </div>

        <div className={styles.grid}>
          {/* <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Deploy <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Instantly deploy your Next.js site to a shareable URL
              with&nbsp;Vercel.
            </p>
          </a> */}
        </div>
        <footer className={styles.footer}>
          <a
            href="https://github.com/roeintheglasses"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <code className={styles.code}>Made with 💖by @roeintheglasses</code>
          </a>
        </footer>
      </main>
    </>
  );
}

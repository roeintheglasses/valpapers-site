// pages/_app.js
import { useEffect } from "react";
import { Inter } from "next/font/google";
import { SlideshowLightbox, initLightboxJS } from "lightbox.js-react";

import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";

import styles from "@/styles/Home.module.css";
import "lightbox.js-react/dist/index.css";

// Font files can be colocated inside of `pages`
const valFont = localFont({ src: "./font.ttf" });
const inter = Inter({ subsets: ["latin"] });

const lightboxKey = process.env.LIGHTBOX_KEY;

const images = [
  {
    src: "http://cdn.valpapers.tech/assets/1.png",
    alt: "Valorant Wallpapers",
  },
  {
    src: "http://cdn.valpapers.tech/assets/2.png",
    alt: "Valorant Player Cards",
  },
  {
    src: "http://cdn.valpapers.tech/assets/3.png",
    alt: "AI Upcaling",
  },
  {
    src: "http://cdn.valpapers.tech/assets/4.png",
    alt: "Clean & Fluid Design",
  },
  {
    src: "http://cdn.valpapers.tech/assets/5.png",
    alt: "High Quality Wallpapers",
  },
];

export default function Home() {
  useEffect(() => {
    initLightboxJS(lightboxKey, "individual");
  });
  return (
    <>
      <Head>
        <title>Valpapers - AI Upscaled Wallpapers</title>
        <meta name="title" content="Valpapers" />
        <meta
          name="description"
          content="Noice! Check out Valpapers, the ultimate app for all val players who love Valorant. Valpapers are sure to make your phone look  totally badass!"
        />
        <meta name="keywords" content="wallpapers, valorant, valpapers" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
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
            <a
              href="https://github.com/roeintheglasses"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textAlign: "end" }}
            >
              <code className={styles.code}>
                Made with 💖by @roeintheglasses
              </code>
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
            href="https://play.google.com/store/apps/details?id=com.valpapers"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className={inter.className}>
              Download <span>-&gt;</span>
            </p>
          </a>
          <div>
            <SlideshowLightbox
              lightboxIdentifier="lightbox1"
              framework="next"
              images={images}
              showThumbnails="true"
            >
              <div className={styles.imageGallary}>
                {images.map((image, index) => (
                  <Image
                    key={index}
                    src={image.src}
                    alt={image.alt}
                    height={400}
                    width={200}
                    data-lightboxjs="lightbox1"
                    quality={50}
                    style={{ borderRadius: "10px", backgroundColor: "#bbb" }}
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAEsCAYAAACG+vy+AAACO0lEQVR42u3TMQEAMAgAoBl0JraTFvD0hA5E/6wHrEIQEAQEAUFAEBAEBAFBQBAQBBAEBAFBQBAQBAQBQUAQEAQEEQQEAUFAEBAEBAFBQBAQBAQBBAFBQBAQBAQBQUAQEAQEAUEAQUAQEAQEAUFAEBAEBAFBAEFAEBAEBAFBQBAQBAQBQUAQQBAQBAQBQUAQEAQEAUFAEEAQEAQEAUFAEBAEBAFBQBAQBBAEBAFBQBAQBAQBQUAQEAQEEQQEAUFAEBAEBAFBQBAQBAQBBAFBQBAQBAQBQUAQEAQEAUEEAUFAEBAEBAFBQBAQBAQBQQBBQBAQBAQBQUAQEAQEAUFAEEAQEAQEAUFAEBAEBAFBQBBAEBAEBAFBQBAQBAQBQUAQEAQQBAQBQUAQEAQEAUFAEBAEEAQEAUFAEBAEBAFBQBAQBAQBBAFBQBAQBAQBQUAQEAQEAUEEAUFAEBAEBAFBQBAQBAQBQQBBQBAQBAQBQUAQEAQEAUFAEEFAEBAEBAFBQBAQBAQBQUAQQBAQBAQBQUAQEAQEAUFAEBAEEAQEAUFAEBAEBAFBQBAQBBAEBAFBQBAQBAQBQUAQEAQEAQQBQUAQEAQEAUFAEBAEBAEEAUFAEBAEBAFBQBAQBAQBQQBBQBAQBAQBQUAQEAQEAUFAEEFAEBAEBAFBQBAQBAQBQUAQQBAQBAQBQUAQEAQEAUFAEBBEEBAEBAFBQBAQBAQBQUAQEAQQBAQBQUAQEAQEAUFAEBAEBAEEAUHgzgCBvvZTkIgN/AAAAABJRU5ErkJggg==
                    "
                    placeholder="blur"
                  />
                ))}
              </div>
            </SlideshowLightbox>
          </div>
        </div>

        <div className={styles.grid}>
          {/* <a
            href="/about-us"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              About Valpapers <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Get a gist of the dev behind the crazy "AI" upscaling
            </p>
          </a> */}
          <a
            href="/privacy-policy"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Privacy Policy <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Yup, we have one of those too. Read it here. ( ͡° ͜ʖ ͡°)
            </p>
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.valpapers"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Download <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Because we both know, one download link is not enough.
            </p>
          </a>
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

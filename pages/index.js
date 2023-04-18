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
    src: "http://cdn.valpapers.tech/assets/1.webp",
    alt: "Valorant Wallpapers",
  },
  {
    src: "http://cdn.valpapers.tech/assets/2.webp",
    alt: "Valorant Player Cards",
  },
  {
    src: "http://cdn.valpapers.tech/assets/3.webp",
    alt: "AI Upcaling",
  },
  {
    src: "http://cdn.valpapers.tech/assets/4.webp",
    alt: "Clean & Fluid Design",
  },
  {
    src: "http://cdn.valpapers.tech/assets/5.webp",
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP81di4CQAHKQKwOywNuAAAAABJRU5ErkJggg=="
                    placeholder="blur"
                    priority={true}
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

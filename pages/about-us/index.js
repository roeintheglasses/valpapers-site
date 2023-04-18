// pages/_app.js
import { Inter } from "next/font/google";

import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";

import styles from "@/styles/Home.module.css";

// Font files can be colocated inside of `pages`
const valFont = localFont({ src: "../font.ttf" });
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
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
            About US
          </h4>
          <p className={inter.className}>
            Valpapers is an innovative app that provides high-quality Valorant
            wallpapers that have been enhanced using state-of-the-art artificial
            intelligence upscaling technology. With Valpapers, you can easily
            browse through a vast collection of stunning wallpapers featuring
            your favorite Valorant characters, weapons, and maps, all of which
            have been upscaled to provide you with unparalleled image quality.
            The app's intuitive interface allows you to quickly and easily
            search for the perfect wallpaper to match your style and
            preferences. With a few taps, you can download your favorite
            wallpapers and set them as your background on your desktop, laptop,
            or mobile device. Valpapers takes pride in delivering a seamless and
            user-friendly experience to all its users. Whether you're a hardcore
            Valorant fan or just someone who appreciates beautiful, high-quality
            wallpapers, Valpapers has got you covered. With its AI-upscaled
            images, you can enjoy stunning visuals that will enhance your
            device's aesthetics and bring your love for Valorant to life.
          </p>
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

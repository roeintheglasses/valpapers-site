import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import Bridge from "@/components/Icons/Bridge";
import Logo from "@/components/Icons/Logo";
import Modal from "@/components/Modal";
import cloudinary from "@/utils/cloudinary";
import getBase64ImageUrl from "@/utils/generateBlurPlaceholder";
import { useLastViewedPhoto } from "@/utils/useLastViewedPhoto";
import localFont from "next/font/local";
import { Inter } from "next/font/google";

import styles from "@/styles/Home.module.css";

// Font files can be colocated inside of `pages`
const valFont = localFont({ src: "../font.ttf" });
const inter = Inter({ subsets: ["latin"] });

function Wallpapers({ images }) {
  const router = useRouter();
  const { photoId } = router.query;
  const [lastViewedPhoto, setLastViewedPhoto] = useLastViewedPhoto();

  const lastViewedPhotoRef = useRef(null);

  useEffect(() => {
    // This effect keeps track of the last viewed photo in the modal to keep the index page in sync when the user navigates back
    if (lastViewedPhoto && !photoId) {
      lastViewedPhotoRef.current.scrollIntoView({ block: "center" });
      setLastViewedPhoto(null);
    }
  }, [photoId, lastViewedPhoto, setLastViewedPhoto]);

  return (
    <>
      <Head>
        <title>Valpapers - Web App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <div className={styles.wallpapers}>
          <Link href="/">
            <p>
              <code className={styles.code}>valpapers.tech</code>
            </p>
          </Link>
          <div>
            <Link href="/">
              <Image
                src="/Valpapers.svg"
                alt="Valpapers Logo"
                className={styles.vercelLogo}
                width={70}
                height={70}
                priority
              />
            </Link>
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
        {photoId && (
          <Modal
            images={images}
            onClose={() => {
              setLastViewedPhoto(photoId);
            }}
          />
        )}
        <div className="columns-2 gap-4 sm:columns-3 xl:columns-4 2xl:columns-5 pt-10">
          <div className="after:content relative mb-5 flex h-[525px] flex-col items-center justify-end gap-4 overflow-hidden rounded-lg bg-white/10 w-[175px] sm:w-full px-3 sm:px-6 pb-16 pt-64 text-center text-white shadow-highlight after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight lg:pt-0">
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <span className="flex max-h-full max-w-full items-center justify-center">
                <Bridge />
              </span>
              <span className="absolute left-0 right-0 bottom-0 h-[400px] bg-gradient-to-b from-black/0 via-black to-black"></span>
            </div>
            <h2 className={valFont.className} style={{ fontSize: "26px" }}>
              Valpapers
            </h2>
            <p className="max-w-[40ch] text-white/75 sm:max-w-[32ch]">
              The ultimate app for all players who love Valorant.
            </p>
            <p className="max-w-[40ch] text-white/75 sm:max-w-[32ch]">
              Valpapers's AI Upscaled wallpapers are sure to make your phone
              look totally badass!
            </p>
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
          </div>
          {images.map(({ id, public_id, format, blurDataUrl }) => (
            <Link
              key={id}
              href={`/wallpapers/?photoId=${id}`}
              as={`/wallpapers/p/${id}`}
              ref={id === Number(lastViewedPhoto) ? lastViewedPhotoRef : null}
              shallow
              className="after:content group relative mb-5 block w-[175px] sm:w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
            >
              <Image
                alt="valpapers wallpapers"
                className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
                style={{ transform: "translate3d(0, 0, 0)" }}
                placeholder="blur"
                blurDataURL={blurDataUrl}
                src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_720/${public_id}.${format}`}
                width={720}
                height={480}
                sizes="(max-width: 640px) 100vw,
                  (max-width: 1280px) 50vw,
                  (max-width: 1536px) 33vw,
                  170px"
              />
            </Link>
          ))}
        </div>
      </main>
      <footer className="p-6 text-center text-white/80 sm:p-12">
        <a
          href="https://github.com/roeintheglasses"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <code className={styles.code}>Made with 💖by @roeintheglasses</code>
        </a>
      </footer>
    </>
  );
}

export default Wallpapers;

export async function getStaticProps() {
  const results = await cloudinary.v2.search
    .expression(`folder:${process.env.CLOUDINARY_FOLDER}/*`)
    .sort_by("public_id", "desc")
    .max_results(97)
    .execute();
  let reducedResults = [];

  let i = 0;
  for (let result of results.resources) {
    reducedResults.push({
      id: i,
      height: result.height,
      width: result.width,
      public_id: result.public_id,
      format: result.format,
    });
    i++;
  }

  const blurImagePromises = results.resources.map((image) => {
    return getBase64ImageUrl(image);
  });
  const imagesWithBlurDataUrls = await Promise.all(blurImagePromises);

  for (let i = 0; i < reducedResults.length; i++) {
    reducedResults[i].blurDataUrl = imagesWithBlurDataUrls[i];
  }

  return {
    props: {
      images: reducedResults,
    },
  };
}

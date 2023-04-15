/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import localFont from "next/font/local";

import styles from "@/styles/Home.module.css";
// pages/_app.js

// Font files can be colocated inside of `pages`
const valFont = localFont({ src: "../font.ttf" });
const inter = Inter({ subsets: ["latin"] });

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - Valpapers</title>
        <meta name="title" content="Privacy Policy - Valpapers" />
        <meta name="description" content="Privacy Policy - Valpapers" />
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
                width={50}
                height={50}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <h1 className={valFont.className} style={{ fontSize: "3.5rem" }}>
            Privacy Policy
          </h1>
        </div>
        <div className={inter.className}>
          <p>
            <strong>Privacy Policy</strong>
          </p>{" "}
          <p>
            roeintheglasses built the Valpapers app as a Free app. This SERVICE
            is provided by roeintheglasses at no cost and is intended for use as
            is.
          </p>
          <p>
            This page is used to inform visitors regarding my policies with the
            collection, use, and disclosure of Personal Information if anyone
            decided to use my Service.
          </p>
          <p>
            If you choose to use my Service, then you agree to the collection
            and use of information in relation to this policy. The Personal
            Information that I collect is used for providing and improving the
            Service. I will not use or share your information with anyone except
            as described in this Privacy Policy.
          </p>
          <p>
            The terms used in this Privacy Policy have the same meanings as in
            our Terms and Conditions, which are accessible at Valpapers unless
            otherwise defined in this Privacy Policy.
          </p>
          <br />
          <p>
            <strong>Information Collection and Use</strong>
          </p>{" "}
          <p>
            For a better experience, while using our Service, I may require you
            to provide us with certain personally identifiable information. The
            information that I request will be retained on your device and is
            not collected by me in any way.
          </p>{" "}
          <div>
            <p>
              The app does use third-party services that may collect information
              used to identify you.
            </p>{" "}
            <p>
              Link to the privacy policy of third-party service providers used
              by the app
            </p>{" "}
            <ul className={styles.list}>
              <li>
                <a
                  href="https://www.google.com/policies/privacy/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Play Services
                </a>
              </li>
              <li>
                <a
                  href="https://firebase.google.com/policies/analytics"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Analytics for Firebase
                </a>
              </li>
              <li>
                <a
                  href="https://firebase.google.com/support/privacy/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Firebase Crashlytics
                </a>
              </li>
            </ul>
          </div>{" "}
          <br />
          <p>
            <strong>Log Data</strong>
          </p>{" "}
          <p>
            I want to inform you that whenever you use my Service, in a case of
            an error in the app I collect data and information (through
            third-party products) on your phone called Log Data. This Log Data
            may include information such as your device Internet Protocol ("IP")
            address, device name, operating system version, the configuration of
            the app when utilizing my Service, the time and date of your use of
            the Service, and other statistics.
          </p>{" "}
          <br />
          <p>
            <strong>Cookies</strong>
          </p>{" "}
          <p>
            Cookies are files with a small amount of data that are commonly used
            as anonymous unique identifiers. These are sent to your browser from
            the websites that you visit and are stored on your device's internal
            memory.
          </p>{" "}
          <p>
            This Service does not use these "cookies" explicitly. However, the
            app may use third-party code and libraries that use "cookies" to
            collect information and improve their services. You have the option
            to either accept or refuse these cookies and know when a cookie is
            being sent to your device. If you choose to refuse our cookies, you
            may not be able to use some portions of this Service.
          </p>{" "}
          <br />
          <p>
            <strong>Service Providers</strong>
          </p>{" "}
          <p>
            I may employ third-party companies and individuals due to the
            following reasons:
          </p>{" "}
          <ul className={styles.list}>
            <li>To facilitate our Service;</li>{" "}
            <li>To provide the Service on our behalf;</li>{" "}
            <li>To perform Service-related services; or</li>{" "}
            <li>To assist us in analyzing how our Service is used.</li>
          </ul>{" "}
          <p>
            I want to inform users of this Service that these third parties have
            access to their Personal Information. The reason is to perform the
            tasks assigned to them on our behalf. However, they are obligated
            not to disclose or use the information for any other purpose.
          </p>{" "}
          <br />
          <p>
            <strong>Security</strong>
          </p>{" "}
          <p>
            I value your trust in providing us your Personal Information, thus
            we are striving to use commercially acceptable means of protecting
            it. But remember that no method of transmission over the internet,
            or method of electronic storage is 100% secure and reliable, and I
            cannot guarantee its absolute security.
          </p>{" "}
          <br />
          <p>
            <strong>Links to Other Sites</strong>
          </p>{" "}
          <p>
            This Service may contain links to other sites. If you click on a
            third-party link, you will be directed to that site. Note that these
            external sites are not operated by me. Therefore, I strongly advise
            you to review the Privacy Policy of these websites. I have no
            control over and assume no responsibility for the content, privacy
            policies, or practices of any third-party sites or services.
          </p>{" "}
          <br />
          <p>
            <strong>Children's Privacy</strong>
          </p>{" "}
          <div>
            <p>
              These Services do not address anyone under the age of 13. I do not
              knowingly collect personally identifiable information from
              children under 13 years of age. In the case I discover that a
              child under 13 has provided me with personal information, I
              immediately delete this from our servers. If you are a parent or
              guardian and you are aware that your child has provided us with
              personal information, please contact me so that I will be able to
              do the necessary actions.
            </p>
          </div>{" "}
          <br />
          <p>
            <strong>Changes to This Privacy Policy</strong>
          </p>{" "}
          <p>
            I may update our Privacy Policy from time to time. Thus, you are
            advised to review this page periodically for any changes. I will
            notify you of any changes by posting the new Privacy Policy on this
            page.
          </p>{" "}
          <p>This policy is effective as of 2023-04-10</p> <br />
          <p>
            <strong>Contact Us</strong>
          </p>{" "}
          <p>
            If you have any questions or suggestions about my Privacy Policy, do
            not hesitate to contact me at roeintheglasses@gmail.com.
          </p>
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
      </main>
    </>
  );
}

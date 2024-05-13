import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import navStyles from "@/styles/Navbar.module.css";
import Navbar from "@/components/navbar";
import ContactSection from "@/components/contact";

const inter = Inter({ subsets: ["latin"] });

export default function Contact() {
  return (
    <>
      <Head>
        <title>REACT</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
          <nav className={navStyles.navbar}>
            < Navbar />
          </nav>
        </div>
        < ContactSection />
      </main>
    </>
  );
}
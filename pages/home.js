import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home Efficoin</title>
        <meta name="description" content="Homepage Efficoin" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}

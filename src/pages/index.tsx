import Head from "next/head";

import styles from './home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | gNews</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span> 👏 Hey! Bem vindo! </span>
          <h1>Novidades sobre o mundo do <span>React!</span></h1>
          <p>
            Acesse todas as publicações <br />
            <span>Por apenas R$9,90</span>
          </p>
        </section>

        <img src="/images/avatar.svg" alt="Coding" />

      </main>
    </>
  );
}

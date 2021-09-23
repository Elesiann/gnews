import Head from "next/head";
import { SubscribeButton } from "../components/SubscribeButton";
import { GetServerSideProps } from 'next'

import styles from './home.module.scss'
import { stripe } from "../services/stripe";

interface HomeProps {
  product: {
    priceId: string,
    amount: number,
  }
}

export default function Home({ product }: HomeProps) {


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
            <span>Por apenas {product.amount}</span>
          </p>
          <SubscribeButton priceId={product.priceId} />
        </section>

        <img src="/images/avatar.svg" alt="Coding" />

      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {

  const price = await stripe.prices.retrieve('price_1JceBUFgPxF17pln2vg9l8fF')

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'brl',
    }).format(price.unit_amount / 100,)

  }

  return {
    props: {
      product,
    }
  }
}

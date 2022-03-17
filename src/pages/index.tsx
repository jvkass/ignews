import { GetStaticProps } from 'next';
import Head from 'next/head'
import { SubscribeButton } from '../components/SubscribeButton'
import { stripe } from '../services/stripe';

import styles from './home.module.scss'

// Formas de popular pagina com informações via API

// Client-side - Quando não é necessário indexação, como uma ação do usuário.
// Server-side - Se faz necessário a indexação, informações em tempo real, do usuário que ta acessando e do contexto geral.
// Static Site Generation - Casos onde o mesmo html é gerado para todas as pessoas, por exemplo: Home Blog, Post Blog, Pagina de Produto, Pagina de Categoria e dentre outros.

//Exemplo Post do blog

// Conteudo (SSG)
// Comentários (Client-side)

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  }
}

export default function Home({ product }: HomeProps) {

  return (
    <>
      <Head>
        <title>Inicio | ig.news</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>News about the <span>React</span> world.</h1>
          <p>
            Get access to all the publications <br />
            <span>for {product.amount} month</span>
          </p>
          <SubscribeButton priceId={product.priceId} />
        </section>

        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>
    </>
  )
}
//Obs: sempre criar essa função async com o nome getServerSideProps
export const getStaticProps:GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1KdjvtCYpOzohnirpSPY7yo8'
    // para pegar informações extras, como nome do produto do Stripe
    // , {
    //   expand: ['product']    
    // }  
  )

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price.unit_amount / 100),
  };

  return {
    props: {
      product
    },revalidate: 60 * 60 * 24, // 24 hours
  }
}
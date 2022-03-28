import { GetStaticProps } from 'next';
import Head from 'next/head';
import { getPrismicClient } from '../../services/prismic';
import Prismic from '@prismicio/client';
import styles from './styles.module.scss';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Post | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a>
            <time>28 de março de 2021</time>
            <strong>Creating Post</strong>
            <p>Information for paragraph post</p>
          </a>
          <a>
            <time>28 de março de 2021</time>
            <strong>Creating Post 2</strong>
            <p>Information for paragraph post</p>
          </a>
          <a>
            <time>28 de março de 2021</time>
            <strong>Creating Post 3</strong>
            <p>Information for paragraph post</p>
          </a>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async() =>{
  const prismic = getPrismicClient();

  const response = await prismic.query([
    Prismic.predicates.at('document.type','post')
  ],{
    fetch: ['post.title','post.content'],
    pageSize:100,
  })

  console.log(JSON.stringify(response));

  return {
    props: {}
  }
}


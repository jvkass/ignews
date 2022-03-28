import Head from 'next/head';
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


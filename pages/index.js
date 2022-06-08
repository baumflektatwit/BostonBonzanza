import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[This is my senior project! Yay!]</p>
        <p>
          (Just wait until it's done, it'll look so good.{' '}
          <a href="https://www.linkedin.com/in/tsuf-baumflek/">My LinkedIn for fun</a>.)
        </p>
      </section>
    </Layout>
  );
}
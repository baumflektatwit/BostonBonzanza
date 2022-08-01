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
          <a href="https://www.bostonusa.com/events/this-weekend/">CLICK HERE for Events in Boston this weekend!</a>)
        </p>
      </section>
    </Layout>
  );
}
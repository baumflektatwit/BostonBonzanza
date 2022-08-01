import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import React from 'react';




export default function Home() {
  return (
    <Layout home>
        <new Image
              priority
              src="/images/BostonBonanza.png"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
            />      <Head> 
        return <image />
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[This is my senior project! Yay!]</p>
        <p>
          
          ({' '}
          <a href="https://www.bostonusa.com/events/this-weekend/">CLICK HERE for Events in Boston this weekend!</a>)
        </p>
      </section>
    </Layout>
  );
}
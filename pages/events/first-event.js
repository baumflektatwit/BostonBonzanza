import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';

export default function FirstEvent() {
    return (
        <Layout>
            <Head>
                <title>First Event</title>
            </Head>
            <h1>First Event</h1>
            <h2>
                <Link href="/">
                    <a>Homepage</a>
                </Link>
            </h2>
        </Layout>
    );
  }
import Head from 'next/head';
import type { NextPage } from 'next';
import Footer from '@/components/footer';
import Header from '@/components/header';

export default function Legal(_props: NextPage) {
  return (
    <>
      <Head>
        <title>Mentions légales - Appenin</title>
        <meta name="description" content="" />
      </Head>
      <Header />
      <main>[MENTIONS LÉGALES]</main>
      <Footer />
    </>
  );
}

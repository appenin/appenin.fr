import Head from 'next/head';
import type { NextPage } from 'next';
import Footer from '@/components/footer';
import Header from '@/components/header';

export default function ThankYou(_props: NextPage) {
  return (
    <>
      <Head>
        <title>Merci - Appenin</title>
        <meta name="description" content="" />
      </Head>
      <Header />
      <main>[MERCI]</main>
      <Footer />
    </>
  );
}

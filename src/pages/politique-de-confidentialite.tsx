import Head from 'next/head';
import type { NextPage } from 'next';
import Footer from '@/components/footer';
import Header from '@/components/header';

export default function PrivacyPolicy(_props: NextPage) {
  return (
    <>
      <Head>
        <title>Politique de confidentialité - Appenin</title>
        <meta name="description" content="" />
      </Head>
      <Header />
      <main>[POLITIQUE DE CONFIDENTIALITÉ]</main>
      <Footer />
    </>
  );
}

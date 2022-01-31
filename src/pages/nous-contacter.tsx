import Head from 'next/head';
import type { NextPage } from 'next';
import Footer from '@/components/footer';
import Group from '@/components/group';
import Header from '@/components/header';
import { Contact, Form, Hero } from '@/components/contactUs';

export default function ContactUs(_props: NextPage) {
  return (
    <>
      <Head>
        <title>Nous contacter - Appenin</title>
        <meta name="description" content="" />
      </Head>
      <Header />
      <main>
        <Hero />
        <Form />
        <Contact />
        <Group />
      </main>
      <Footer />
    </>
  );
}

import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import Footer from '@/components/footer';
import Group from '@/components/group';
import Header from '@/components/header';
import { Contact, Form, Hero } from '@/components/contactUs';

export default function ContactUs(_props: NextPage) {
  return (
    <>
      <NextSeo title="Nous contacter - Appenin" />
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

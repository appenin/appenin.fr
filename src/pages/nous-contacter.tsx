import { createRef } from 'react';
import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import Footer from '@/components/footer';
import Group from '@/components/group';
import Header from '@/components/header';
import { Contact, Form, Hero } from '@/components/contactUs';

export default function ContactUs(_props: NextPage) {
  const stickyElRef = createRef<HTMLElement>();

  return (
    <>
      <NextSeo title="Nous contacter - Appenin" />
      <Header stickyAnchorRef={stickyElRef} withSticky />
      <main>
        <Hero ref={stickyElRef} />
        <Form />
        <Contact />
        <Group />
      </main>
      <Footer />
    </>
  );
}

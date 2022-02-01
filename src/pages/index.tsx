import { createRef } from 'react';
import Head from 'next/head';
import type { NextPage } from 'next';
import Engagement from '@/components/engagement';
import Footer from '@/components/footer';
import Group from '@/components/group';
import Header from '@/components/header';
import { About, Background, Fact, Hero, Trust } from '@/components/home';
import Partner from '@/components/partner';
import Product from '@/components/product';
import Testimonial from '@/components/testimonial';

export default function Home(_props: NextPage) {
  const stickyElRef = createRef<HTMLElement>();

  return (
    <>
      <Head>
        <title>Accueil - Appenin</title>
        <meta name="description" content="" />
      </Head>
      <Header stickyAnchorRef={stickyElRef} withSticky />
      <main>
        <Background />
        <Hero ref={stickyElRef} />
        <Trust />
        <Fact />
        <About />
        <Product />
        <Testimonial />
        <Partner />
        <Engagement />
        <Group />
      </main>
      <Footer />
    </>
  );
}

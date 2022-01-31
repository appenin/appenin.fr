import { createRef } from 'react';
import Head from 'next/head';
import type { NextPage } from 'next';
import Engagement from '@/components/engagement';
import Footer from '@/components/footer';
import Group from '@/components/group';
import Header from '@/components/header';
import { About, Fact, Hero, Offer } from '@/components/offers';
import Partner from '@/components/partner';
import Product from '@/components/product';

export default function OurOffers(_props: NextPage) {
  const stickyElRef = createRef<HTMLElement>();

  return (
    <>
      <Head>
        <title>Nos offres - Appenin</title>
        <meta name="description" content="" />
      </Head>
      <Header stickyAnchorRef={stickyElRef} withSticky />
      <main>
        <Hero ref={stickyElRef} />
        <Offer />
        <Product />
        <About />
        <Fact />
        <Partner />
        <Engagement />
        <Group />
      </main>
      <Footer />
    </>
  );
}

import { createRef } from 'react';
import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import Engagement from '@/components/engagement';
import Footer from '@/components/footer';
import Group from '@/components/group';
import Header from '@/components/header';
import { About, Fact, Hero, Offer } from '@/components/ourOffers';
import Partner from '@/components/partner';
import Product from '@/components/product';

export default function OurOffers(_props: NextPage) {
  const stickyElRef = createRef<HTMLElement>();

  return (
    <>
      <NextSeo title="Nos offres - Appenin" />
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

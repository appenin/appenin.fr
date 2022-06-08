import { createRef } from 'react';
import type { NextPage } from 'next';
import Engagement from '@/components/engagement';
import Footer from '@/components/footer';
import Group from '@/components/group';
import Header from '@/components/header';
import { About, Background, Covea, Fact, Hero, Trust } from '@/components/home';
import Partner from '@/components/partner';
import Product from '@/components/product';
import Testimonial from '@/components/testimonial';

export default function Home(_props: NextPage) {
  const stickyElRef = createRef<HTMLElement>();

  return (
    <>
      <Header stickyAnchorRef={stickyElRef} withSticky />
      <main>
        <Background />
        <Hero ref={stickyElRef} />
        <Covea />
        <Fact />
        <Trust />
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

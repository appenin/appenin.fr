import { createRef } from 'react';
import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { About as About } from '@/components/common';
import Engagement from '@/components/engagement';
import Footer from '@/components/footer';
import Group from '@/components/group';
import Header from '@/components/header';
import { Fact, Hero, Team } from '@/components/appenin';
import Partner from '@/components/partner';
import Testimonial from '@/components/testimonial';

export default function WhoAreWe(_props: NextPage) {
  const stickyElRef = createRef<HTMLElement>();

  return (
    <>
      <NextSeo title="Qui sommes nous ? - Appenin" />
      <Header stickyAnchorRef={stickyElRef} withSticky />
      <main>
        <Hero ref={stickyElRef} />
        {/*<Team />*/}
        <About />
        <Fact />
        <Testimonial />
        <Partner />
        <Engagement />
        <Group />
      </main>
      <Footer />
    </>
  );
}

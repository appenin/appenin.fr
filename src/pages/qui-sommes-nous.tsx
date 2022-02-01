import { createRef } from 'react';
import Head from 'next/head';
import type { NextPage } from 'next';
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
      <Head>
        <title>Qui sommes nous ? - Appenin</title>
        <meta name="description" content="" />
      </Head>
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

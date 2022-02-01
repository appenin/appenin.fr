import Head from 'next/head';
import type { NextPage } from 'next';
import Footer from '@/components/footer';
import Group from '@/components/group';
import Header from '@/components/header';
import { ContentText, Section } from '@/components/ui';

export default function ThankYou(_props: NextPage) {
  return (
    <>
      <Head>
        <title>Merci - Appenin</title>
        <meta name="description" content="" />
      </Head>
      <Header />
      <main>
        <Section>
          <Section.Container>
            <ContentText
              css={{
                textAlign: 'center',
              }}
            >
              <Section.Header>Merci pour votre message</Section.Header>
              <p>Nous vous répondrons dans les plus brefs délais&nbsp;!</p>
            </ContentText>
          </Section.Container>
        </Section>
        <Group />
      </main>
      <Footer />
    </>
  );
}

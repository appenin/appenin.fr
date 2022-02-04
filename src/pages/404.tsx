import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import Footer from '@/components/footer';
import Group from '@/components/group';
import Header from '@/components/header';
import { Section } from '@/components/ui';

export default function Page404(_props: NextPage) {
  return (
    <>
      <NextSeo title="Erreur - Appenin" />
      <Header />
      <main>
        <Section>
          <Section.Container>
            <Section.Header>La page demandée est introuvable.</Section.Header>
          </Section.Container>
        </Section>
        <Group />
      </main>
      <Footer />
    </>
  );
}

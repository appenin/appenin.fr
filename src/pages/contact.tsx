import Head from 'next/head';
import type { NextPage } from 'next';
import Footer from '@/components/footer';
import Group from '@/components/group';
import Header from '@/components/header';
import { Section, Text } from '@/components/ui';

export default function Contact(_props: NextPage) {
  return (
    <>
      <Head>
        <title>Contact - Appenin</title>
        <meta name="description" content="" />
      </Head>
      <Header />
      <main>
        <Section>
          <Section.Container>
            <Section.Header>
              Vous êtes <Text color="secondary">client Appenin</Text> et souhaitez nous
              contacter&nbsp;?
            </Section.Header>
            Vous pouvez nous écrire par mail à <strong>client@appenin.fr</strong>
            <br />
            <br />
            Vous pouvez également nous appeler au <strong>01 83 62 51 71</strong>
            <br />
            <br />
            Enfin, vous pouvez nous écrire par courrier à{' '}
            <strong>Appenin, 55 rue de Rivoli, 75001 Paris</strong>.
          </Section.Container>
        </Section>
        <Section>
          <Section.Container>
            <Section.Header>
              You are an <Text color="secondary">Appenin customer</Text> and wish to contact us?
            </Section.Header>
            Please, send us an e-mail at <strong>client@appenin.fr</strong>
            <br />
            <br />
            You can also call us: <strong>+33 1 83 62 51 71</strong>
            <br />
            <br />
            Would you prefer, you can write us:{' '}
            <strong>Appenin, 55 rue de Rivoli, 75001 Paris</strong>.
          </Section.Container>
        </Section>
        <Group />
      </main>
      <Footer />
    </>
  );
}

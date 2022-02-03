import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import Footer from '@/components/footer';
import Group from '@/components/group';
import Header from '@/components/header';
import { ContentText, Section, Text } from '@/components/ui';

export default function Contact(_props: NextPage) {
  return (
    <>
      <NextSeo title="Contact - Appenin" />
      <Header />
      <main>
        <Section>
          <Section.Container>
            <ContentText>
              <Section.Header>
                Vous êtes <Text color="secondary">client Appenin</Text> et souhaitez nous
                contacter&nbsp;?
              </Section.Header>
              Vous pouvez nous écrire par email à{' '}
              <strong>
                <a href="mailto:client@appenin.fr">client@appenin.fr</a>
              </strong>
              <br />
              <br />
              Vous pouvez également nous appeler au <strong>01 83 62 51 71</strong>
              <br />
              <br />
              Enfin, vous pouvez nous écrire par courrier à{' '}
              <strong>Appenin, 55 rue de Rivoli, 75001 Paris</strong>.
              <Section.Header css={{ paddingTop: '$12' }}>
                You are an <Text color="secondary">Appenin customer</Text> and wish to contact us?
              </Section.Header>
              Please, send us an e-mail at{' '}
              <strong>
                <a href="mailto:client@appenin.fr">client@appenin.fr</a>
              </strong>
              <br />
              <br />
              You can also call us at <strong>+33 1 83 62 51 71</strong>
              <br />
              <br />
              Finally, you can write to us at{' '}
              <strong>Appenin, 55 rue de Rivoli, 75001 Paris</strong>.
            </ContentText>
          </Section.Container>
        </Section>
        <Group />
      </main>
      <Footer />
    </>
  );
}

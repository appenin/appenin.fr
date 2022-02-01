import Head from 'next/head';
import type { NextPage } from 'next';
import Footer from '@/components/footer';
import Header from '@/components/header';
import { ContentText, Section, Text } from '@/components/ui';

export default function Claims(_props: NextPage) {
  return (
    <>
      <Head>
        <title>Sinistres - Appenin</title>
        <meta name="description" content="" />
      </Head>
      <Header />
      <main>
        <Section>
          <Section.Container>
            <ContentText>
              <Section.Header>Ici on a le droit...</Section.Header>
              <ul style={{ listStyle: 'inside disc' }}>
                <li>de dire &quot;je ne sais pas&quot;</li>
                <li>de demander à ce que quelque chose soit clarifié</li>
                <li>de rester chez soi quand on se sent malade</li>
                <li>de dire qu&apos;on n&apos;a pas compris</li>
                <li>de demander ce que signifient les sigles</li>
                <li>d&apos;oublier des trucs</li>
                <li>de se présenter</li>
                <li>de s&apos;appuyer sur l&apos;équipe</li>
                <li>de demander de l&apos;aide</li>
                <li>de ne pas tout savoir</li>
                <li>d&apos;être silencieux certains jours</li>
                <li>d&apos;autres jours, de parler fort, rire et plaisanter</li>
                <li>de mettre son casque sur les oreilles</li>
                <li>de dire « non » quand on n&apos;a pas le temps</li>
                <li>de faire des erreurs</li>
                <li>de ne pas consulter ses mails sur son temps libre</li>
                <li>de ne pas consulter ses mails tout le temps au boulot</li>
                <li>de demander sur Slack</li>
                <li>de demander en personne aux collègues</li>
                <li>de s&apos;isoler pour se concentrer</li>
                <li>de donner son avis sur le travail des autres</li>
                <li>de critiquer ce qui nous met mal à l&apos;aise</li>
                <li>d&apos;accepter quand quelqu&apos;un propose du café</li>
                <li>de préférer le thé</li>
                <li>de grignoter</li>
                <li>d&apos;avoir un bureau en désordre</li>
                <li>d&apos;avoir un bureau bien rangé</li>
                <li>de travailler comme on a envie de travailler</li>
                <li>de demander à la hiérarchie de résoudre un problème</li>
                <li>d&apos;avoir un jour sans</li>
                <li>de prendre sa journée</li>
              </ul>
            </ContentText>
          </Section.Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}

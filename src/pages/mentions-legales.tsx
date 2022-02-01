import Head from 'next/head';
import type { NextPage } from 'next';
import Footer from '@/components/footer';
import Group from '@/components/group';
import Header from '@/components/header';
import { ContentText, Section } from '@/components/ui';

export default function LegalNotices(_props: NextPage) {
  return (
    <>
      <Head>
        <title>Mentions légales - Appenin</title>
        <meta name="description" content="" />
      </Head>
      <Header />
      <main>
        <Section>
          <Section.Container>
            <ContentText>
              <Section.Header>MENTIONS LÉGALES</Section.Header>
              <strong>Qui sommes-nous&nbsp;?</strong>
              <br />
              <br />
              Le site{' '}
              <a href="https://www.appenin.fr" target="_blank" rel="noreferrer">
                www.appenin.fr
              </a>{' '}
              (ci-après le &quot;Site&quot;) est édité par la SAS Appenin, au capital de
              7&nbsp;038&nbsp;400&nbsp;€, immatriculée sous le numéro 482&nbsp;112&nbsp;331&nbsp;au
              Registre du Commerce et des Sociétés de Paris. Le siège social d&apos;APPENIN est
              établi au 86/90 rue Saint-Lazare 75009 Paris, numéro de TVA intracommunautaire
              FR&nbsp;75&nbsp;482112331.
              <br />
              <br />
              La directrice de la publication est Madame Juliette BAUDOT.
              <br />
              <br />
              Appenin est enregistré à l&apos;ORIAS (situé 1, rue Jules Lefebvre 75311 Paris cedex
              09, email&nbsp;: <a href="mailto:contact@orias.fr">contact@orias.fr</a>) sous le
              numéro 20001013 en qualité de courtier en assurances.
              <br />
              <br />
              APPENIN est soumise au contrôle de l&apos;Autorité de Contrôle Prudentiel et de
              Résolution (ACPR), 4 Place de Budapest - CS 92459 - 75436 Paris Cedex 09.
              <br />
              <br />
              Le Site est hébergé par :<br />
              VERCEL INC.
              <br />
              340 S Lemon Ave #4133
              <br />
              Walnut, CA 91789
              <br />
              <br />
              <strong>Comment nous contacter&nbsp;?</strong>
              <br />
              <br />
              <ul style={{ listStyle: 'inside disc' }}>
                <li>par courrier à Appenin 86/90 rue Saint-Lazare 75009 Paris</li>
                <li>par téléphone, en réservant un rappel directement sur le site</li>
                <li>en remplissant le formulaire de contact sur le Site</li>
              </ul>
              <br />
              <strong>Propriété intellectuelle</strong>
              <br />
              <br />
              L&apos;ensemble des textes, sons, images, dessins, graphismes, signes distinctifs,
              logos, marques, etc., sont la propriété exclusive d&apos;APPENIN ou de ses partenaires
              et sont soumis aux dispositions du Code de la propriété intellectuelle. Ils sont, à ce
              titre, protégés contre toute utilisation qui ne serait pas expressément autorisée.
            </ContentText>
          </Section.Container>
        </Section>
        <Group />
      </main>
      <Footer />
    </>
  );
}

import Head from 'next/head';
import type { NextPage } from 'next';
import Footer from '@/components/footer';
import Group from '@/components/group';
import Header from '@/components/header';
import { ContentText, Section } from '@/components/ui';

export default function PrivacyPolicy(_props: NextPage) {
  return (
    <>
      <Head>
        <title>Politique de confidentialité - Appenin</title>
        <meta name="description" content="" />
      </Head>
      <Header />
      <main>
        <Section>
          <Section.Container>
            <ContentText>
              <Section.Header>POLITIQUE DE CONFIDENTIALITÉ</Section.Header>
              <strong>Mise à jour le 01/02/2022</strong>
              <br />
              <br />
              Le site www.appenin.fr (ci-après le &quot;Site&quot;) a pour objet&nbsp;:
              <ul style={{ listStyle: 'inside disc' }}>
                <li>de rediriger les clients vers leur espace client&nbsp;;</li>
                <li>de s&quot;adresser aux professionnels (BtoB).</li>
              </ul>
              <br />
              Le Site permet aux partenaires de contacter APPENIN&nbsp;:
              <ul style={{ listStyle: 'inside disc' }}>
                <li>par mail à l&apos;adresse&nbsp;: partenaire@appenin.fr&nbsp;;</li>
                <li>via un formulaire de contact&nbsp;;</li>
                <li>via un appel téléphonique en réservant un appel.</li>
              </ul>
              <br />A ce titre, sont susceptibles d&apos;être collectées et qualifiées de données
              personnelles&nbsp;:
              <ul style={{ listStyle: 'inside disc' }}>
                <li>les noms et prénoms&nbsp;; </li>
                <li>l&apos;adresse e-mail personnelle professionnelle&nbsp;;</li>
                <li>numéro de téléphone (si non professionnel).</li>
              </ul>
              <br />
              Cookies&nbsp;:
              <ul style={{ listStyle: 'inside disc' }}>
                <li>
                  Lors de la navigation sur le Site, des informations relatives à votre terminal
                  sont susceptibles d&apos;être collectées via des cookies. Les cookies sont de
                  petits fichiers stockés par un serveur dans votre terminal (ordinateur, téléphone,
                  etc.) et associé au Site. Ils permettent par exemple d&apos;analyser les données
                  liées à votre navigation.
                </li>
                <li>
                  Vous pouvez refuser le dépôt de certains cookies, lorsqu&apos;ils ne sont pas
                  strictement nécessaires au fonctionnement du Site.
                </li>
              </ul>
              <br />
              <strong>Qui est le responsable de traitement&nbsp?</strong>
              <br />
              Le responsable de traitement est la SAS Appenin, RCS Paris n° 482&nbsp;112&nbsp;331,
              86/90 rue Saint-Lazare, 75009 Paris, N° ORIAS 20001013.
              <br />
              <br />
              <strong>Que faisons-nous de vos données personnelles&nbsp;?</strong>
              <br />
              En renseignant les données personnelles demandées, vous acceptez d&apos;être
              recontacté par e-mail ou par téléphone, afin qu&apos;APPENIN puisse répondre à votre
              demande de renseignement.
              <br />
              <br />
              <strong>Quelle est la durée de conservation de vos données&nbsp;?</strong>
              <br />
              Vos données ne sont conservées que pendant la durée strictement nécessaire aux
              opérations pour lesquelles elles ont été collectées et au respect des durées de
              prescription légales, réglementaires et administratives.
              <br />
              <br />
              <strong>Qui sont les destinataires de vos données&nbsp;?</strong>
              Les données collectées sont collectées via les partenaires suivants&nbsp;:
              <ul style={{ listStyle: 'inside disc' }}>
                <li>
                  NOVOCALL&nbsp;: qui va collecter l&apos;email et/ou le numéro de téléphone&nbsp;;
                </li>
                <li>
                  SALESFORCE&nbsp;: qui va collecter les données renseignées via le formulaire de
                  contact&nbsp;;
                </li>
                <li>
                  GOOGLE &quot;Analytics&quot;&nbsp;: qui va collecter les donnéess de navigation à
                  des fins d&apos;analyse statistique&nbsp;;
                </li>
                <li>
                  VERCEL&nbsp;: l&apos;hébergeur du Site, pour les journaux du serveur (logs), les
                  adresses IP (requêtes http).
                </li>
              </ul>
              <br />
              <strong>
                Est-ce que vos données personnelles sont traitées en dehors de l&apos;Espace
                Economique Européen (c&apos;est-à-dire l&apos;Union européenne, Liechtenstein,
                Norvège et Islande)&nbsp;?
              </strong>
              <br />
              En fonction des partenaires destinataires (pas de données stockées sur le serveur
              web).
              <br />
              <br />
              <strong>Quels sont vos droits&nbsp;?</strong>
              <ul style={{ listStyle: 'inside disc' }}>
                <li>
                  <strong>un droit d&apos;accès et de communication</strong> à vos données qui vous
                  permet de savoir quelles données sont traitées, d&apos;obtenir leur communication,
                </li>
                <li>
                  <strong>un droit de rectification</strong> qui vous permet de faire rectifier une
                  information vous concernant lorsque celle-ci est obsolète ou erronée,
                </li>
                <li>
                  <strong>un droit d&apos;effacement</strong> qui vous permet d&apos;obtenir
                  l&apos;effacement de vos données personnelles sous réserve des durées légales de
                  conservation,
                </li>
                <li>
                  <strong>un droit d&apos;opposition</strong> qui vous permet de ne plus faire
                  l&apos;objet de prospection commerciale, ou, pour des raisons tenant à votre
                  situation particulière, de faire cesser les traitements basés sur notre intérêt
                  légitime,
                </li>
                <li>
                  <strong>un droit de limitation</strong> qui vous permet de limiter le traitement
                  de vos données, c&apos;est-à-dire de &quot;geler&quot; temporairement
                  l&apos;utilisation de certaines de vos données, ne faisant alors plus l&apos;objet
                  d&apos;un traitement actif&nbsp;:
                  <ul style={{ listStyle: 'inside circle', paddingLeft: '1rem' }}>
                    <li>en cas d&apos;usage illicite de vos données,</li>
                    <li>si vous contestez l&apos;exactitude de celles-ci,</li>
                    <li>
                      s&apos;il vous est nécessaire de disposer des données pour constater, exercer
                      ou défendre vos droits.
                    </li>
                  </ul>
                </li>
              </ul>
              <br />
              <strong>Comment exercer vos droits&nbsp;?</strong>
              <ul style={{ listStyle: 'inside disc' }}>
                <li>par mail à&nbsp;: vie-privee@appenin.fr</li>
                <li>
                  ou bien par courrier à&nbsp;: APPENIN – Données personnelles – 86-90 rue
                  Saint-Lazare, 75 009 Paris.
                </li>
              </ul>
              <br />
              Il peut vous être demandé de justifier de votre identité.
              <br />
              <br />
              En cas d&apos;insatisfaction liée à la gestion de vos données personnelles, vous
              pouvez introduire une réclamation auprès de la CNIL&nbsp;: soit directement en ligne
              en accédant au service dédié&nbsp;: https://www.cnil.fr, soit par courrier à
              l&apos;adresse suivante&nbsp;: CNIL - 3 Place de Fontenoy - TSA 80715 - 75334 PARIS
              CEDEX 07.
            </ContentText>
          </Section.Container>
        </Section>
        <Group />
      </main>
      <Footer />
    </>
  );
}

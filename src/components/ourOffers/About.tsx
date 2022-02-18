import Link from 'next/link';
import Lottie from '@/components/lottie';
import { Anchor, Section, Text } from '@/components/ui';

export function About() {
  return (
    <>
      <Section>
        <Section.Container>
          <Section.Header gradient rounded shadow id="offres-a-propos">
            Comment intégrer notre offre&nbsp;?
            <br />
            <span>A vous de choisir</span>
            &nbsp;👇
          </Section.Header>
        </Section.Container>
      </Section>
      <Section block="right">
        <Section.Article>
          <h2>
            <Text>Intégration web</Text>, une interface totalement intégrée
          </h2>
          <p>
            Vous voulez proposer une solution d&apos;assurance à vos clients mais vous n&apos;avez
            pas beaucoup de temps à y consacrer&nbsp;? Nos interfaces de souscription personnalisées
            sont faites pour vous&nbsp;: une solution simple comme l&apos;envoi d&apos;une url de
            souscription.
          </p>
          <Link href="/nous-contacter" passHref>
            <Anchor arrow underlined>
              En savoir plus
            </Anchor>
          </Link>
        </Section.Article>
        <Section.Figure fluid>
          <Lottie autoplay={true} loop={true} path="/assets/lotties/lf20_z4o5l14q.json" />
        </Section.Figure>
      </Section>
      <Section block="left">
        <Section.Article>
          <h2>
            <Text>Intégration API</Text>, conçue pour les développeurs
          </h2>
          <p>
            Vous voulez offrir à vos clients une expérience assurance intégrée&nbsp;? Notre portail
            Développeur API vous guide pas à pas pour intégrer la souscription d&apos;assurance à
            votre parcours client. Et notre équipe est présente pour répondre à toutes vos
            questions.
          </p>
          <Anchor
            arrow
            href="https://developers.appenin.fr/"
            rel="nofollow noopener noreferrer"
            target="_blank"
            underlined
          >
            Lire la documentation
          </Anchor>
        </Section.Article>
        <Section.Figure fluid>
          <Lottie autoplay={true} loop={true} path="/assets/lotties/lf20_7c3aj4wa.json" />
        </Section.Figure>
      </Section>
    </>
  );
}

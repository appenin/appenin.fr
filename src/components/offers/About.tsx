import Image from 'next/image';
import Link from 'next/link';
import IllustrationWeb from '@/assets/photos/IllusWeb-V6.jpg';
import VisuelAPI from '@/assets/photos/Visuel-Api-V1.jpg';
import Anchor from '@/components/anchor';
import { Section, Text } from '@/components/ui';

export function About() {
  return (
    <>
      <Section>
        <Section.Container>
          <Section.Header gradient rounded shadow>
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
          <Image
            alt=""
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            src={IllustrationWeb}
          />
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
          <Link href="https://developers.appenin.fr/" passHref>
            <Anchor arrow underlined target="_blank">
              Lire la documentation
            </Anchor>
          </Link>
        </Section.Article>
        <Section.Figure fluid>
          <Image alt="" layout="fill" objectFit="cover" objectPosition="center" src={VisuelAPI} />
        </Section.Figure>
      </Section>
    </>
  );
}

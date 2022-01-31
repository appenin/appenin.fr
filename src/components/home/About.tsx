import Image from 'next/image';
import Link from 'next/link';
import IllustrationHP from '@/assets/photos/IllusHP-V7c.jpg';
import Anchor from '@/components/anchor';
import { About as CommonAbout } from '@/components/common';
import { Section } from '@/components/ui';

export function About() {
  return (
    <>
      <Section>
        <Section.Container>
          <Section.Header gradient rounded shadow>
            Nous construisons avec vous l&apos;assurance <span>dont vos clients ont besoin</span>
            &nbsp;😎
          </Section.Header>
        </Section.Container>
      </Section>
      <Section block="left">
        <Section.Article>
          <h2>Des clients sereins grâce à des produits responsables</h2>
          <p>
            Confiez-nous l&apos;expérience assurance de vos clients&nbsp;: nos garanties sont parmi
            les plus robustes du marché. De la souscription à la gestion des sinistres, vos clients
            sont chouchoutés.
          </p>
          <Link href="/qui-sommes-nous" passHref>
            <Anchor arrow underlined>
              Découvrir qui est Appenin
            </Anchor>
          </Link>
        </Section.Article>
        <Section.Figure>
          <Image
            alt="Insurance illustration"
            layout="fill"
            objectFit="cover"
            objectPosition="top"
            priority
            src="/assets/illustrations/insurance.svg"
          />
        </Section.Figure>
      </Section>
      <CommonAbout withLinks />
      <Section block="right">
        <Section.Article>
          <h2>Un parcours de vente digital, facile et rapide à intégrer</h2>
          <p>
            Avec notre plateforme ouverte et notre portail API Développeur, vous intégrez facilement
            l&apos;assurance à vos parcours clients et utilisez les interfaces de souscription
            prêtes à l&apos;emploi.
          </p>
          <Link href="/nos-offres" passHref>
            <Anchor arrow underlined>
              En savoir plus
            </Anchor>
          </Link>
        </Section.Article>
        <Section.Figure fluid>
          <Image
            alt="Illustration"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            src={IllustrationHP}
          />
        </Section.Figure>
      </Section>
    </>
  );
}

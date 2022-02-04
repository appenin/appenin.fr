import Image from 'next/image';
import Link from 'next/link';
import IllustrationHP1 from '@/assets/photos/IllusHP-V8a.png';
import IllustrationHP2 from '@/assets/photos/IllusHP-V8b.png';
import { About as CommonAbout } from '@/components/common';
import { Anchor, Section } from '@/components/ui';
import * as Styled from './styled';

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
          <Link href="/nos-offres" passHref>
            <Anchor arrow underlined>
              Découvrir les produits Appenin
            </Anchor>
          </Link>
        </Section.Article>
        <Section.Figure>
          <Image
            alt="Insurance illustration"
            layout="fill"
            objectFit="cover"
            objectPosition="top"
            priority={false}
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
          <Link href="/nos-offres#offres-a-propos" passHref>
            <Anchor arrow underlined>
              En savoir plus
            </Anchor>
          </Link>
        </Section.Article>
        <Section.Figure fluid>
          <Styled.Slider transparent>
            <Styled.Slide>
              <Image
                alt="Illustration"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                priority={false}
                src={IllustrationHP1}
              />
            </Styled.Slide>
            <Styled.Slide>
              <Image
                alt="Illustration"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                priority={false}
                src={IllustrationHP2}
              />
            </Styled.Slide>
          </Styled.Slider>
        </Section.Figure>
      </Section>
    </>
  );
}

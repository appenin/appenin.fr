import Image from 'next/image';
import Link from 'next/link';
import GroupePhoto from '@/assets/photos/Photo-Groupe-Covea-650x433.jpeg';
import Anchor from '@/components/anchor';
import { Section } from '@/components/ui';

type AboutProps = { withLinks?: boolean };

export function About({ withLinks = false }: AboutProps) {
  return (
    <>
      <Section block="right">
        <Section.Article>
          <h2>La réactivité et l&apos;agilité d&apos;une startup</h2>
          <p>
            Vous adaptez les produits d&apos;assurance que vous proposez en fonction des besoins de
            vos clients... et vous mettez en production votre solution d&apos;assurance
            personnalisée en 3 semaines.
          </p>
          {withLinks && (
            <Link href="/qui-sommes-nous" passHref>
              <Anchor arrow underlined>
                Découvrir Appenin
              </Anchor>
            </Link>
          )}
        </Section.Article>
        <Section.Figure>
          <Image
            alt="Startup illustration"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            priority
            src="/assets/illustrations/startup.svg"
          />
        </Section.Figure>
      </Section>
      <Section block="left">
        <Section.Article>
          <h2>La solidité et la fiabilité d&apos;un leader</h2>
          <p>
            Appenin bénéficie du soutien et des expertises du groupe Covéa (MAAF, MMA, GMF), leader
            français de l&apos;assurance habitation et auto.
          </p>
          {withLinks && (
            <Link href="/qui-sommes-nous" passHref>
              <Anchor arrow underlined>
                Découvrir Appenin
              </Anchor>
            </Link>
          )}
        </Section.Article>
        <Section.Figure>
          <Image
            alt="Covea head office"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            src={GroupePhoto}
          />
        </Section.Figure>
      </Section>
    </>
  );
}

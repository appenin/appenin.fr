import Image from 'next/image';
import Link from 'next/link';
import Illustration from '@/assets/photos/toa-heftiba-4xe-yVFJCvw-unsplash.jpg';
import Anchor from '@/components/anchor';
import { Section } from '@/components/ui';

export function Engagement() {
  return (
    <>
      <Section>
        <Section.Container>
          <Section.Header gradient rounded shadow>
            Nous sommes <span>toujours là pour vous</span>&nbsp;😉
          </Section.Header>
        </Section.Container>
      </Section>
      <Section block="left">
        <Section.Article>
          <h2>Notre engagement&nbsp;: mettre notre expertise au service de vos clients</h2>
          <p>
            Professionnels de l&apos;immobilier, acteurs de l&apos;énergie, des telco ou des
            services financiers, retailers... Appenin vous offre un modèle de distribution
            d&apos;assurance sécurisé en matière d&apos;expérience client et de conformité
            réglementaire.
          </p>
          <Link href="/nous-contacter" passHref>
            <Anchor arrow underlined>
              J&apos;ai une question
            </Anchor>
          </Link>
        </Section.Article>
        <Section.Figure>
          <Image
            alt="Illustration"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            src={Illustration}
          />
        </Section.Figure>
      </Section>
    </>
  );
}

import { forwardRef, HTMLAttributes } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui';
import { Container, Section } from '@/components/ui/styled';
import * as Styled from './styled';

type HeroProps = HTMLAttributes<HTMLDivElement>;

export const Hero = forwardRef<HTMLElement, HeroProps>((props, ref) => (
  <Section ref={ref}>
    <Container fluid>
      <Styled.Hero {...props}>
        <article>
          <h1 data-testid="hero-header">
            L&apos;assurance
            <br />
            sur mesure
            <br />
            pour vos clients
          </h1>
          <h3 data-testid="hero-sub-header">
            ⚡ Simplifiez la vie de vos clients, avec une assurance 100% digitale.
          </h3>
          <footer data-testid="hero-footer">
            <Button
              as="a"
              href="https://client.appenin.fr"
              rel="nofollow noopener noreferrer"
              target="_blank"
              bordered
              fluid
            >
              Je suis assuré
            </Button>
            <Link href="/nous-contacter" passHref>
              <Button as="a" color="secondary" fluid>
                Devenir partenaire
              </Button>
            </Link>
          </footer>
        </article>
        <figure>
          <Image alt="Appenin hero" layout="fill" priority src="/assets/illustrations/hero.svg" />
        </figure>
      </Styled.Hero>
    </Container>
  </Section>
));
Hero.displayName = 'Hero';

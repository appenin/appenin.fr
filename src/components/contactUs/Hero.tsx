import { forwardRef, HTMLAttributes } from 'react';
import { Container, Header, Section } from '@/components/ui/styled';

type HeroProps = HTMLAttributes<HTMLDivElement>;

export const Hero = forwardRef<HTMLElement, HeroProps>((props, ref) => (
  <Section ref={ref}>
    <Container>
      <Header as="h1" css={{ paddingBottom: '$3' }}>
        Ravis de faire votre connaissance&nbsp;👋
      </Header>
      <div style={{ textAlign: 'center' }}>Une question&nbsp;? Contactez-nous&nbsp;!</div>
    </Container>
  </Section>
));
Hero.displayName = 'Hero';

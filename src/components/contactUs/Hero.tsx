import { HTMLAttributes } from 'react';
import { Section } from '@/components/ui';

type HeroProps = HTMLAttributes<HTMLDivElement>;

export function Hero(props: HeroProps) {
  return (
    <Section>
      <Section.Container>
        <Section.Header as="h1" css={{ paddingBottom: 0 }}>
          Ravis de faire votre connaissance&nbsp;👋
        </Section.Header>
        <div style={{ textAlign: 'center' }}>Une question&nbsp;? Contactez-nous&nbsp;!</div>
      </Section.Container>
    </Section>
  );
}

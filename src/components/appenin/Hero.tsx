import { forwardRef, HTMLAttributes } from 'react';
import Link from 'next/link';
import { Button, Section } from '@/components/ui';
import { Section as StyledSection } from '@/components/ui/styled';

type HeroProps = HTMLAttributes<HTMLDivElement>;

export const Hero = forwardRef<HTMLElement, HeroProps>((props, ref) => (
  <>
    <Section>
      <Section.Container>
        <Section.Header as="h1" css={{ paddingBottom: 0 }}>
          Nous construisons avec vous l&apos;assurance dont vos clients ont besoin&nbsp;😎
          <br />
          <br />
          <Link href="/nous-contacter" passHref>
            <Button as="a" color="secondary" size="lg">
              Devenir partenaire
            </Button>
          </Link>
        </Section.Header>
      </Section.Container>
    </Section>
    <StyledSection ref={ref} />
  </>
));
Hero.displayName = 'Hero';

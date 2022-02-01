import { forwardRef, HTMLAttributes } from 'react';
import Link from 'next/link';
import Button from '@/components/button';
import { Section } from '@/components/ui';
import { Section as StyledSection } from '@/components/ui/styled';

type HeroProps = HTMLAttributes<HTMLDivElement>;

export const Hero = forwardRef<HTMLElement, HeroProps>((props, ref) => (
  <>
    <Section>
      <Section.Container>
        <Section.Header as="h1" css={{ paddingBottom: 0 }}>
          Nos offres s&apos;adaptent à vos clients et non l&apos;inverse&nbsp;👌
          <br />
          <br />
          <Link href="/contact" passHref>
            <Button color="secondary" size="lg">
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

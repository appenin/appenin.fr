import { HTMLAttributes } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui';
import type { HTMLAttributesWithVariants } from '@/styles';
import * as Styled from './styled';
import { Logo } from '.';

export type StickyProps = HTMLAttributesWithVariants<
  HTMLAttributes<HTMLDivElement>,
  typeof Styled.Wrapper
>;

export function Sticky(props: StickyProps) {
  return (
    <Styled.Wrapper ui="sticky" {...props}>
      <Styled.Container ui="sticky">
        <Logo data-testid="header-sticky-logo" />
        <nav data-testid="header-sticky-navigation">
          <Link href="/contact" passHref>
            <Button as="a" bordered>
              Je suis assuré
            </Button>
          </Link>
          <Link href="/nous-contacter" passHref>
            <Button as="a" color="secondary">
              Devenir partenaire
            </Button>
          </Link>
        </nav>
      </Styled.Container>
    </Styled.Wrapper>
  );
}

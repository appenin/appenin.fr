import { HTMLAttributes } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Button } from '@/components/ui';
import type { HTMLAttributesWithVariants } from '@/styles';
import * as Styled from './styled';

const NAVIGATION_BUTTONS = ['/nos-offres', '/qui-sommes-nous', '/nous-contacter'];

export type NavigationProps = HTMLAttributesWithVariants<
  HTMLAttributes<HTMLElement>,
  typeof Styled.Navigation
>;

export function Navigation(props: NavigationProps) {
  const { pathname } = useRouter();
  const ariaProps = props.full ? { 'aria-modal': true, role: 'dialog' } : {};

  return (
    <Styled.Navigation {...props} {...ariaProps}>
      <Link href={NAVIGATION_BUTTONS[0]} passHref>
        <Button as="a" {...(pathname === NAVIGATION_BUTTONS[0] ? { activated: true } : {})}>
          Nos offres
        </Button>
      </Link>
      <Link href={NAVIGATION_BUTTONS[1]} passHref>
        <Button as="a" {...(pathname === NAVIGATION_BUTTONS[1] ? { activated: true } : {})}>
          Qui sommes-nous&nbsp;?
        </Button>
      </Link>
    </Styled.Navigation>
  );
}

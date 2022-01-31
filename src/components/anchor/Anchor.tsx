import { AnchorHTMLAttributes, forwardRef, PropsWithChildren } from 'react';
import type { HTMLAttributesWithVariants } from '@/styles';
import * as Styled from './styled';

export type AnchorProps = PropsWithChildren<
  HTMLAttributesWithVariants<AnchorHTMLAttributes<HTMLAnchorElement>, typeof Styled.Anchor>
>;

export const Anchor = forwardRef<HTMLAnchorElement, AnchorProps>(({ children, ...props }, ref) => (
  <Styled.Anchor ref={ref} {...props}>
    {children}
  </Styled.Anchor>
));
Anchor.displayName = 'Anchor';

/**
 * const ref = React.createRef<HTMLAnchorElement>();
 * <Anchor href="#" ref={ref}>Link</Anchor>
 */

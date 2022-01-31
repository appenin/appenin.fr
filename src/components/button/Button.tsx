import { ButtonHTMLAttributes, forwardRef, PropsWithChildren } from 'react';
import type { HTMLAttributesWithVariants } from '@/styles';
import * as Styled from './styled';

export type ButtonProps = PropsWithChildren<
  HTMLAttributesWithVariants<ButtonHTMLAttributes<HTMLButtonElement>, typeof Styled.Button>
>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ children, ...props }, ref) => (
  <Styled.Button ref={ref} {...props}>
    {children}
  </Styled.Button>
));
Button.displayName = 'Button';

/**
 * const ref = React.createRef<HTMLButtonElement>();
 * <Button ref={ref}>Button</Button>
 */

import { ButtonHTMLAttributes, forwardRef } from 'react';
import { HTMLAttributesWithVariants } from '@/styles';
import * as Styled from './styled';

export type ToggleProps = HTMLAttributesWithVariants<
  ButtonHTMLAttributes<HTMLButtonElement>,
  typeof Styled.Toggle
>;

export const Toggle = forwardRef<HTMLButtonElement, ToggleProps>((props, ref) => (
  <Styled.Toggle ref={ref} {...props}>
    <span />
  </Styled.Toggle>
));
Toggle.displayName = 'Toggle';

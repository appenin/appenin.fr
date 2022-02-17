import { InputHTMLAttributes, useEffect, useRef } from 'react';
import type { HTMLAttributesWithVariants } from '@/styles';
import * as Styled from './styled';
import { ServiceStatus } from '.';

type SwitchProps = HTMLAttributesWithVariants<
  InputHTMLAttributes<HTMLElement>,
  typeof Styled.Switch
> & {
  label: string;
};

export function Switch({ id, label, value, ...props }: SwitchProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef && inputRef.current) {
      inputRef.current.checked = value === ServiceStatus.allowed;
      inputRef.current.indeterminate = value === ServiceStatus.pending;
    }
  }, [value]);

  return (
    <Styled.Switch htmlFor={`input-${id}`}>
      {label}
      <input id={`input-${id}`} ref={inputRef} role="switch" type="checkbox" {...props} />
    </Styled.Switch>
  );
}

import { HTMLAttributes } from 'react';
import * as Styled from './styled';

type BackgroundProps = HTMLAttributes<HTMLElement>;

export function Background(props: BackgroundProps) {
  return (
    <Styled.BackgroundWrapper>
      <Styled.Background fluid {...props} />
    </Styled.BackgroundWrapper>
  );
}

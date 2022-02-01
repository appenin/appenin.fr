import { AnchorHTMLAttributes } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import * as Styled from './styled';

export function Logo(props: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <Link href="/" passHref>
      <Styled.Logo {...props}>
        <Image alt="Appenin gradient logo" layout="fill" src="/assets/logos/appenin-gradient.svg" />
      </Styled.Logo>
    </Link>
  );
}

import { HTMLAttributes } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LinkedinIcon from '@/assets/icons/linkedin.svg';
import { Section, XtoOne } from '@/components/ui';
import * as Styled from './styled';

export type FooterProps = HTMLAttributes<HTMLElement>;

export function Footer(props: FooterProps) {
  return (
    <Section>
      <Styled.Footer as="footer" {...props}>
        <Styled.Logo>
          <Image alt="Appenin logo" layout="fill" src="/assets/logos/appenin.svg" />
        </Styled.Logo>
        <XtoOne columns={2} css={{ placeItems: 'flex-start' }}>
          <ul>
            <li>
              <strong>A propos</strong>
            </li>
            <li>On recrute&nbsp;!</li>
            <li>???</li>
          </ul>
          <ul>
            <li>
              <strong>Ressources</strong>
            </li>
            <li>Mentions légales</li>
            <li>Politique de confidentialité</li>
            <li>???</li>
          </ul>
          <ul>
            <li>
              <strong>Contact</strong>
            </li>
            <li>contact@appenin.fr</li>
            <li>???</li>
          </ul>
          <ul>
            <li>
              <strong>Suivez-nous</strong>
            </li>
            <li>
              <LinkedinIcon />
            </li>
          </ul>
        </XtoOne>
      </Styled.Footer>
    </Section>
  );
}

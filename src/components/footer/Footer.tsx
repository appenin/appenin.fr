import { HTMLAttributes } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LinkedinIcon from '@/assets/icons/linkedin.svg';
import { Button } from '@/components/button/styled';
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
              <Link href="/" passHref>
                <a>Accueil</a>
              </Link>
            </li>
            <li>
              <Link href="/nos-offres" passHref>
                <a>Nos offres</a>
              </Link>
            </li>
            <li>
              <Link href="/qui-sommes-nous" passHref>
                <a>Qui sommes-nous&nbsp;?</a>
              </Link>
            </li>
            <li>
              <Link href="/nous-contacter" passHref>
                <a>Contact</a>
              </Link>
            </li>
            <li>
              <Link href="/contact" passHref>
                <a>Je suis assuré</a>
              </Link>
            </li>
            <li>
              <Link href="/mentions-legales" passHref>
                <a>Mentions légales</a>
              </Link>
            </li>
            <li>
              <Link href="/politique-de-confidentialite" passHref>
                <a>Politique de confidentialité</a>
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link href="https://welcometothejungle.com/fr/companies/appenin" passHref>
                <Button
                  as="a"
                  color="primary"
                  size="sm"
                  target="_blank"
                  css={{ '&:hover,&:focus': { textDecoration: 'none!important' } }}
                >
                  👉&nbsp;On recrute&nbsp;!
                </Button>
              </Link>
            </li>
            <li style={{ paddingTop: '1rem' }}>
              <strong>Suivez-nous</strong>
            </li>
            <li>
              <Link href="https://www.linkedin.com/company/appenin/" passHref>
                <a target="_blank">
                  <LinkedinIcon />
                </a>
              </Link>
            </li>
          </ul>
        </XtoOne>
      </Styled.Footer>
    </Section>
  );
}

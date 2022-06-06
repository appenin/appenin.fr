import { HTMLAttributes } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import GithubIcon from '@/assets/logos/github.svg';
import LinkedinIcon from '@/assets/logos/linkedin.svg';
import { Button, Section, XtoOne } from '@/components/ui';
import * as Styled from './styled';

export type FooterProps = HTMLAttributes<HTMLElement>;

export function Footer(props: FooterProps) {
  return (
    <Section>
      <Styled.Footer as="footer" {...props}>
        <div>
          <Styled.Logo>
            <Image
              alt="Appenin logo"
              layout="fill"
              priority
              src="/assets/logos/appenin-gradient.svg"
            />
          </Styled.Logo>
          <Styled.Catchphrase>L&apos;assurance digitale du groupe Covéa</Styled.Catchphrase>
          <Image
            alt="Covéa logo"
            height={97}
            priority={false}
            src="/assets/logos/covea-group.svg"
            width={367}
          />
        </div>
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
              <a
                href="https://client.appenin.fr"
                rel="nofollow noopener noreferrer"
                target="_blank"
              >
                Je suis assuré
              </a>
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
              <Button
                as="a"
                color="primary"
                css={{
                  whiteSpace: 'nowrap',
                  '&:hover,&:focus': { textDecoration: 'none!important' },
                }}
                href="https://welcometothejungle.com/fr/companies/appenin"
                rel="nofollow noopener noreferrer"
                target="_blank"
              >
                👉&nbsp;On recrute&nbsp;!
              </Button>
            </li>
            <li
              style={{
                paddingTop: '2rem',
              }}
            >
              <strong>Suivez-nous</strong>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/appenin/"
                rel="nofollow noopener noreferrer"
                target="_blank"
                title="LinkedIn"
              >
                <LinkedinIcon style={{ display: 'inline' }} />
              </a>
            </li>
            <li
              style={{
                paddingTop: '1rem',
              }}
            >
              <a
                href="https://github.com/appenin/"
                rel="nofollow noopener noreferrer"
                target="_blank"
                title="Github"
              >
                <GithubIcon />
              </a>
            </li>
          </ul>
        </XtoOne>
      </Styled.Footer>
    </Section>
  );
}

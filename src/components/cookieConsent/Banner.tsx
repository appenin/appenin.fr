import { useContext } from 'react';
import Link from 'next/link';
import CookieIcon from '@/assets/icons/cookie.svg';
import { Button } from '@/components/ui';
import CookieConsentContext, { CookieConsentContextProps } from './CookieConsentContext';
import * as Styled from './styled';

export function Banner() {
  const { allowAll, denyAll, services, toggleBanner, toggleCustomizeDialog } = useContext(
    CookieConsentContext,
  ) as CookieConsentContextProps;

  const handleAllowAll = () => {
    allowAll();
    toggleBanner(false);
  };

  const handleCloseBanner = () => {
    toggleBanner(false);
  };

  const handleDenyAll = () => {
    denyAll();
    toggleBanner(false);
  };

  const handleShowCustomizeDialog = () => {
    toggleCustomizeDialog(true);
  };

  return (
    <Styled.Banner tabIndex={-1}>
      <header>
        <section>
          <CookieIcon />
          <h4>Utilisation des cookies</h4>
        </section>
        <Button size="sm" onClick={handleCloseBanner} type="button">
          X
        </Button>
      </header>
      <section>
        Ce site Web utilise des cookies pour :
        <ul>
          {services.map(
            (service) =>
              service.shortDescription && <li key={service.id}>{service.shortDescription}</li>,
          )}
        </ul>
        Vous avez le choix de les accepter ou de les refuser (consulter notre{' '}
        <Link href="/politique-de-confidentialite" passHref>
          <a>politique de confidentialité</a>
        </Link>
        ).
      </section>
      <footer>
        <Button color="secondary" fluid onClick={handleAllowAll} type="button">
          Tout accepter
        </Button>
        <Button bordered onClick={handleDenyAll} fluid type="button">
          Tout refuser
        </Button>
        <Button fluid onClick={handleShowCustomizeDialog} type="button">
          Personnaliser
        </Button>
      </footer>
    </Styled.Banner>
  );
}

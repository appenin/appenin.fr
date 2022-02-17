import { ChangeEvent, Fragment, useCallback, useContext, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import CookieIcon from '@/assets/icons/cookie.svg';
import { Button } from '@/components/ui';
import CookieConsentContext, { CookieConsentContextProps } from './CookieConsentContext';
import { ReactPortal } from './ReactPortal';
import { ServiceStatus } from './services';
import * as Styled from './styled';
import { Switch } from './Switch';
import type { CookieConsentStatuses } from './types';

export function CustomizeDialog() {
  const rootRef = useRef<HTMLDivElement>(null);
  const { allowAll, denyAll, save, services } = useContext(
    CookieConsentContext,
  ) as CookieConsentContextProps;
  const [statuses, setStatuses] = useState<CookieConsentStatuses>(
    services.reduce(function (acc, { id, status }) {
      acc[id] = status;
      return acc;
    }, {} as CookieConsentStatuses),
  );

  const focusTrap = useCallback((event: KeyboardEvent) => {
    const els = rootRef.current?.querySelectorAll<HTMLElement>('a[href], button, input') || [];
    const firstFocusableEl = els.length > 0 ? els[0] : null;
    const lastFocusableEl = els.length > 0 ? els[els.length - 1] : null;
    if (firstFocusableEl && lastFocusableEl && event.key === 'Tab') {
      if (event.shiftKey) {
        if (document.activeElement === firstFocusableEl) {
          lastFocusableEl.focus();
          event.preventDefault();
        }
      } else {
        if (document.activeElement === lastFocusableEl) {
          firstFocusableEl.focus();
          event.preventDefault();
        }
      }
      if (event.target && !rootRef.current?.contains(event.target as Node)) {
        firstFocusableEl.focus();
        event.preventDefault();
      }
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', focusTrap);

    return () => {
      document.removeEventListener('keydown', focusTrap);
    };
  }, [focusTrap]);

  const handleChange = ({ currentTarget: { name, checked } }: ChangeEvent<HTMLInputElement>) => {
    setStatuses((previousStatuses) => ({
      ...previousStatuses,
      [name]: checked ? ServiceStatus.allowed : ServiceStatus.denied,
    }));
  };

  const handleAllowAll = () => {
    allowAll(true);
  };

  const handleDenyAll = () => {
    denyAll(true);
  };

  const handleSave = () => {
    save(statuses, true);
  };

  return (
    <ReactPortal wrapperId="react-portal-dialog-wrapper">
      <Styled.Dialog
        aria-modal="true"
        aria-labelledby="dialogTitle"
        ref={rootRef}
        role="dialog"
        tabIndex={-1}
      >
        <header>
          <CookieIcon />
          <h3 id="dialogTitle">Gestion des cookies</h3>
        </header>
        <section>
          En autorisant ces services tiers, vous acceptez le dépôt et la lecture des cookies et
          l&apos;utilisation de technologies de suivi nécessaires à leur bon fonctionnement
          (consulter notre{' '}
          <Link href="/politique-de-confidentialite" passHref>
            <a>politique de confidentialité</a>
          </Link>
          ).
          <br />
          {services.map((service) => (
            <Fragment key={service.id}>
              <h4>{service.category}</h4>
              <Switch
                id={service.id}
                key={service.id}
                label={service.name}
                name={service.id}
                onChange={handleChange}
                value={service.status}
              />
              <p>{service.description}</p>
            </Fragment>
          ))}
        </section>
        <footer>
          <Button onClick={handleSave} type="button">
            Enregistrer
          </Button>
          <Button bordered onClick={handleDenyAll} type="button">
            Tout refuser
          </Button>
          <Button color="secondary" onClick={handleAllowAll} type="button">
            Tout Accepter
          </Button>
        </footer>
      </Styled.Dialog>
    </ReactPortal>
  );
}

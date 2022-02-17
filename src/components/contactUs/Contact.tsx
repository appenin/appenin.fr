import { MouseEvent, useContext, useEffect, useState } from 'react';
import CalendarIcon from '@/assets/icons/calendar.svg';
import SendEmailIcon from '@/assets/icons/send-email.svg';
import {
  CookieConsentContext,
  CookieConsentContextProps,
  Service,
  ServiceId,
  ServiceStatus,
} from '@/components/cookieConsent';
import { Button, Card, OneToX, Section } from '@/components/ui';
import * as Styled from './styled';

export function Contact() {
  const [clickToCall, setClickToCall] = useState<Service>();
  const { getServiceById, services, toggleCustomizeDialog } = useContext(
    CookieConsentContext,
  ) as CookieConsentContextProps;

  useEffect(() => {
    const clickToCallService = getServiceById(ServiceId.novocall);
    setClickToCall(clickToCallService);
  }, [getServiceById, services]);

  const handleShowCustomizeDialog = () => {
    toggleCustomizeDialog(true);
  };

  const handleClickToCall = (_event: MouseEvent<HTMLButtonElement>) => {
    const clickToCallButton = document.querySelector<HTMLDivElement>('.novocall.novocall-button');
    if (clickToCallButton) {
      clickToCallButton.click();
    }
  };

  return (
    <Section>
      <Section.Container>
        <OneToX columns={2}>
          <Card background="primary" rounded shadow>
            <header>
              <Styled.Figure color="yellow">
                <SendEmailIcon />
              </Styled.Figure>
              <h3>Email</h3>
            </header>
            <p>Vous pouvez nous envoyer un email à</p>
            <a href="mailto:partenaires@appenin.fr">
              <strong>partenaires@appenin.fr</strong>
            </a>
          </Card>
          <Card background="primary" rounded shadow>
            <header>
              <Styled.Figure color="pink">
                <CalendarIcon />
              </Styled.Figure>
              <h3>Prendre rendez-vous</h3>
            </header>
            {clickToCall?.status !== ServiceStatus.allowed && (
              <p style={{ textAlign: 'justify' }}>
                Pour activer cette fonctionnalité, vous devez préalablement autoriser les cookies de
                notre partenaire <strong>{clickToCall?.name}</strong> en cliquant{' '}
                <Button bordered onClick={handleShowCustomizeDialog} size="sm" type="button">
                  <strong>ici</strong>
                </Button>
              </p>
            )}
            <Button
              bordered
              disabled={clickToCall?.status !== ServiceStatus.allowed}
              onClick={handleClickToCall}
            >
              Réservez un appel
            </Button>
          </Card>
        </OneToX>
      </Section.Container>
    </Section>
  );
}

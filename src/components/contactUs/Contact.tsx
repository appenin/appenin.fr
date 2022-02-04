import { MouseEvent } from 'react';
import CalendarIcon from '@/assets/icons/calendar.svg';
import SendEmailIcon from '@/assets/icons/send-email.svg';
import { Button, Card, OneToX, Section } from '@/components/ui';
import * as Styled from './styled';

export function Contact() {
  const handleAppointmentClick = (_event: MouseEvent<HTMLButtonElement>) => {
    const novocallButton = document.querySelector<HTMLDivElement>('.novocall.novocall-button');
    if (novocallButton) {
      novocallButton.click();
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
            <Button bordered onClick={handleAppointmentClick}>
              Réservez un appel
            </Button>
          </Card>
        </OneToX>
      </Section.Container>
    </Section>
  );
}

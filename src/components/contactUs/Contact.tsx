import CalendarIcon from '@/assets/icons/calendar.svg';
import PhoneCircleIcon from '@/assets/icons/phone-circle.svg';
import SendEmailIcon from '@/assets/icons/send-email.svg';
import Button from '@/components/button';
import { Card, OneToX, Section } from '@/components/ui';
import * as Styled from './styled';

export function Contact() {
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
            <a href="mailto:partenaire@appenin.fr">
              <strong>partenaire@appenin.fr</strong>
            </a>
          </Card>
          <Card background="primary" rounded shadow>
            <header>
              <Styled.Figure color="pink">
                <CalendarIcon />
              </Styled.Figure>
              <h3>Prendre rendez-vous</h3>
            </header>
            <Button bordered>Réservez un appel</Button>
          </Card>
        </OneToX>
      </Section.Container>
    </Section>
  );
}

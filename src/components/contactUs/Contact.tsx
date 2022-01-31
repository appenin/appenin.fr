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
        <OneToX columns={3}>
          <Card background="primary" rounded shadow>
            <header>
              <Styled.Figure color="yellow">
                <SendEmailIcon />
              </Styled.Figure>
              <h3>Mail</h3>
            </header>
            <p>Vous pouvez nous écrire par mail à</p>
            <strong>contact@appenin.fr</strong>
          </Card>
          <Card background="primary" rounded shadow>
            <header>
              <Styled.Figure color="orange">
                <PhoneCircleIcon />
              </Styled.Figure>
              <h3>Téléphone</h3>
            </header>
            <p>Vous pouvez nous appeler au</p>
            <strong>01 83 62 51 71</strong>
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

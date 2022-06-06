import SendEmailIcon from '@/assets/icons/send-email.svg';
import { Card, Section } from '@/components/ui';
import * as Styled from './styled';

export function Contact() {
  return (
    <Section>
      <Section.Container>
        <Card background="primary" rounded shadow>
          <Styled.CardHeader>
            <Styled.Figure color="yellow">
              <SendEmailIcon />
            </Styled.Figure>
            <h3>Email</h3>
          </Styled.CardHeader>
          <Styled.CardBody>
            Vous pouvez nous envoyer un email à{` `}
            <a href="mailto:partenaires@appenin.fr">partenaires@appenin.fr</a>
          </Styled.CardBody>
        </Card>
      </Section.Container>
    </Section>
  );
}

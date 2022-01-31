import { FormEvent } from 'react';
import Button from '@/components/button';
import { Section } from '@/components/ui';
import { pushEvent } from '@/libs/google';
import * as Styled from './styled';

export function Form() {
  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    const formData = new FormData(event.currentTarget);
    pushEvent({
      action: 'submit_form',
      category: 'Contact',
      label: formData.get('email'),
    });
  };

  return (
    <Section>
      <Styled.BackgroundWrapper>
        <Styled.Background fluid />
      </Styled.BackgroundWrapper>
      <Styled.FormContainer>
        <form action={process.env.salesForce} method="POST" onSubmit={handleFormSubmit}>
          <h2 style={{ textAlign: 'center' }}>👉&nbsp;Vous avez une question&nbsp;?</h2>
          <p style={{ textAlign: 'center' }}>
            Contactez-nous, nous vous répondrons dans les plus brefs délais&nbsp;!
          </p>
          <input type="hidden" name="oid" value="00D0900000CvkPR" />
          <input type="hidden" name="retURL" value="https://www.appenin.fr/merci" />
          <div>
            <label htmlFor="company">NON DE LA SOCIÉTÉ</label>
            <input id="company" maxLength={40} name="company" required size={20} type="text" />
          </div>
          <div>
            <label htmlFor="last_name">NOM</label>
            <input id="last_name" maxLength={80} name="last_name" required size={20} type="text" />
          </div>
          <div>
            <label htmlFor="first_name">PRÉNOM</label>
            <input
              id="first_name"
              maxLength={40}
              name="first_name"
              required
              size={20}
              type="text"
            />
          </div>
          <div>
            <label htmlFor="email">ADRESSE EMAIL</label>
            <input id="email" maxLength={80} name="email" required size={20} type="email" />
          </div>
          <div>
            <label htmlFor="mobile">TÉLÉPHONE MOBILE</label>
            <input id="mobile" maxLength={40} name="mobile" size={20} type="text" />
          </div>
          <div>
            <label htmlFor="00N0900000IntABEAZ">MESSAGE</label>
            <textarea id="00N0900000IntABEAZ" name="00N0900000IntABEAZ" />
          </div>
          <div style={{ textAlign: 'center' }}>
            <Button color="secondary" disabled type="submit" name="submit">
              Envoyer
            </Button>
          </div>
        </form>
      </Styled.FormContainer>
    </Section>
  );
}

import { FormEvent } from 'react';
import Button from '@/components/button';
import { OneToX, Section } from '@/components/ui';
import { pushEvent } from '@/libs/google';
import * as Styled from './styled';

export function Form() {
  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    const formData = new FormData(event.currentTarget);
    pushEvent({
      action: 'submit_form',
      category: 'Contact',
      label: `[${formData.get('company')}] ${formData.get('first_name')} ${formData.get(
        'last_name',
      )} (${formData.get('email')})`,
    });
  };

  return (
    <Section>
      <Styled.BackgroundWrapper>
        <Styled.Background fluid />
      </Styled.BackgroundWrapper>
      <Styled.FormContainer>
        <Styled.Form action={process.env.salesForce} method="POST" onSubmit={handleFormSubmit}>
          <header>
            <h2>👉&nbsp;Vous avez une question&nbsp;?</h2>
            <p>Contactez-nous, nous vous répondrons dans les plus brefs délais&nbsp;!</p>
          </header>
          <input type="hidden" name="oid" value="00D0900000CvkPR" />
          <input type="hidden" name="retURL" value="https://www.appenin.fr/merci" />
          <Styled.Field>
            <label htmlFor="company">
              NON DE LA SOCIÉTÉ <span>*</span>
            </label>
            <input id="company" maxLength={40} name="company" required type="text" />
          </Styled.Field>
          <OneToX columns={2}>
            <Styled.Field>
              <label htmlFor="last_name">
                NOM <span>*</span>
              </label>
              <input id="last_name" maxLength={80} name="last_name" required type="text" />
            </Styled.Field>
            <Styled.Field>
              <label htmlFor="first_name">
                PRÉNOM <span>*</span>
              </label>
              <input id="first_name" maxLength={40} name="first_name" required type="text" />
            </Styled.Field>
          </OneToX>
          <OneToX columns={2}>
            <Styled.Field>
              <label htmlFor="email">
                ADRESSE EMAIL <span>*</span>
              </label>
              <input
                id="email"
                inputMode="email"
                maxLength={80}
                name="email"
                required
                type="email"
              />
            </Styled.Field>
            <Styled.Field>
              <label htmlFor="mobile">TÉLÉPHONE MOBILE</label>
              <input id="mobile" inputMode="tel" maxLength={20} name="mobile" type="tel" />
            </Styled.Field>
          </OneToX>
          <Styled.Field>
            <label htmlFor="00N0900000IntABEAZ">MESSAGE</label>
            <textarea id="00N0900000IntABEAZ" maxLength={1000} name="00N0900000IntABEAZ" rows={5} />
          </Styled.Field>
          <footer>
            <Button color="secondary" type="submit" name="submit">
              Envoyer
            </Button>
          </footer>
        </Styled.Form>
      </Styled.FormContainer>
    </Section>
  );
}

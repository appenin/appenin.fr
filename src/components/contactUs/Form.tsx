import { FormEvent, useRef } from 'react';
import { Field, Formik } from 'formik';
import type { FieldAttributes, FormikErrors, FormikHelpers, FormikTouched } from 'formik';
import * as Yup from 'yup';
import { Button, OneToX, Section } from '@/components/ui';
import { pushEvent } from '@/libs/matomo';
import { SFDC_FIELD_ID, SFDC_OID, SFDC_RETURN_URL } from '@/libs/salesforce';
import * as Styled from './styled';

const FIELD_ERROR_EMAIL = 'Adresse email invalide';
const FIELD_ERROR_REQUIRED = 'Veuillez renseigner ce champ';
const FIELD_ERROR_TOO_LONG = 'caractères maximum';
const FIELD_MAX_SIZE_40 = 40;
const FIELD_MAX_SIZE_80 = 80;
const FIELD_MESSAGE_ID_NAME = SFDC_FIELD_ID as string;

type ContactFields = {
  company: string;
  last_name: string;
  first_name: string;
  email: string;
  mobile: string;
  [key: string]: string;
};

const ContactSchema = Yup.object().shape({
  company: Yup.string()
    .max(FIELD_MAX_SIZE_40, `${FIELD_MAX_SIZE_40} ${FIELD_ERROR_TOO_LONG}`)
    .required(FIELD_ERROR_REQUIRED),
  first_name: Yup.string()
    .max(FIELD_MAX_SIZE_40, `${FIELD_MAX_SIZE_40} ${FIELD_ERROR_TOO_LONG}`)
    .required(FIELD_ERROR_REQUIRED),
  last_name: Yup.string()
    .max(FIELD_MAX_SIZE_80, `${FIELD_MAX_SIZE_80} ${FIELD_ERROR_TOO_LONG}`)
    .required(FIELD_ERROR_REQUIRED),
  email: Yup.string()
    .max(FIELD_MAX_SIZE_80, `${FIELD_MAX_SIZE_80} ${FIELD_ERROR_TOO_LONG}`)
    .email(FIELD_ERROR_EMAIL)
    .required(FIELD_ERROR_REQUIRED),
  mobile: Yup.string().max(FIELD_MAX_SIZE_40, `${FIELD_MAX_SIZE_40} ${FIELD_ERROR_TOO_LONG}`),
});

interface FormFieldProps extends FieldAttributes<any> {
  errors: FormikErrors<ContactFields>;
  label: string;
  name: keyof ContactFields;
  touched: FormikTouched<ContactFields>;
}

function FormField({ errors, label, touched, ...props }: FormFieldProps) {
  const { name, required } = props;
  const invalid = touched[name] && errors[name] ? { invalid: true } : {};

  return (
    <Styled.Field {...invalid}>
      <label htmlFor={name as string}>
        {label}
        {required && <span>{` *`}</span>}
      </label>
      <Field {...props} />
      <span>{errors[name]}</span>
    </Styled.Field>
  );
}

export function Form() {
  const formEl = useRef<HTMLFormElement>(null);

  const handleFormikFormSubmit = async (
    values: ContactFields,
    _formikHelpers: FormikHelpers<ContactFields>,
  ) => {
    //trick to bypass SFDC's native web-to-lead form integration to use Formik/Yup
    if (formEl && formEl.current) {
      Object.keys(values).forEach((name) => {
        let w2lField: HTMLInputElement | HTMLTextAreaElement;
        if (name === FIELD_MESSAGE_ID_NAME) {
          w2lField = document.createElement('textarea');
        } else {
          w2lField = document.createElement('input');
          w2lField.type = 'text';
        }
        w2lField.name = name;
        w2lField.value = values[name as keyof ContactFields];
        formEl.current!.appendChild(w2lField);
      });
      (formEl.current.submit as unknown as HTMLInputElement).click();
    }
  };

  const handleWebToLeadFormSubmit = (_event: FormEvent<HTMLFormElement>) => {
    pushEvent({
      action: 'generate_lead',
      category: 'engagement',
      name: 'contact_form_submit',
    });
  };

  return (
    <Section>
      <Styled.BackgroundWrapper>
        <Styled.Background fluid />
      </Styled.BackgroundWrapper>
      <Styled.FormContainer>
        <Formik
          initialValues={{
            company: '',
            last_name: '',
            first_name: '',
            email: '',
            mobile: '',
            [FIELD_MESSAGE_ID_NAME]: '',
          }}
          validationSchema={ContactSchema}
          onSubmit={handleFormikFormSubmit}
        >
          {({ errors, handleSubmit, isSubmitting, touched }) => (
            <Styled.Form noValidate onSubmit={handleSubmit}>
              <header>
                <h2>👉&nbsp;Vous avez une question&nbsp;?</h2>
                <p>Contactez-nous, nous vous répondrons dans les plus brefs délais&nbsp;!</p>
              </header>
              <FormField
                errors={errors}
                label="NOM DE LA SOCIÉTÉ"
                maxLength={FIELD_MAX_SIZE_40}
                name="company"
                required
                touched={touched}
                type="text"
              />
              <OneToX columns={2}>
                <FormField
                  errors={errors}
                  label="NOM"
                  maxLength={FIELD_MAX_SIZE_80}
                  name="last_name"
                  required
                  touched={touched}
                  type="text"
                />
                <FormField
                  errors={errors}
                  label="PRÉNOM"
                  maxLength={FIELD_MAX_SIZE_40}
                  name="first_name"
                  required
                  touched={touched}
                  type="text"
                />
                <FormField
                  errors={errors}
                  inputMode="email"
                  label="ADRESSE EMAIL"
                  maxLength={FIELD_MAX_SIZE_80}
                  name="email"
                  required
                  touched={touched}
                  type="email"
                />
                <FormField
                  errors={errors}
                  inputMode="tel"
                  label="TÉLÉPHONE MOBILE"
                  maxLength={FIELD_MAX_SIZE_40}
                  name="mobile"
                  touched={touched}
                  type="tel"
                />
              </OneToX>
              <FormField
                as="textarea"
                errors={errors}
                label="MESSAGE"
                name={FIELD_MESSAGE_ID_NAME}
                rows={5}
                touched={touched}
              />
              <footer>
                <Button color="secondary" disabled={isSubmitting} name="submit" type="submit">
                  Envoyer
                </Button>
              </footer>
            </Styled.Form>
          )}
        </Formik>
        <form
          action={process.env.salesforce}
          method="POST"
          onSubmit={handleWebToLeadFormSubmit}
          ref={formEl}
          style={{ display: 'none' }}
        >
          <input name="oid" type="hidden" value={SFDC_OID} />
          <input name="retURL" type="hidden" value={SFDC_RETURN_URL} />
          <input name="submit" type="submit" value="send" />
        </form>
      </Styled.FormContainer>
    </Section>
  );
}

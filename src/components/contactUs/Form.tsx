import { Field, Formik } from 'formik';
import type { FieldAttributes, FormikErrors, FormikHelpers, FormikTouched } from 'formik';
import { useRouter } from 'next/router';
import * as Yup from 'yup';
import { Button, OneToX, Section } from '@/components/ui';
import { pushEvent } from '@/libs/google';
import * as Styled from './styled';

const FIELD_MAX_SIZE_80 = 80;
const FIELD_MAX_SIZE_40 = 40;
const MESSAGE_FIELD_ID = '00N0900000IntABEAZ';
const REQUIRED_ERROR = 'Veuillez renseigner ce champ';
const TOO_LONG_ERROR = 'caractères maximum';

type ContactFields = {
  company: string;
  last_name: string;
  first_name: string;
  email: string;
  mobile: string;
  [MESSAGE_FIELD_ID]: string;
};

const ContactSchema = Yup.object().shape({
  company: Yup.string()
    .max(FIELD_MAX_SIZE_40, `${FIELD_MAX_SIZE_40} ${TOO_LONG_ERROR}`)
    .required(REQUIRED_ERROR),
  first_name: Yup.string()
    .max(FIELD_MAX_SIZE_40, `${FIELD_MAX_SIZE_40} ${TOO_LONG_ERROR}`)
    .required(REQUIRED_ERROR),
  last_name: Yup.string()
    .max(FIELD_MAX_SIZE_80, `${FIELD_MAX_SIZE_80} ${TOO_LONG_ERROR}`)
    .required(REQUIRED_ERROR),
  email: Yup.string()
    .max(FIELD_MAX_SIZE_80, `${FIELD_MAX_SIZE_80} ${TOO_LONG_ERROR}`)
    .email('Adresse email invalide')
    .required(REQUIRED_ERROR),
  mobile: Yup.string().max(FIELD_MAX_SIZE_40, `${FIELD_MAX_SIZE_40} ${TOO_LONG_ERROR}`),
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
      <label htmlFor={name}>
        {label}
        {required && <span>{` *`}</span>}
      </label>
      <Field {...props} />
      <span>{errors[name]}</span>
    </Styled.Field>
  );
}

export function Form() {
  const { push } = useRouter();

  const handleFormSubmit = async (
    values: ContactFields,
    _formikHelpers: FormikHelpers<ContactFields>,
  ) => {
    const formData = new FormData();
    Object.keys(values).forEach((name) => {
      formData.append(name, values[name as keyof ContactFields]);
    });
    formData.append('oid', '00D0900000CvkPR');
    formData.append('retURL', 'https://www.appenin.fr/merci');
    try {
      await fetch(process.env.salesForce!, {
        body: formData,
        method: 'POST',
        mode: 'no-cors',
      });
      pushEvent({
        action: 'submit_form',
        category: 'Contact',
      });
      push('/merci');
    } catch (error) {
      console.log(error);
    }
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
            [MESSAGE_FIELD_ID]: '',
          }}
          validationSchema={ContactSchema}
          onSubmit={handleFormSubmit}
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
                name="00N0900000IntABEAZ"
                rows={5}
                touched={touched}
              />
              <footer>
                <Button color="secondary" type="submit" disabled={isSubmitting}>
                  Envoyer
                </Button>
              </footer>
            </Styled.Form>
          )}
        </Formik>
      </Styled.FormContainer>
    </Section>
  );
}

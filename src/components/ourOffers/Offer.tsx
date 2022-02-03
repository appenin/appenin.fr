import Image from 'next/image';
import CheckCircleIcon from '@/assets/icons/check-circle.svg';
import { Section, Spacer, Text } from '@/components/ui';
import * as Styled from './styled';

const BACKGROUND_COLOR = 'var(--colors-backgroundBrandLight)';

export function Offer() {
  return (
    <>
      <Spacer
        style={{
          backgroundColor: BACKGROUND_COLOR,
        }}
      />
      <Section backgroundColor={BACKGROUND_COLOR} block="left">
        <Section.Article>
          <h2>
            Une offre <Text color="secondary">unique</Text>
          </h2>
          <strong>Ce que vous gagnez avec Appenin&nbsp;?</strong>
          <br />
          <br />
          <Styled.OfferItem>
            <CheckCircleIcon />
            <h6>
              Une <strong>expérience client</strong> assurance au top
            </h6>
          </Styled.OfferItem>
          <Styled.OfferItem>
            <CheckCircleIcon />
            <h6>
              Des <strong>revenus additionnels</strong> et récurrents
            </h6>
          </Styled.OfferItem>
          <Styled.OfferItem>
            <CheckCircleIcon />
            <h6>
              Une <strong>intégration simple et rapide</strong> dans vos parcours de vente
            </h6>
          </Styled.OfferItem>
          <Styled.OfferItem>
            <CheckCircleIcon />
            <h6>
              Des <strong>parcours conformes</strong> aux exigences règlementaires (parce que
              l&apos;assurance, c&apos;est du sérieux...)
            </h6>
          </Styled.OfferItem>
          <br />
          <strong>Bonus&nbsp;:</strong> pour les professionnels de l&apos;immobilier, une
          attestation RC locative peut vous être transmise automatiquement à la souscription
          d&apos;une MRH.
        </Section.Article>
        <Section.Figure>
          <Image
            alt="Insurance illustration"
            layout="fill"
            objectFit="cover"
            objectPosition="top"
            priority={false}
            src="/assets/illustrations/insurance.svg"
          />
        </Section.Figure>
      </Section>
      <Spacer
        style={{
          backgroundColor: BACKGROUND_COLOR,
        }}
      />
    </>
  );
}

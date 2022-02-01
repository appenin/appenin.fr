import OpenQuoteIcon from '@/assets/icons/open-quote.svg';
import StarIcon from '@/assets/icons/star.svg';
import { OneToX, Section } from '@/components/ui';
import * as Styled from './styled';

export function Testimonial() {
  return (
    <Section background="tertiary">
      <Section.Container>
        <Section.Header>
          Vos clients sont satisfaits
          <Styled.Stars>
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </Styled.Stars>
        </Section.Header>
        <OneToX columns={3}>
          <Styled.Card>
            <Styled.Figure>
              <OpenQuoteIcon />
            </Styled.Figure>
            <h4>
              Assurance rapide et efficace, la souscription se fait en moins de 5 minutes et les
              explications sont claires, j&apos;ai pu choisir sereinement mon assurance habitation
            </h4>
          </Styled.Card>
          <Styled.Card>
            <Styled.Figure>
              <OpenQuoteIcon />
            </Styled.Figure>
            <h4>
              Je suis très satisfait des services reçus&nbsp;: un très bon rapport qualité-prix et
              une équipe support pragmatique, je recommande&nbsp;!
            </h4>
          </Styled.Card>
          <Styled.Card>
            <Styled.Figure>
              <OpenQuoteIcon />
            </Styled.Figure>
            <h4>
              Super réactivité dans le traitement de mon dégât des eaux, les différentes étapes
              étaient bien expliquées et j&apos;ai rapidement été remboursé
            </h4>
          </Styled.Card>
        </OneToX>
      </Section.Container>
    </Section>
  );
}

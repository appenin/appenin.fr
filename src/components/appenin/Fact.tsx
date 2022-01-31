import AwardRibbonStarIcon from '@/assets/icons/award-ribbon-star.svg';
import CheckCircleIcon from '@/assets/icons/check-circle.svg';
import FlagStarIcon from '@/assets/icons/flag-star.svg';
import HandshakeCircleIcon from '@/assets/icons/handshake-circle.svg';
import { Card, OneToX, Section } from '@/components/ui';
import * as Styled from './styled';

export function Fact() {
  return (
    <Section>
      <Styled.BackgroundWrapper>
        <Styled.Background fluid />
      </Styled.BackgroundWrapper>
      <Styled.FactContainer>
        <Section.Header>Nos valeurs</Section.Header>
        <OneToX columns={2}>
          <Card background="primary" rounded shadow>
            <header>
              <Styled.Figure color="yellow">
                <HandshakeCircleIcon />
              </Styled.Figure>
              <h3>Un partenariat basé sur la confiance</h3>
            </header>
            <p>
              Nous avons à coeur de bâtir des partenariats durables reposant sur des relations de
              confiance pour construire ensemble un partenariat pérenne et fructueux.
            </p>
          </Card>
          <Card background="primary" rounded shadow>
            <header>
              <Styled.Figure color="orange">
                <AwardRibbonStarIcon />
              </Styled.Figure>
              <h3>Excellence et simplicité</h3>
            </header>
            <p>
              La satisfaction client est notre priorité. Nous tenons à offrir des garanties solides,
              délivrées avec une expérience utilisateur fluide et chaleureuse. Nos produits sont
              simples à comprendre, simples à vendre et simples à utiliser.
            </p>
          </Card>
          <Card background="primary" rounded shadow>
            <header>
              <Styled.Figure color="pink">
                <CheckCircleIcon />
              </Styled.Figure>
              <h3>Accessibilité et flexibilité</h3>
            </header>
            <p>
              Nous simplifions l&apos;accès à l&apos;assurance pour les distributeurs qui ne sont
              pas assureurs. Nos équipes vous accompagnent dans la mise en marché et nos assurances
              responsables se souscrivent en quelques clics.
            </p>
          </Card>
          <Card background="primary" rounded shadow>
            <header>
              <Styled.Figure color="lightGreen">
                <FlagStarIcon />
              </Styled.Figure>
              <h3>Fierté &amp; engagement</h3>
            </header>
            <p>
              L&apos;assurance est une affaire sérieuse et la promesse s&apos;exprime lors du
              sinistre. Nous mettons toute notre énergie à concevoir des produits responsables qui
              nous inspirent beaucoup de fierté... Nous bichonnons vos clients, comme des amis.
            </p>
          </Card>
        </OneToX>
      </Styled.FactContainer>
    </Section>
  );
}

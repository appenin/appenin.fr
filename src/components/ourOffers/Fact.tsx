import AwardTrophyIcon from '@/assets/icons/award-trophy.svg';
import GraphStatsAscendIcon from '@/assets/icons/graph-stats-ascend.svg';
import IrisScanApprovedIcon from '@/assets/icons/iris-scan-approved.svg';
import ModuleFourIcon from '@/assets/icons/module-four.svg';
import { Card, OneToX, Section } from '@/components/ui';
import * as Styled from './styled';

export function Fact() {
  return (
    <Section>
      <Styled.BackgroundWrapper>
        <Styled.Background fluid />
      </Styled.BackgroundWrapper>
      <Styled.FactContainer>
        <Section.Header>On s&apos;occupe de tout&nbsp;😎</Section.Header>
        <OneToX columns={2}>
          <Card background="primary" rounded shadow>
            <header>
              <Styled.Figure color="darkGreen">
                <GraphStatsAscendIcon />
              </Styled.Figure>
              <h3>Leviers de croissance</h3>
            </header>
            <p>
              Constituez un portefeuille de clients qui vous génère des revenus récurrents, à
              moindre efforts.
            </p>
          </Card>
          <Card background="primary" rounded shadow>
            <header>
              <Styled.Figure color="brand">
                <AwardTrophyIcon />
              </Styled.Figure>
              <h3>Différenciation</h3>
            </header>
            <p>
              Proposez des produits avec des garanties robustes, des conditions générales claires et
              une gestion de sinistre fiable.
            </p>
          </Card>
          <Card background="primary" rounded shadow>
            <header>
              <Styled.Figure color="lightGreen">
                <ModuleFourIcon />
              </Styled.Figure>
              <h3>Plug &amp; Play</h3>
            </header>
            <p>
              Nos API sont faciles à intégrer et à utiliser, et en plus, si vous en avez besoin, nos
              experts vous accompagnent.
            </p>
          </Card>
          <Card background="primary" rounded shadow>
            <header>
              <Styled.Figure color="darkGreen">
                <IrisScanApprovedIcon />
              </Styled.Figure>
              <h3>Visibilité</h3>
            </header>
            <p>
              Selon vos besoins, exposez les produits en marque blanche ou co branding, activez nos
              kits de communication,...
            </p>
          </Card>
        </OneToX>
      </Styled.FactContainer>
    </Section>
  );
}

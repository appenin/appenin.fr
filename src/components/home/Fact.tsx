import CheckCircleIcon from '@/assets/icons/check-circle.svg';
import { OneToX, Section } from '@/components/ui';
import * as Styled from './styled';

export function Fact() {
  return (
    <Section gradient>
      <Section.Container>
        <OneToX columns={3}>
          <Styled.FactCard>
            <CheckCircleIcon />
            <div>
              <h4>100% en ligne</h4>
              <p>
                Avec Appenin, vous distribuez facilement et sereinement de l&apos;assurance 100%
                digitale.
              </p>
            </div>
          </Styled.FactCard>
          <Styled.FactCard>
            <CheckCircleIcon />
            <div>
              <h4>Revenus supplémentaires</h4>
              <p>Vous diversifiez votre activité avec un revenu connexe.</p>
            </div>
          </Styled.FactCard>
          <Styled.FactCard>
            <CheckCircleIcon />
            <div>
              <h4>Clients satisfaits</h4>
              <p>
                Vous fidélisez vos clients grâce à une assurance responsable et une expérience
                fluide.
              </p>
            </div>
          </Styled.FactCard>
        </OneToX>
      </Section.Container>
    </Section>
  );
}

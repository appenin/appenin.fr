import Link from 'next/link';
import HandshakeCircleIcon from '@/assets/icons/handshake-circle.svg';
import HouseIcon from '@/assets/icons/house.svg';
import LegalHammerShieldIcon from '@/assets/icons/legal-hammer-shield.svg';
import Anchor from '@/components/anchor';
import { Card, OneToX, Section } from '@/components/ui';
import * as Styled from './styled';

export function Product() {
  return (
    <Section>
      <Styled.BackgroundWrapper>
        <Styled.Background fluid />
      </Styled.BackgroundWrapper>
      <Section.Container>
        <Section.Header>Une plateforme, plusieurs produits</Section.Header>
        <OneToX columns={3}>
          <Card background="primary" rounded shadow>
            <header>
              <Styled.Figure color="yellow">
                <HouseIcon />
              </Styled.Figure>
              <h3>Habitation</h3>
            </header>
            <p>
              A chaque profil de client, sa solution&nbsp;: locataire d&apos;appartement ou de
              chambre en résidence universitaire, studio d&apos;étudiant, propriétaire de
              maison,&nbsp;...
            </p>
          </Card>
          <Card background="primary" rounded shadow>
            <header>
              <Styled.Figure color="orange">
                <HandshakeCircleIcon />
              </Styled.Figure>
              <h3>PNO</h3>
            </header>
            <p>
              Vos clients sont des bailleurs privés&nbsp;? Notre produit PNO (assurance Propriétaire
              Non Occupant) a été conçu spécialement pour eux.
            </p>
          </Card>
          <Card background="primary" rounded shadow>
            <header>
              <Styled.Figure color="pink">
                <LegalHammerShieldIcon />
              </Styled.Figure>
              <h3>PJ</h3>
            </header>
            <p>
              Litige avec un voisin, un garagiste, un commerçant. Nos juristes experts en
              négociation amiable aident vos clients à démêler leurs tracas du quotidien.
            </p>
          </Card>
        </OneToX>
        <Styled.Footer>
          <Link href="/nos-offres" passHref>
            <Anchor arrow underlined>
              Être informé de l&apos;arrivée de nouveaux produits
            </Anchor>
          </Link>
        </Styled.Footer>
      </Section.Container>
    </Section>
  );
}

import Image from 'next/image';
import OpenQuoteIcon from '@/assets/icons/open-quote.svg';
import EMobiliaLogo from '@/assets/logos/e-mobilia.png';
//import ResideEtudesLogo from '@/assets/logos/reside-etudes.png';
import { Section } from '@/components/ui';
import * as Styled from './styled';

export function Partner() {
  return (
    <>
      <Section>
        <Section.Container>
          <Section.Header css={{ paddingBottom: 0 }}>Ils ont choisi Appenin</Section.Header>
        </Section.Container>
      </Section>
      <Section block="right" fluid>
        <Section.Figure>
          <Styled.Partner>
            <Image alt="Rentila logo" height={31.75} src="/assets/logos/rentila.svg" width={105} />
            <br />
            <p>
              <OpenQuoteIcon
                style={{ display: 'inline', marginRight: '0.5rem', verticalAlign: 'baseline' }}
              />
              Le partenariat avec Appenin nous permet d&apos;étoffer notre offre de services en
              proposant une brique qui nous manquait, l&apos;assurance. Ainsi nous arrivons à encore
              mieux servir nos utilisateurs et avoir un flux de revenu supplémentaire.
              L&apos;intégration de l&apos;API s&apos;est faite en quelques jours.
            </p>
            <strong>???</strong>
            <br />
            ???
            <br />
            <br />
            <Image
              alt="Sogexia logo"
              height={38.43}
              src="/assets/logos/sogexia.svg"
              width={131.17}
            />
            <p>
              <OpenQuoteIcon
                style={{ display: 'inline', marginRight: '0.5rem', verticalAlign: 'baseline' }}
              />
              Pour nos clients, une valeur additionnelle forte avec un produit de qualité. Pour
              Sogexia, une diversification pérenne grâce à un partenaire robuste, simple à déployer.
            </p>
            <strong>Kilian Füg</strong>
            <br />
            CEO / Directeur Général
            <br />
            <br />
            <Image src={EMobiliaLogo} alt="E-Mobilia logo" />
            <p>
              <OpenQuoteIcon
                style={{ display: 'inline', marginRight: '0.5rem', verticalAlign: 'baseline' }}
              />
              La solution proposée par Appenin correspond totalement aux besoins du client et aux
              attentes du marché d&apos;un point de vue expérience client et parcours digital. Les
              équipes d&apos;Appenin ont compris notre organisation et continuent de nous
              accompagner dans ce déploiement auprès de nos clients utilisateurs et dans notre
              réseau E-Mobilia.
            </p>
            <strong>Lionel Faure</strong>
            <br />
            Directeur Commercial E-Mobilia - Demeco Group
            <br />
            <br />
            <Image alt="" height={60} src="/assets/none.svg" width="240" />
            <p>
              <OpenQuoteIcon
                style={{ display: 'inline', marginRight: '0.5rem', verticalAlign: 'baseline' }}
              />
              Solution rapide et efficace qui séduit les étudiants par sa simplicité
              d&apos;adhésion, son offre complète, son prix et son design. L&apos;équipe Appenin est
              très accessible et à l&apos;écoute des besoins.
            </p>
            <strong>Linda Merabet</strong>
            <br />
            Responsable de résidence étudiante
          </Styled.Partner>
        </Section.Figure>
      </Section>
    </>
  );
}

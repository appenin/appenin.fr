import Image from 'next/image';
import OpenQuoteIcon from '@/assets/icons/open-quote.svg';
import EMobiliaLogo from '@/assets/logos/e-mobilia.png';
import OdalysCampusLogo from '@/assets/logos/odalys-campus.jpg';
import Carousel from '@/components/carousel';
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
          <Carousel>
            <Styled.Slide>
              <figure>
                <Image alt="Rentila" height={30.24} src="/assets/logos/rentila.svg" width={100} />
              </figure>
              <p>
                <OpenQuoteIcon />
                Le partenariat avec Appenin nous permet d&apos;étoffer notre offre de services en
                proposant une brique qui nous manquait, l&apos;assurance. Ainsi nous arrivons à
                encore mieux servir nos utilisateurs et avoir un flux de revenu supplémentaire.
                L&apos;intégration de l&apos;API s&apos;est faite en quelques jours.
              </p>
              <footer>
                <strong>Roumen Gueorguiev</strong>
                Cofondateur et CEO de Rentila
              </footer>
            </Styled.Slide>
            <Styled.Slide>
              <figure>
                <Image alt="Sogexia" height={29.3} src="/assets/logos/sogexia.svg" width={100} />
              </figure>
              <p>
                <OpenQuoteIcon />
                Pour nos clients, une valeur additionnelle forte avec un produit de qualité. Pour
                Sogexia, une diversification pérenne grâce à un partenaire robuste, simple à
                déployer.
              </p>
              <footer>
                <strong>Kilian Füg</strong>
                CEO / Directeur Général de Sogexia
              </footer>
            </Styled.Slide>
            <Styled.Slide>
              <figure>
                <Image alt="E-Mobilia" height={30} src={EMobiliaLogo} width={100} />
              </figure>
              <p>
                <OpenQuoteIcon />
                La solution proposée par Appenin correspond totalement aux besoins du client et aux
                attentes du marché d&apos;un point de vue expérience client et parcours digital. Les
                équipes d&apos;Appenin ont compris notre organisation et continuent de nous
                accompagner dans ce déploiement auprès de nos clients utilisateurs et dans notre
                réseau E-Mobilia.
              </p>
              <footer>
                <strong>Lionel Faure</strong>
                Directeur Commercial E-Mobilia - Demeco Group
              </footer>
            </Styled.Slide>
            <Styled.Slide>
              <figure>
                <Image alt="Greystar" height={32.05} src="/assets/logos/greystar.svg" width={100} />
              </figure>
              <p>
                <OpenQuoteIcon />
                Solution rapide et efficace qui séduit les étudiants par sa simplicité
                d&apos;adhésion, son offre complète, son prix et son design. L&apos;équipe Appenin
                est très accessible et à l&apos;écoute des besoins.
              </p>
              <footer>
                <strong>Linda Merabet</strong>
                Responsable de résidence étudiante
              </footer>
            </Styled.Slide>
            <Styled.Slide>
              <figure>
                <Image alt="Odalys campus" height={39} src={OdalysCampusLogo} width={100} />
              </figure>
              <p>
                <OpenQuoteIcon />
                La solution APPENIN nous a permis de pouvoir répondre à un besoin immédiat de nos
                futurs résidents, la rapidité du process et sa digitalisation s&apos;inscrivent dans
                une volonté de dématérialisation des documents, nos équipes sont enchantées de ce
                service qui permet une gestion optimale des dossiers, de surcroit nous entourer
                d&apos;un partenariat dans un esprit start-up nous convient parfaitement puisque
                cela correspond aux valeurs d&apos;innovation et d&apos;agilité de notre Groupe.
              </p>
              <footer>
                <strong>James Galland</strong>
                Directeur Général Odalys Campus
              </footer>
            </Styled.Slide>
          </Carousel>
        </Section.Figure>
      </Section>
    </>
  );
}

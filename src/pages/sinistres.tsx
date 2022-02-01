import Head from 'next/head';
import type { NextPage } from 'next';
import Footer from '@/components/footer';
import Group from '@/components/group';
import Header from '@/components/header';
import { ContentText, Section, Text } from '@/components/ui';

export default function Claims(_props: NextPage) {
  return (
    <>
      <Head>
        <title>Sinistres - Appenin</title>
        <meta name="description" content="" />
      </Head>
      <Header />
      <main>
        <Section>
          <Section.Container>
            <ContentText>
              <Section.Header>J’ai subi un sinistre&nbsp;!</Section.Header>
              <strong>Mes deux priorités&nbsp;:</strong>
              <br />
              <br />
              <ul style={{ listStyle: 'inside disc' }}>
                <li>
                  vous assurer que la situation n&apos;empire pas (un robinet qui fuit&nbsp;? mettez
                  une casserole dessous&nbsp;!)&nbsp;;
                </li>
                <li>
                  nous prévenir&nbsp;: par email{' '}
                  <a href="mailto:sinistres@appenin.fr">sinistres@appenin.fr</a>, ou par
                  téléphone&nbsp;: 01&nbsp;83&nbsp;62&nbsp;51&nbsp;71.
                </li>
              </ul>
              <br />
              <strong>Avec qui vais-je échanger&nbsp;?</strong>
              <br />
              <br />
              Soit directement avec nous, Appenin, soit avec notre partenaire (votre assureur MMA,
              ou votre gestionnaire Stelliant). Si vous échangez avec l’un de nos partenaires, nous
              en serons informés pour pouvoir suivre votre dossier.
              <br />
              <br />
              Nos équipes sont des professionnels spécialisés. Il est donc possible que votre
              premier interlocuteur identifie un collègue mieux placé pour vous répondre et vous
              mette en relation avec lui. Passée cette première étape, nous nous efforçons que vous
              ayez toujours le même interlocuteur.
              <br />
              <br />
              <strong>Que va faire mon interlocuteur ?</strong>
              <br />
              <br />
              Dès que nous aurons vérifié que vous êtes bien assuré chez nous, nous dialoguerons
              avec vous pour (1) voir si vous avez un besoin immédiat d’assistance, (2) comprendre
              les circonstances de l’événement, et (3) identifier les dommages que vous avez subi.
              <br />
              <br />A partir de ces informations, nous pourrons :<br />
              <br />
              <ul style={{ listStyle: 'inside disc' }}>
                <li>vous confirmer votre prise en charge,</li>
                <li>
                  et mandater un expert pour mieux apprécier les conséquences du sinistre, ainsi que
                  le contexte et les besoins associés,
                </li>
                <li>ou bien vous proposer directement une indemnisation.</li>
              </ul>
              <br />
              <strong>Comment vais-je être indemnisé ?</strong>
              <br />
              <br />
              Selon votre situation, nous pourrons vous proposer différentes modalités
              d’indemnisation :<br />
              <br />
              <ul style={{ listStyle: 'inside disc' }}>
                <li>
                  classiquement, nous pouvons vous laisser faire effectuer les réparations
                  nécessaires puis, sur justificatif, vous rembourser le montant d’indemnités prévu,
                </li>
                <li>
                  selon les circonstances, nous pouvons également vous proposer de faire directement
                  effectuer les réparations par nos soins,
                </li>
                <li>
                  dans certains cas, nous pouvons également vous proposer une indemnité forfaitaire,
                  si vous souhaitez effectuer vous-même les réparations si besoin.
                </li>
              </ul>
              Attention, dans certains cas, une franchise est appliquée. Il s’agit d’une somme qui
              reste à votre charge, et est donc déduite de l’indemnité qui vous est versée.
              <br />
              <br />
              <strong>Dois-je avoir des documents avec moi ?</strong>
              <br />
              <br />
              Lorsque vous nous appelez, essayez de vous munir de votre numéro de contrat (vous le
              trouverez notamment sur votre attestation et sur vos Conditions Particulières, que
              nous vous avons envoyées lors de la souscription). Cela nous permettra de vous
              répondre plus rapidement !
              <br />
              <br />
              Si vous avez subi des dégradations, des objets volés, etc. essayez de vous munir de
              toute pièce permettant de justifier de cet objet et de son état avant/après (facture,
              photo…).
              <br />
              <br />
              En cas de vol, nous vous demanderons de nous faire parvenir votre déclaration de vol.
              <br />
              <br />
              <strong>Pourquoi dois-je prouver mon identité pour recevoir l’indemnisation ?</strong>
              <br />
              <br />
              Les assureurs responsables doivent respecter la réglementation sur la lutte contre le
              blanchiment et le financement du terrorisme. Par conséquent, nous devons toujours
              effectuer des vérifications avant d’effectuer un versement, par exemple pour vérifier
              que le destinataire ne figure pas sur des listes établies par les autorités de
              personnes demandant une vigilance accrue ou une déclaration systématique.
              <br />
              <br />
              Ceci nous impose deux contraintes : (1) vérifier votre identité avant tout versement
              sur votre compte, et (2) effectuer votre versement uniquement sur un compte situé en
              Europe (donc géré par un acteur bancaire respectant également la réglementation
              européenne).
            </ContentText>
          </Section.Container>
        </Section>
        <Group />
      </main>
      <Footer />
    </>
  );
}

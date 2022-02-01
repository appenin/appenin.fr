import Image from 'next/image';
import EMobiliaLogo from '@/assets/logos/e-mobilia.png';
import PartnersFinancesLogo from '@/assets/logos/partners-finances.svg';
import PichetLogo from '@/assets/logos/pichet.svg';
import RentilaLogo from '@/assets/logos/rentila.svg';
import ResideEtudesLogo from '@/assets/logos/reside-etudes.png';
import SogexiaLogo from '@/assets/logos/sogexia.svg';
import { Section, XtoOne } from '@/components/ui';
import * as Styled from './styled';

export function Trust() {
  return (
    <Section>
      <Styled.TrustContainer>
        <Styled.TrustHeader>Ils nous font confiance</Styled.TrustHeader>
        <XtoOne columns={2}>
          <PichetLogo />
          <SogexiaLogo />
          <Image alt="E-Mobilia" height={30} src={EMobiliaLogo} width={100} />
          <RentilaLogo />
          <PartnersFinancesLogo />
          {/*<Image alt="Réside Etudes" height={27} src={ResideEtudesLogo} width={100} />*/}
        </XtoOne>
      </Styled.TrustContainer>
    </Section>
  );
}

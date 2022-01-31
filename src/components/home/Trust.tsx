import PartnersFinancesLogo from '@/assets/logos/partners-finances.svg';
import PichetLogo from '@/assets/logos/pichet.svg';
import RentilaLogo from '@/assets/logos/rentila.svg';
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
          {/*<p>[E-Mobilia]</p>*/}
          <RentilaLogo />
          <PartnersFinancesLogo />
          {/*<p>[Réside Études]</p>*/}
        </XtoOne>
      </Styled.TrustContainer>
    </Section>
  );
}

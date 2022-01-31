import CoveaLogo from '@/assets/logos/covea.svg';
import GMFLogo from '@/assets/logos/gmf.svg';
import MAAFLogo from '@/assets/logos/maaf.svg';
import MMALogo from '@/assets/logos/mma.svg';
import { Section, Spacer, XtoOne } from '@/components/ui';
import * as Styled from './styled';

export function Group() {
  return (
    <>
      <Spacer />
      <Section gradient>
        <Styled.Group>
          <Styled.GroupHeader>Vous êtes entre de bonnes mains</Styled.GroupHeader>
          <XtoOne columns={2}>
            <CoveaLogo />
            <MAAFLogo />
            <MMALogo />
            <GMFLogo />
          </XtoOne>
        </Styled.Group>
      </Section>
    </>
  );
}

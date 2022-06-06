import Image from 'next/image';
import { Section } from '@/components/ui';
import * as Styled from './styled';

export function Covea() {
  return (
    <Section>
      <Styled.Covea>
        <Styled.CoveaHeader>Vous êtes entre de bonnes mains</Styled.CoveaHeader>
        <figure>
          <Image
            alt="Groupe Covéa"
            height={97}
            layout="intrinsic"
            priority={true}
            src="/assets/logos/covea-group.svg"
            width={367}
          />
        </figure>
      </Styled.Covea>
    </Section>
  );
}

import Image from 'next/image';
import { Section, Spacer } from '@/components/ui';
import * as Styled from './styled';

export function Group() {
  return (
    <>
      <Spacer />
      <Section gradient>
        <Styled.Group>
          <Styled.GroupHeader>Vous êtes entre de bonnes mains</Styled.GroupHeader>
          <figure>
            <Image
              alt="Groupe Covéa"
              layout="fill"
              objectFit="contain"
              objectPosition="left"
              priority={true}
              src="/assets/logos/covea-group-white.svg"
            />
          </figure>
        </Styled.Group>
      </Section>
    </>
  );
}

import { Section, Text } from '@/components/ui';
import * as Styled from './styled';

export function Team() {
  return (
    <Section>
      <Styled.TeamWrapper />
      <Section.Container>
        <Section.Header>
          Rencontrez <Text color="secondary">notre équipe</Text>
        </Section.Header>
        <div style={{ textAlign: 'center' }}>[TODO]</div>
      </Section.Container>
    </Section>
  );
}

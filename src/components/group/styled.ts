import { Container } from '@/components/ui/styled';
import { styled } from '@/styles';

export const Group = styled(Container, {
  '@md': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export const GroupHeader = styled('h3', {
  color: '$textTertiary',
  paddingBottom: '$8',
  '@md': {
    paddingBottom: 0,
  },
});

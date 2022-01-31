import { Card as StyledCard } from '@/components/ui';
import { styled } from '@/styles';

export const Card = styled(StyledCard, {
  paddingTop: 0,
  paddingBottom: 0,
  textAlign: 'center',
  '& > p': {
    fontWeight: '$medium',
  },
});

export const Stars = styled('figure', {
  display: 'flex',
  justifyContent: 'center',
  gap: '$1',
  paddingTop: '$6',
  color: 'hsl($niagara)',
});

export const Figure = styled('figure', {
  margin: '0 auto',
});

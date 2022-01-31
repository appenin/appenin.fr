import { styled } from '@/styles';

export const Partner = styled('div', {
  minHeight: 144,
  borderRadius: '$5px',
  boxShadow: '$default',
  backgroundColor: '$backgroundPrimary',
  padding: '$8',
  '@md': {
    padding: '$12',
  },
});

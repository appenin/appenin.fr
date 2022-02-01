import { Container } from '@/components/ui/styled';
import { styled } from '@/styles';

export const Group = styled(Container, {
  display: 'flex',
  flexDirection: 'column',
  '& > figure': {
    position: 'relative',
    flex: 1,
    minHeight: 90,
    '& img': {
      '@sm': {
        objectPosition: 'right!important',
      },
    },
  },
  '@sm': {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export const GroupHeader = styled('h3', {
  color: '$textTertiary',
  paddingBottom: '$8',
  '@sm': {
    paddingBottom: 0,
  },
});

import { Container } from '@/components/ui/styled';
import { styled } from '@/styles';

export const Logo = styled('a', {
  position: 'relative',
  display: 'block',
  outline: 'none',
  height: 36,
  width: 114,
  marginBottom: '$2',
  '&:focus': {
    borderRadius: '$5px',
    boxShadow: '$outline',
  },
  '@md': {
    height: 71,
    width: 224.83,
    marginBottom: '$6',
  },
});

export const Catchphrase = styled('h5', {
  color: 'hsl($blueStone)',
  fontWeight: '$semibold',
  fontSize: '$4',
  '@md': {
    fontSize: '$5',
  },
});

export const Footer = styled(Container, {
  marginBottom: '$26',
  '& a': {
    '&:hover,&:focus': {
      cursor: 'pointer',
      textDecoration: 'underline',
    },
  },
  '@sm': {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 0,
  },
});

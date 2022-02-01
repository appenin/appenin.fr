import { Container } from '@/components/ui/styled';
import { styled } from '@/styles';

export const Logo = styled('a', {
  position: 'relative',
  display: 'block',
  outline: 'none',
  height: 36,
  width: 114,
  marginBottom: '$8',
  '&:focus': {
    borderRadius: '$5px',
    boxShadow: '$outline',
  },
  '@md': {
    height: 48,
    width: 152,
    marginBottom: 0,
  },
});

export const Footer = styled(Container, {
  marginBottom: '$26',
  '& a': {
    '&:hover,&:focus': {
      textDecoration: 'underline',
    },
  },
  '@sm': {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 0,
  },
});

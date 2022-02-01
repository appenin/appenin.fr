import { Container, Section } from '@/components/ui/styled';
import { styled } from '@/styles';

export const BackgroundWrapper = styled(Section, {
  position: 'absolute',
  height: '$full',
  '&::before': {
    content: '',
    position: 'absolute',
    top: '$8',
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: '$backgroundBrandLight',
    '@md': {
      top: '12rem',
    },
  },
});

export const Background = styled(Container, {
  position: 'relative',
  display: 'none',
  height: '$full',
  '&::after': {
    content: '',
    position: 'absolute',
    top: 0,
    right: -130,
    height: 380,
    width: 351.8,
    backgroundImage: 'url(/assets/illustrations/businessman-card.svg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  '@md': {
    display: 'block',
  },
});

export const FormContainer = styled(Container, {
  marginTop: '$8',
  '@md': {
    marginTop: '12rem',
  },
});

export const Form = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$6',
  borderRadius: '$5px',
  boxShadow: '$default',
  backgroundColor: '$backgroundPrimary',
  padding: '$8',
  '& > header,& > footer': {
    textAlign: 'center',
  },
  '& > header': {
    display: 'flex',
    flexDirection: 'column',
    gap: '$3',
    paddingBottom: '$8',
  },
  '@md': {
    padding: '$12',
  },
});

export const Field = styled('div', {
  paddingBottom: '$3',
  '& > *': {
    display: 'block',
    width: '$full',
  },
  '& > label': {
    paddingBottom: '$3',
    '& > span': {
      color: 'hsl($mandy)',
      fontWeight: '$medium',
    },
  },
  '& > input, & > textarea': {
    padding: '$3',
    backgroundColor: '$backgroundBrandLight',
    borderColor: '$backgroundBrandLight',
    borderWidth: '$1px',
    outline: 'none',
    '&:hover,&:focus': {
      borderColor: 'hsl($brand)',
    },
  },
});

export const Figure = styled('figure', {
  display: 'inline-block',
  borderRadius: '$full',
  padding: '$2',
  variants: {
    color: {
      orange: {
        backgroundColor: 'hsl($atomicTangerine/0.1)',
        color: 'hsl($atomicTangerine);',
      },
      pink: {
        backgroundColor: 'hsl($brinkPink/0.1)',
        color: 'hsl($brinkPink);',
      },
      yellow: {
        backgroundColor: 'hsl($sunglow/0.1)',
        color: 'hsl($sunglow);',
      },
    },
  },
});

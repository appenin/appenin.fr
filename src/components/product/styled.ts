import { Container, Section } from '@/components/ui/styled';
import { styled } from '@/styles';

export const BackgroundWrapper = styled(Section, {
  position: 'absolute',
  display: 'none',
  height: '$full',
  '@md': {
    display: 'block',
  },
});

export const Background = styled(Container, {
  position: 'relative',
  height: '$full',
  '&::before': {
    content: '',
    position: 'absolute',
    bottom: -450,
    left: -325,
    height: 720,
    width: 720,
    backgroundImage:
      'linear-gradient(to bottom,hsl($gradientPrimaryStart),hsl($gradientPrimaryStop/0) 70%)',
    borderRadius: '$full',
    opacity: 0.3,
  },
  '&::after': {
    content: '',
    position: 'absolute',
    top: '4rem',
    left: -90,
    height: 374,
    width: 220,
    backgroundImage: 'url(/assets/illustrations/woman-umbrella.svg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
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

export const Footer = styled('footer', {
  paddingTop: '$8',
  textAlign: 'center',
  '@md': {
    paddingTop: '$12',
  },
});

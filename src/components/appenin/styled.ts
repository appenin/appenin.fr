import { Container, Section } from '@/components/ui/styled';
import { styled } from '@/styles';

export const TeamWrapper = styled(Section, {
  position: 'absolute',
  height: '$full',
  '&::before': {
    content: '',
    position: 'absolute',
    inset: 0,
    backgroundImage:
      'linear-gradient(to bottom,hsl($gradientPrimaryStart) 1%,hsl($gradientPrimaryStart/0) 99%)',
    opacity: 0.03,
  },
});

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
    backgroundImage:
      'linear-gradient(to bottom,hsl($gradientPrimaryStart) 1%,hsl($gradientPrimaryStart/0) 99%)',
    opacity: 0.03,
    '@md': {
      top: '6rem',
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
    height: 346.8,
    width: 380,
    backgroundImage: 'url(/assets/illustrations/girl-power.svg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  '@md': {
    display: 'block',
  },
});

export const FactContainer = styled(Container, {
  marginTop: '$8',
  '@md': {
    marginTop: '6rem',
  },
});

export const Figure = styled('figure', {
  display: 'inline-block',
  borderRadius: '$full',
  padding: '$2',
  variants: {
    color: {
      brand: {
        backgroundColor: 'hsl($brand/0.1)',
        color: 'hsl($brand);',
      },
      darkGreen: {
        backgroundColor: 'hsl($blueStone/0.1)',
        color: 'hsl($blueStone);',
      },
      lightGreen: {
        backgroundColor: 'hsl($niagara/0.1)',
        color: 'hsl($niagara);',
      },
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

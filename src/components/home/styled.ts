import Carousel, { CarouselItem } from '@/components/carousel';
import { Container, Section } from '@/components/ui/styled';
import { styled } from '@/styles';

export const BackgroundWrapper = styled(Section, {
  position: 'absolute',
  display: 'none',
  top: 0,
  '@md': {
    display: 'block',
  },
});

export const Background = styled(Container, {
  position: 'relative',
  height: 450,
  '&::before': {
    content: '',
    position: 'absolute',
    top: -290,
    right: -200,
    height: 650,
    width: 650,
    backgroundImage:
      'linear-gradient(45deg, hsl($gradientPrimaryStart/0), hsl($gradientPrimaryStart) 50%)',
    borderRadius: '$full',
    opacity: 0.1,
  },
  '&::after': {
    content: '',
    position: 'absolute',
    top: 270,
    right: 0,
    height: 180,
    width: 180,
    backgroundImage:
      'linear-gradient(to right, hsl($gradientPrimaryStop/0), hsl($gradientPrimaryStop))',
    borderRadius: '$full',
    opacity: 0.1,
  },
});

export const Hero = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  article: {
    display: 'flex',
    flexDirection: 'column',
    gap: '$8',
    h1: {
      fontSize: '$12',
      fontWeight: '$bold',
    },
    h3: {
      fontWeight: '$medium',
    },
    footer: {
      display: 'flex',
      flexDirection: 'column-reverse',
      gap: '$3',
      '& > button': {
        '@sm': {
          width: '$half',
          whiteSpace: 'nowrap',
        },
      },
      '@sm': {
        flexDirection: 'row',
      },
    },
    '@md': {
      gap: '$12',
      marginLeft: '$12',
    },
  },
  figure: {
    position: 'relative',
    display: 'none',
    aspectRatio: '4/3',
    '@sm': {
      display: 'block',
    },
  },
  '@sm': {
    gap: '$8',
    '& > *': {
      width: '$half',
    },
  },
});

export const Covea = styled(Container, {
  display: 'flex',
  flexDirection: 'column',
  paddingTop: '0!important',
  '& > figure': {
    position: 'relative',
    flex: 1,
    minHeight: 97,
    '@sm': {
      textAlign: 'right',
    },
  },
  '@sm': {
    flexDirection: 'row',
    alignItems: 'center',
    '> *': {
      width: '50%',
    },
  },
});

export const CoveaHeader = styled('h3', {
  color: '$textSecondary',
  paddingBottom: '$8',
  '@sm': {
    paddingBottom: 0,
  },
});

export const FactCard = styled('article', {
  display: 'flex',
  justifyContent: 'flex-start',
  gap: '$2',
  '& *': {
    color: 'hsl($white)',
  },
  '& > svg': {
    alignSelf: 'baseline',
    flexShrink: 0,
  },
  '& h4': {
    fontWeight: '$bold',
    marginBottom: '$2',
  },
});

export const TrustContainer = styled(Container, {
  '& img,& svg': {
    WebkitFilter: 'grayscale(100%)',
    filter: 'grayscale(1)',
    opacity: 0.4,
  },
  '@md': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export const TrustHeader = styled('h3', {
  display: 'inline-block',
  color: '$textSecondary',
  paddingBottom: '$8',
  '@md': {
    paddingRight: '$6',
    paddingBottom: 0,
  },
});

export const Slider = styled(Carousel, {
  height: '$full',
  '& div, & ul': {
    height: '$full',
  },
});

export const Slide = styled(CarouselItem, {
  position: 'relative',
});

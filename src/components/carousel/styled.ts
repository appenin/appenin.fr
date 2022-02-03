import { CSS, styled } from '@/styles';

export const Wrapper = styled('div', {
  minHeight: 144,
  borderRadius: '$5px',
  boxShadow: '$small',
  backgroundColor: '$backgroundPrimary',
  '& .carousel.carousel-slider': {
    overflow: 'initial',
  },
  '& .slider-wrapper': {
    borderRadius: '$5px',
  },
  '& .carousel .slide': {
    display: 'flex',
    justifyContent: 'center',
  },
});

export const CarouselItem = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
  padding: '$8',
  '@md': {
    padding: '$12',
  },
});

const COMMON_ARROW: CSS = {
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  top: 'calc(50% - 15px)',
  width: 42,
  height: 42,
  backgroundColor: '$backgroundPrimary',
  borderRadius: '$full',
  boxShadow: '$small',
  cursor: 'pointer',
  zIndex: 2,
  '&:hover,&:focus': {
    backgroundColor: 'hsl($brand)',
    color: '$textTertiary',
  },
};

export const ArrowPrevious = styled('button', {
  ...COMMON_ARROW,
  left: -12,
});

export const ArrowNext = styled('button', {
  ...COMMON_ARROW,
  right: -12,
});

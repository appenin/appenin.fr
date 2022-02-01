import { CarouselItem } from '@/components/carousel';
import { styled } from '@/styles';

export const Slide = styled(CarouselItem, {
  '& > p': {
    '& > svg': {
      display: 'inline',
      marginRight: '$3',
      verticalAlign: 'baseline',
    },
  },
  '& > footer': {
    '& > strong': {
      display: 'block',
    },
  },
});

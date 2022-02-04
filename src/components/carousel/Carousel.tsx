import { Carousel as CarouselComponent } from 'react-responsive-carousel';
import type { CarouselProps } from 'react-responsive-carousel';
import ArrowLeftIcon from '@/assets/icons/arrow-left.svg';
import ArrowRightIcon from '@/assets/icons/arrow-right.svg';
import * as Styled from './styled';
import { VariantProps } from '@stitches/react';

function ButtonPrevious(onClickHandler: () => void, hasPrev: boolean, _label: string) {
  return (
    hasPrev && (
      <Styled.ArrowPrevious type="button" onClick={onClickHandler} title="Précédent">
        <ArrowLeftIcon />
      </Styled.ArrowPrevious>
    )
  );
}

function ButtonNext(onClickHandler: () => void, hasNext: boolean, _label: string) {
  return (
    hasNext && (
      <Styled.ArrowNext type="button" onClick={onClickHandler} title="Suivant">
        <ArrowRightIcon />
      </Styled.ArrowNext>
    )
  );
}

export function Carousel({
  autoPlay = true,
  infiniteLoop = true,
  interval = 6000,
  showIndicators = false,
  showStatus = false,
  showThumbs = false,
  transitionTime = 400,
  transparent = false,
  children,
  ...props
}: Partial<CarouselProps> & VariantProps<typeof Styled.Wrapper>) {
  return (
    <Styled.Wrapper transparent={transparent}>
      <CarouselComponent
        autoPlay={autoPlay}
        infiniteLoop={infiniteLoop}
        interval={interval}
        showIndicators={showIndicators}
        showStatus={showStatus}
        showThumbs={showThumbs}
        transitionTime={transitionTime}
        {...props}
        renderArrowNext={ButtonNext}
        renderArrowPrev={ButtonPrevious}
      >
        {children}
      </CarouselComponent>
    </Styled.Wrapper>
  );
}

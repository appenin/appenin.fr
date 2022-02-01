import ArrowLeftIcon from '@/assets/icons/arrow-left.svg';
import ArrowRightIcon from '@/assets/icons/arrow-right.svg';
//https://github.com/leandrowd/react-responsive-carousel
import { Carousel as CarouselComponent } from 'react-responsive-carousel';
import type { CarouselProps } from 'react-responsive-carousel';
import * as Styled from './styled';

function ButtonPrevious(onClickHandler: () => void, hasPrev: boolean, label: string) {
  return (
    hasPrev && (
      <Styled.ArrowPrevious type="button" onClick={onClickHandler} title={label}>
        <ArrowLeftIcon />
      </Styled.ArrowPrevious>
    )
  );
}

function ButtonNext(onClickHandler: () => void, hasNext: boolean, label: string) {
  return (
    hasNext && (
      <Styled.ArrowNext type="button" onClick={onClickHandler} title={label}>
        <ArrowRightIcon />
      </Styled.ArrowNext>
    )
  );
}

export function Carousel({
  autoPlay = true,
  infiniteLoop = true,
  interval = 5000,
  showIndicators = false,
  showStatus = false,
  showThumbs = false,
  transitionTime = 400,
  children,
  ...props
}: Partial<CarouselProps>) {
  return (
    <Styled.Wrapper>
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

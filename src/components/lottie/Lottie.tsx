import { useEffect } from 'react';
import { LottieComponentProps } from './types';
import useLottie from './useLottie';
import useLottieInteractivity from './useLottieInteractivity';

export const Lottie = (props: LottieComponentProps) => {
  const { style, interactivity, ...lottieProps } = props;

  /**
   * Initialize the 'useLottie' hook
   */
  const {
    View,
    play,
    stop,
    pause,
    setSpeed,
    goToAndStop,
    goToAndPlay,
    setDirection,
    playSegments,
    setSubframe,
    getDuration,
    destroy,
    animationContainerRef,
    animationLoaded,
    animationItem,
  } = useLottie(lottieProps, style);

  /**
   * Make the hook variables/methods available through the provided 'lottieRef'
   */
  useEffect(() => {
    if (props.lottieRef) {
      props.lottieRef.current = {
        play,
        stop,
        pause,
        setSpeed,
        goToAndPlay,
        goToAndStop,
        setDirection,
        playSegments,
        setSubframe,
        getDuration,
        destroy,
        animationContainerRef,
        animationLoaded,
        animationItem,
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.lottieRef?.current]);

  if (interactivity) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useLottieInteractivity({
      lottieObj: {
        View,
        play,
        stop,
        pause,
        setSpeed,
        goToAndStop,
        goToAndPlay,
        setDirection,
        playSegments,
        setSubframe,
        getDuration,
        destroy,
        animationContainerRef,
        animationLoaded,
        animationItem,
      },
      ...interactivity,
    });
  }

  return View;
};

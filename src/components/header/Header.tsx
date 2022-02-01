import {
  createRef,
  HTMLAttributes,
  MouseEvent,
  RefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { CSS_BODY_OVERFLOW } from './constants';
import * as Styled from './styled';
import { Logo, Navigation, Sticky, Toggle } from '.';

const rootMargin = '16px 0px 0px';
const threshold = [0, 0.25, 0.5, 0.75, 1];

export type HeaderProps = HTMLAttributes<HTMLElement> & {
  stickyAnchorRef?: RefObject<HTMLElement>;
  withSticky?: boolean;
};

export function Header({ stickyAnchorRef, withSticky = false, ...props }: HeaderProps) {
  const toggleRef = createRef<HTMLButtonElement>();
  const observer = useRef<IntersectionObserver>();
  const rootRef = useRef<HTMLElement>(null);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const handleFocus = useCallback(
    (event: Event) => {
      const bodyOverflowPropertyValue = getComputedStyle(document.body).overflow;
      if (bodyOverflowPropertyValue === 'hidden') {
        if (rootRef.current && event.target && rootRef.current.contains(event.target as Node)) {
        } else {
          if (toggleRef.current) toggleRef.current.focus();
        }
      }
    },
    [toggleRef],
  );

  //focus trap when mobile navigation is open (fullscreen)
  useEffect(() => {
    document.addEventListener('focus', handleFocus, true);
    return () => document.removeEventListener('focus', handleFocus, true);
  }, [handleFocus]);

  //observe element visibility to hide/show the sticky navigation
  useEffect(() => {
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(
      ([entry]) => {
        if (withSticky) setIsSticky(entry.intersectionRatio === 0);
      },
      {
        rootMargin,
        threshold,
      },
    );
    const { current: currentObserver } = observer;

    if (stickyAnchorRef?.current) {
      currentObserver.observe(stickyAnchorRef.current);
    } else if (rootRef.current) {
      currentObserver.observe(rootRef.current);
    }

    return () => currentObserver.disconnect();
  }, [stickyAnchorRef, withSticky]);

  //fix scrollbar when the navigation is open (fullscreen)
  useEffect(() => {
    document.documentElement.style.setProperty(
      CSS_BODY_OVERFLOW,
      isMobileNavOpen ? 'hidden' : 'inherit',
    );
  }, [isMobileNavOpen]);

  const handleClick = (_event: MouseEvent<HTMLButtonElement>) => {
    setIsMobileNavOpen((previousState) => !previousState);
  };

  return (
    <Styled.Wrapper as="section" ref={rootRef}>
      <Styled.Container as="header" {...props}>
        <Logo data-testid="header-logo" />
        <Toggle
          data-testid="header-toggle-button"
          onClick={handleClick}
          open={isMobileNavOpen}
          ref={toggleRef}
        />
        <Navigation data-testid="header-navigation" full={isMobileNavOpen} />
        <Sticky data-testid="header-sticky" visible={isSticky} />
      </Styled.Container>
    </Styled.Wrapper>
  );
}

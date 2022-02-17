import { PropsWithChildren, useLayoutEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { createDialogWrapper } from './helpers';

type ReactPortalProps = PropsWithChildren<{
  wrapperId: string;
}>;

export function ReactPortal({ children, wrapperId }: ReactPortalProps) {
  const [wrapperElement, setWrapperElement] = useState<HTMLElement>();

  useLayoutEffect(() => {
    let element = document.getElementById(wrapperId);
    let systemCreated = false;

    if (!element) {
      element = createDialogWrapper(wrapperId);
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100%';
      systemCreated = true;
    }

    setWrapperElement(element);

    return () => {
      if (systemCreated && element?.parentNode) {
        element.parentNode.removeChild(element);
        document.body.style.removeProperty('overflow');
        document.body.style.removeProperty('height');
      }
    };
  }, [wrapperId]);

  if (!wrapperElement) return null;

  return createPortal(children, wrapperElement);
}

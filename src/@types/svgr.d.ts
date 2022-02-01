import { FC, SVGProps } from 'react';

declare module '*.svg' {
  const ReactComponent: FC<SVGProps<SVGSVGElement>>;
  const content: unknown;

  export { ReactComponent };
  export default content;
}

export {};

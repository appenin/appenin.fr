import type { CSS as StitchesCSS, VariantProps } from '@stitches/react';
export { reset } from './reset';
import Stitches from './stitches.config';
export { SCREENS_MAX_WIDTHS } from './stitches.config';

export const { config, createTheme, css, getCssText, globalCss, keyframes, styled, theme } =
  Stitches;

export type CSS = StitchesCSS<typeof config>;

export type HTMLAttributesWithVariants<Attributes, Styled> = Omit<
  Attributes,
  keyof VariantProps<Styled>
> &
  VariantProps<Styled>;

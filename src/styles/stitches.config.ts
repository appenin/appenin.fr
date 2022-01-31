import { createStitches } from '@stitches/react';

type Token = Record<PropertyKey, string | [string, string]>;

export const SCREENS_MAX_WIDTHS: Token = {
  sm: ['688px', '100%'],
  md: ['992px', '960px'],
  lg: ['1312px', '1140px'],
};

export default createStitches({
  media: {
    //dark: '(prefers-color-scheme: dark)',
    //landscape: '(orientation: landscape)',
    //portrait: '(orientation: portrait)',
    'motion-reduce': '(prefers-reduced-motion: reduce)',
    'motion-safe': '(prefers-reduced-motion: no-preference)',
    ...Object.keys(SCREENS_MAX_WIDTHS).reduce((acc: Token, key) => {
      acc[key] = `(min-width: ${SCREENS_MAX_WIDTHS[key][0]})`;
      return acc;
    }, {}),
  },
  theme: {
    /*
borderStyle
borderTopStyle
borderRightStyle
borderBottomStyle
borderLeftStyle
    */
    borderStyles: {},
    /*
borderWidth
borderTopWidth
borderRightWidth
borderBottomWidth
borderLeftWidth
    */
    borderWidths: {
      '1px': '1px',
    },
    /*
background
backgroundColor
backgroundImage
border
borderBlock
borderBlockEnd
borderBlockStart
borderBottom
borderBottomColor
borderColor
borderInline
borderInlineEnd
borderInlineStart
borderLeft
borderLeftColor
borderRight
borderRightColor
borderTop
borderTopColor
caretColor
color
columnRuleColor
fill
outlineColor
stroke
textDecorationColor
     */
    colors: {
      brand: '174 29% 13%', //#182b29
      blueStone: '173 100% 20%', //#00665a
      niagara: '170 94% 34%', //#05a88d
      aquaHaze: '170 27% 96%', //#f1f7f6
      sunglow: '40 100% 60%', //#ffbb33
      brinkPink: '346 96% 69%', //#fc6487
      sirocco: '173 7% 47%', //#70817f
      blackHaze: '180 5% 92%', //#eaecec
      atomicTangerine: '19 99% 67%', //#fe8c58
      black: '0 0% 0%', //#000000
      white: '0 100% 100%', //#ffffff
      gradientPrimaryStart: '$blueStone',
      gradientPrimaryStop: '$niagara',
      gradientSecondaryStart: '$sunglow',
      gradientSecondaryStop: '$brinkPink',
      //theme
      textPrimary: 'hsl($brand)',
      textSecondary: 'hsl($sirocco)',
      textTertiary: 'hsl($white)',
      backgroundPrimary: 'hsl($white)',
      backgroundSecondary: 'hsl($blackHaze)',
      backgroundTertiary: 'hsl($aquaHaze)',
      backgroundBrandLight: '#f8f8f8',
      gradientPrimarySection:
        'linear-gradient(to right,hsl($gradientPrimaryStart) 50%,hsl($gradientPrimaryStop) 50%)',
      gradientPrimary:
        'linear-gradient(to right,hsl($gradientPrimaryStart) 0%,hsl(173,100%,21%) 11%,hsl(172,100%,23%) 22%,hsl(172,100%,24%) 33%,hsl(172,100%,26%) 44%,hsl(172,100%,27%) 56%,hsl(171,100%,29%) 67%,hsl(171,100%,30%) 78%,hsl(171,97%,32%) 89%,hsl($gradientPrimaryStop) 100%)',
      gradientSecondary:
        'linear-gradient(to right,hsl($gradientSecondaryStart) 0%,hsl(36,100%,61%) 11%,hsl(31,100%,63%) 22%,hsl(26,100%,65%) 33%,hsl(20,100%,67%) 44%,hsl(14,100%,69%) 56%,hsl(7,100%,71%) 67%,hsl(359,100%,72%) 78%,hsl(352,100%,71%) 89%,hsl($gradientSecondaryStop) 100%)',
    },
    //fontFamily
    fonts: {
      mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
      sans: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    },
    //fontSize
    fontSizes: {
      '3_5': '0.875rem',
      4: '1rem',
      '4_5': '1.125rem',
      5: '1.25rem',
      6: '1.5rem',
      9: '2.25rem',
      12: '3rem',
      full: '100%',
    },
    //fontWeight
    fontWeights: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    //letterSpacing
    letterSpacings: {},
    //lineHeight
    lineHeights: {},
    /*
borderRadius
borderTopLeftRadius
borderTopRightRadius
borderBottomRightRadius
borderBottomLeftRadius
     */
    radii: {
      '5px': '5px',
      full: '9999px',
    },
    /*
blockSize
minBlockSize
maxBlockSize
inlineSize
minInlineSize
maxInlineSize
width
minWidth
maxWidth
height
minHeight
maxHeight
flexBasis
gridTemplateColumns
gridTemplateRows
     */
    sizes: {
      '1px': '1px',
      4: '1rem',
      ...Object.keys(SCREENS_MAX_WIDTHS).reduce((acc: Token, key) => {
        acc[key] = SCREENS_MAX_WIDTHS[key][1];
        return acc;
      }, {}),
      half: '50%',
      full: '100%',
    },
    /*
boxShadow
textShadow
    */
    shadows: {
      small: '0 3px 12px 3px hsl(var(--colors-brand)/0.08)',
      default: '0 8px 32px 8px hsl(var(--colors-brand)/0.08)',
      outline: '0 0 0 4px hsl(var(--colors-white)),0 0 0 5px hsl(var(--colors-brand)/0.1)',
      sticky: '0 4px 16px 4px hsl(var(--colors-brand)/0.1)',
    },
    /*
gap
gridGap
columnGap
gridColumnGap
rowGap
gridRowGap
inset
insetBlock
insetBlockEnd
insetBlockStart
insetInline
insetInlineEnd
insetInlineStart
margin
marginTop
marginRight
marginBottom
marginLeft
marginBlock
marginBlockEnd
marginBlockStart
marginInline
marginInlineEnd
marginInlineStart
padding
paddingTop
paddingRight
paddingBottom
paddingLeft
paddingBlock
paddingBlockEnd
paddingBlockStart
paddingInline
paddingInlineEnd
paddingInlineStart
top
right
bottom
left
scrollMargin
scrollMarginTop
scrollMarginRight
scrollMarginBottom
scrollMarginLeft
scrollMarginX
scrollMarginY
scrollMarginBlock
scrollMarginBlockEnd
scrollMarginBlockStart
scrollMarginInline
scrollMarginInlineEnd
scrollMarginInlineStart
scrollPadding
scrollPaddingTop
scrollPaddingRight
scrollPaddingBottom
scrollPaddingLeft
scrollPaddingX
scrollPaddingY
scrollPaddingBlock
scrollPaddingBlockEnd
scrollPaddingBlockStart
scrollPaddingInline
scrollPaddingInlineEnd
scrollPaddingInlineStart
     */
    space: {
      1: '0.25rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      8: '2rem',
      12: '3rem',
      18: '4.5rem',
      26: '6rem',
      ...Object.keys(SCREENS_MAX_WIDTHS).reduce((acc: Token, key) => {
        acc[key] = SCREENS_MAX_WIDTHS[key][1];
        return acc;
      }, {}),
    },
    //transition
    transitions: {},
    //zIndex
    zIndices: {
      '-1': -1,
      0: 0,
      1: 1,
      1000: 1000,
      1010: 1010,
    },
  },
  utils: {},
});

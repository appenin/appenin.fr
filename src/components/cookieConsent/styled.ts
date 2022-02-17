import { styled } from '@/styles';

export const Banner = styled('div', {
  position: 'fixed',
  bottom: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: '$6',
  width: '$full',
  padding: '$6 $4',
  backgroundColor: '$backgroundPrimary',
  borderRadius: '$5px $5px 0 0',
  boxShadow: '0 8px 64px 16px hsl(var(--colors-brand))',
  zIndex: '$1020',
  '@sm': {
    right: '$2',
    maxWidth: 'calc($lg/3)',
    boxShadow: '0 8px 16px 8px hsl(var(--colors-brand)/0.3)',
  },
  '& > header,& > footer': {
    display: 'flex',
    gap: '$4',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  '& > header': {
    fontWeight: '$semibold',
    '& > section': {
      display: 'flex',
      gap: '$4',
      alignItems: 'center',
      justifyContent: 'flex-start',
      textAlign: 'justify',
    },
  },
  '& > footer': {
    flexDirection: 'column',
  },
  '& ul': {
    listStyleType: 'disc',
    listStylePosition: 'inside',
    padding: '$2',
  },
  '& a': {
    textDecoration: 'underline',
  },
});

export const Dialog = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  height: '$full',
  width: '$full',
  backgroundColor: '$backgroundPrimary',
  '@sm': {
    height: 'auto',
    maxWidth: 'calc($lg/2)',
    borderRadius: '$5px',
    boxShadow: '0 8px 16px 8px hsl(var(--colors-brand)/0.3)',
  },
  '& > *': {
    paddingRight: '$4',
    paddingLeft: '$4',
  },
  '& > header,& > footer': {
    display: 'flex',
    alignItem: 'center',
    gap: '$4',
  },
  '& > header': {
    justifyContent: 'flex-start',
    paddingTop: '$6',
    paddingBottom: '$3',
  },
  '& > section': {
    flexGrow: 1,
    paddingTop: '$3',
    paddingBottom: '$3',
    overflow: 'auto',
    textAlign: 'justify',
    '& a': {
      textDecoration: 'underline',
    },
    '& h4': {
      fontWeight: '$semibold',
    },
    '& h4,& p': {
      paddingTop: '$2',
      paddingBottom: '$2',
    },
  },
  '& > footer': {
    justifyContent: 'space-between',
    paddingTop: '$3',
    paddingBottom: '$6',
  },
});

//gui-switch => https://web.dev/building-a-switch-component/
export const Switch = styled('label', {
  $$thumbSize: '1.5rem',
  $$thumb: 'hsl(0 0% 100%)',
  $$thumbHighlight: 'hsl(0 0% 0% / 25%)',
  $$trackSize: 'calc($$thumbSize * 2)',
  $$trackPadding: '0.125rem',
  $$trackInactive: 'hsl(80 0% 80%)',
  $$trackActive: 'hsl(80 60% 45%)',
  $$thumbColor: '$$thumb',
  $$thumbColorHighlight: '$$thumbHighlight',
  $$trackColorInactive: '$$trackInactive',
  $$trackColorActive: '$$trackActive',
  $$isLTR: 1,
  display: 'flex',
  alignItems: 'center',
  gap: '$4',
  justifyContent: 'space-between',
  cursor: 'pointer',
  userSelect: 'none',
  WebkitTapHighlightColor: 'transparent',
  /*'@dark': {
      $$thumb: 'hsl(0 0% 5%)',
      $$thumbHighlight: 'hsl(0 0% 100% / 25%)',
      $$trackInactive: 'hsl(80 0% 35%)',
      $$trackActive: 'hsl(80 60% 60%)',
    },*/
  '&:dir(rtl)': {
    $$isLTR: -1,
  },
  '& > input': {
    $$thumbPosition: '0%',
    $$thumbTransitionDuration: '.25s',
    padding: '$$trackPadding',
    background: '$$trackColorInactive',
    inlineSize: '$$trackSize',
    blockSize: '$$thumbSize',
    borderRadius: '$$trackSize',
    appearance: 'none',
    pointerEvents: 'none',
    touchAction: 'pan-y',
    border: 'none',
    outlineOffset: 0,
    boxSizing: 'content-box',
    flexShrink: 0,
    display: 'grid',
    alignItems: 'center',
    grid: '[track] 1fr / [track] 1fr',
    transition: 'background-color .25s ease',
    '&::before': {
      $$highlightSize: 0,
      content: '',
      cursor: 'pointer',
      pointerEvents: 'auto',
      gridArea: 'track',
      inlineSize: '$$thumbSize',
      blockSize: '$$thumbSize',
      background: '$$thumbColor',
      boxShadow: '0 0 0 $$highlightSize $$thumbColorHighlight',
      borderRadius: '50%',
      transform: 'translateX($$thumbPosition)',
      '@motion-safe': {
        transition: 'transform $$thumbTransitionDuration ease, box-shadow .25s ease',
      },
    },
    '&:not(:disabled):hover::before': {
      $$highlightSize: '.375rem',
    },
    '&:checked': {
      background: '$$trackColorActive',
      $$thumbPosition: 'calc(($$trackSize - 100%) * $$isLTR)',
    },
    '&:indeterminate': {
      $$thumbPosition: 'calc(calc(calc($$trackSize / 2) - calc($$thumbSize / 2)) * $$isLTR)',
    },
    '&:disabled': {
      cursor: 'not-allowed',
      $$thumbColor: 'transparent',
      '&::before': {
        cursor: 'not-allowed',
        boxShadow: 'inset 0 0 0 2px hsl(0 0% 100% / 50%)',
        /*'@dark': {
            boxShadow: 'inset 0 0 0 2px hsl(0 0% 0% / 50%)',
          },*/
      },
    },
  },
  variants: {
    vertical: {
      true: {
        minBlockSize: 'calc($$trackSize + calc($$trackPadding * 2))',
        '& > input': {
          transform: 'rotate(calc(90deg * $$isLTR * -1))',
          touchAction: 'pan-x',
        },
      },
    },
  },
});

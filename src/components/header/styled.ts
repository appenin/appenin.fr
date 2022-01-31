import { styled } from '@/styles';
import { ButtonVariantSize } from '@/components/button/styled';

export const Wrapper = styled('div', {
  width: '$full',
  zIndex: '$1000',
  variants: {
    ui: {
      sticky: {
        visibility: 'hidden',
        position: 'fixed',
        top: 'unset',
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: '$backgroundPrimary',
        boxShadow: '$sticky',
        opacity: 0,
        '@motion-safe': {
          transitionProperty: 'opacity,visibility',
          transitionDuration: 'calc(var(--transition-duration) * 2)',
          transitionTimingFunction: 'var(--transition-timingFunction)',
        },
        '@sm': {
          top: 0,
          bottom: 'unset',
        },
      },
    },
    visible: {
      true: {
        opacity: 1,
        visibility: 'visible',
      },
    },
  },
});

export const Logo = styled('a', {
  position: 'relative',
  display: 'block',
  outline: 'none',
  zIndex: '$1010',
  height: 36,
  width: 114,
  '&:focus': {
    borderRadius: '$5px',
    boxShadow: '$outline',
  },
  '@md': {
    height: 48,
    width: 152,
  },
});

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  maxWidth: '$full',
  margin: '0 auto',
  padding: '$5 $6',
  backgroundColor: 'inherit',
  '@md': {
    maxWidth: '$md',
    paddingRight: 0,
    paddingLeft: 0,
  },
  '@lg': {
    maxWidth: '$lg',
  },
  variants: {
    ui: {
      sticky: {
        [`& ${Logo}`]: {
          display: 'none',
          '@sm': {
            display: 'inherit',
          },
        },
        '& > nav': {
          display: 'flex',
          gap: '$6',
          width: '$full',
          '& > button': {
            placeSelf: 'stretch',
            width: '$half',
            ...ButtonVariantSize.sm,
            '@sm': {
              width: 'inherit',
              whiteSpace: 'nowrap',
              ...ButtonVariantSize.md,
            },
          },
          '@sm': {
            width: 'inherit',
          },
        },
      },
    },
  },
});

export const Toggle = styled('button', {
  height: 22,
  width: 24,
  outline: 'none',
  paddingTop: 2,
  WebkitTapHighlightColor: 'transparent',
  zIndex: '$1010',
  '@motion-safe': {
    transitionProperty: 'transform',
    transitionDuration: 'var(--transition-duration)',
    transitionTimingFunction: 'var(--transition-timingFunction)',
  },
  '&:focus': {
    borderRadius: '$5px',
    boxShadow: '$outline',
  },
  '&::before,&::after': {
    content: '',
  },
  '&::before,&::after,& > span': {
    display: 'block',
    height: 3,
    width: '$full',
    marginBottom: 5,
    background: '$textPrimary',
    '@motion-safe': {
      transitionProperty: 'transform',
      transitionDuration: 'var(--transition-duration)',
      transitionTimingFunction: 'var(--transition-timingFunction)',
    },
  },
  '@md': {
    display: 'none',
  },
  variants: {
    open: {
      true: {
        '&::before': {
          transform: 'translateY(8px) rotate(45deg)',
        },
        '&::after': {
          transform: 'translateY(-8px) rotate(-45deg)',
        },
        '& > span': {
          transform: 'scale(0)',
        },
      },
    },
  },
});

export const Navigation = styled('nav', {
  visibility: 'hidden',
  position: 'fixed',
  top: 0,
  right: 0,
  left: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$6',
  height: 0,
  backgroundColor: '$backgroundPrimary',
  opacity: 0,
  overflow: 'auto',
  zIndex: '$1000',
  '@motion-safe': {
    transitionProperty: 'height,opacity,visibility',
    transitionDuration: 'calc(var(--transition-duration) * 2)',
    transitionTimingFunction: 'var(--transition-timing-Function)',
  },
  '& > button': {
    ...ButtonVariantSize.lg,
    whiteSpace: 'nowrap',
  },
  '@md': {
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: '$3',
    height: 'auto !important',
    backgroundColor: 'transparent',
    opacity: 1,
    visibility: 'visible',
    '& > button': {
      ...ButtonVariantSize.md,
    },
  },
  variants: {
    full: {
      true: {
        height: '100vh',
        opacity: 1,
        visibility: 'visible',
      },
    },
  },
});

import { styled } from '@/styles';

export const Anchor = styled('a', {
  $$color: 'var(--colors-textPrimary)',
  position: 'relative',
  color: 'transparent',
  backgroundClip: 'text',
  backgroundImage: '$gradientPrimary',
  fontWeight: '$medium',
  '&:hover,&:focus': {
    color: '$$color',
  },
  '&:focus': {
    outline: 'none',
  },
  variants: {
    arrow: {
      true: {
        '&::before': {
          content: '->',
          display: 'inline-block',
          width: '1.25em',
          color: 'hsl($gradientPrimaryStart)',
        },
        '&:hover::before,&:focus::before': {
          color: '$$color',
        },
      },
    },
    underlined: {
      true: {
        '&::after': {
          content: '',
          position: 'absolute',
          bottom: 0,
          left: 0,
          height: '$1px',
          width: 0,
          backgroundColor: '$$color',
          '@motion-safe': {
            transitionProperty: 'width',
            transitionDuration: 'var(--transition-duration)',
            transitionTimingFunction: 'var(--transition-timingFunction)',
          },
        },
        '&:hover::after,&:focus::after': {
          width: '$full',
        },
      },
    },
  },
  compoundVariants: [
    {
      arrow: true,
      underlined: true,
      css: {
        '&::after': {
          left: '1.25em',
        },
        '&:hover::after,&:focus::after': {
          width: 'calc(100% - 1.25em)',
        },
      },
    },
  ],
});

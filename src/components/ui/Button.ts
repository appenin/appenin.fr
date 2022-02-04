import { styled } from '@/styles';
import type { CSS } from '@/styles';

export const ButtonVariantSize: Record<PropertyKey, CSS> = {
  sm: {
    padding: '$2 $4',
    fontSize: '$3_5',
  },
  md: {
    padding: '$3 $5',
    fontSize: '$4',
  },
  lg: {
    padding: '$4 $6',
    fontSize: '$4_5',
  },
};

export const Button = styled('button', {
  $$color: 'var(--colors-textPrimary)',
  $$colorAlt: 'var(--colors-textTertiary)',
  $$colorLight: 'var(--colors-backgroundSecondary)',
  position: 'relative',
  color: '$$color',
  fontWeight: '$medium',
  borderRadius: '$5px',
  '@motion-safe': {
    transitionProperty: 'color,background-color,border-color',
    transitionDuration: 'var(--transition-duration)',
    transitionTimingFunction: 'var(--transition-timingFunction)',
  },
  '&:hover,&:focus': {
    color: '$$colorAlt',
    backgroundColor: '$$color',
  },
  '&:focus': {
    outline: 'none',
  },
  variants: {
    activated: {
      true: {
        backgroundColor: '$$colorLight',
      },
    },
    bordered: {
      true: {
        borderWidth: '$1px',
        borderColor: '$$color',
        '&:hover,&:focus': {
          borderColor: 'transparent',
        },
      },
    },
    color: {
      primary: {
        color: '$$colorAlt',
        backgroundImage: '$gradientPrimary',
        '&:hover,&:focus': {
          backgroundColor: 'transparent',
          backgroundImage: 'linear-gradient(to right,$$color,$$color)',
        },
      },
      secondary: {
        color: '$$colorAlt',
        backgroundImage: '$gradientSecondary',
        '&:hover,&:focus': {
          backgroundColor: 'transparent',
          backgroundImage: 'linear-gradient(to right,$$color,$$color)',
        },
      },
    },
    fluid: {
      true: {
        width: '$full',
        padding: '$4 !important',
        textAlign: 'center',
      },
    },
    size: {
      ...ButtonVariantSize,
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

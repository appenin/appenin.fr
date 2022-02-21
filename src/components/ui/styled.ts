import { styled } from '@/styles';
import type { CSS } from '@/styles';

export const Text = styled('span', {
  color: 'transparent',
  backgroundClip: 'text',
  WebkitBoxDecorationBreak: 'clone',
  variants: {
    color: {
      primary: {
        backgroundImage: '$gradientPrimary',
      },
      secondary: {
        backgroundImage: '$gradientSecondary',
      },
    },
  },
  defaultVariants: {
    color: 'primary',
  },
});

export const Spacer = styled('div', {
  height: 'var(--space-12)',
});

export const OneToX = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$6',
  '@sm': {
    display: 'grid',
  },
  variants: {
    columns: {
      2: {
        gridTemplateColumns: 'repeat(2,minmax(0,1fr))',
      },
      3: {
        gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
      },
    },
  },
});

export const XtoOne = styled('div', {
  display: 'grid',
  gap: '$6',
  placeItems: 'center',
  '@md': {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexGrow: 1,
  },
  variants: {
    columns: {
      2: {
        gridTemplateColumns: 'repeat(2,minmax(0,1fr))',
      },
      3: {
        gridTemplateColumns: 'repeat(2,minmax(0,1fr))',
        '@sm': {
          gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
        },
      },
    },
  },
});

export const Card = styled('article', {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  gap: '$6',
  padding: '$6',
  backgroundColor: 'transparent',
  variants: {
    background: {
      primary: {
        backgroundColor: '$backgroundPrimary',
      },
    },
    bordered: {
      true: {},
    },
    rounded: {
      true: {
        borderRadius: '$5px',
      },
    },
    shadow: {
      true: {
        boxShadow: '$default',
      },
    },
    responsive: {
      true: {
        '@md': {
          gap: '$12',
          padding: '$12',
        },
      },
    },
  },
});

export const Header = styled('h2', {
  paddingBottom: '$8',
  color: '$textPrimary',
  fontWeight: '$bold',
  textAlign: 'center',
  '@md': {
    paddingBottom: '$12',
  },
  variants: {
    bordered: {
      true: {},
    },
    gradient: {
      true: {
        '& > span': {
          color: 'transparent',
          backgroundImage: '$gradientSecondary',
          backgroundClip: 'text',
          WebkitBoxDecorationBreak: 'clone',
        },
      },
    },
    rounded: {
      true: {
        padding: '$8 $6',
        borderRadius: '$5px',
        '@sm': {
          paddingRight: '$12',
          paddingLeft: '$12',
        },
      },
    },
    shadow: {
      true: {
        padding: '$8 $6',
        boxShadow: '$default',
        '@sm': {
          paddingRight: '$12',
          paddingLeft: '$12',
        },
      },
    },
  },
});

export const Container = styled('div', {
  position: 'relative',
  width: '$full',
  maxWidth: '$full',
  margin: '0 auto',
  padding: '$12 $6',
  '@md': {
    maxWidth: '$md',
    padding: '$12',
  },
  '@lg': {
    maxWidth: '$lg',
  },
  variants: {
    fluid: {
      true: {
        '@md': {
          paddingRight: 0,
          paddingLeft: 0,
        },
      },
    },
  },
});

const COMMON_SECTION_BLOCKS: CSS = {
  position: 'relative',
  width: '$full',
  padding: '$8 0',
  '@sm': {
    display: 'flex',
    alignItems: 'center',
    width: '$half',
  },
};

export const Article = styled('div', {
  ...COMMON_SECTION_BLOCKS,
  '& > article': {
    width: '$full',
    '& > *': {
      marginBottom: '$8',
      '@md': {
        marginBottom: '$12',
      },
    },
    '& h2': {
      color: '$textPrimary',
    },
    '& p': {
      color: '$textSecondary',
    },
  },
});

export const Figure = styled('div', {
  ...COMMON_SECTION_BLOCKS,
  overflow: 'hidden',
  '&::before, &::after': {
    top: 0,
    bottom: 0,
    zIndex: 0,
  },
  '&::before': {
    content: '',
    position: 'absolute',
    height: '$full',
    width: '$full',
    margin: '0',
    backgroundImage: '$gradientPrimary',
    '@md': {
      width: '$md',
    },
    '@lg': {
      width: '$lg',
    },
  },
  '&::after': {
    content: '',
    position: 'absolute',
    height: '$full',
    width: '144px',
    maxHeight: '144px',
    margin: 'auto 0',
    WebkitMask: 'var(--icons-dot) space',
    mask: 'var(--icons-dot) space',
  },
  '& > div:first-child': {
    position: 'absolute',
    top: 0,
    height: '$full',
    backgroundColor: 'var(--section-background-color)',
    zIndex: 0,
    '&::before, &::after': {
      content: '',
      position: 'absolute',
      backgroundColor: 'transparent',
      height: '$4',
      width: 8,
    },
    '&::before': {
      top: 0,
      boxShadow: '0 -8px 0 0 var(--section-background-color)',
    },
    '&::after': {
      bottom: 0,
      boxShadow: '0 8px 0 0 var(--section-background-color)',
    },
  },
  '& > figure': {
    position: 'relative',
    width: 'calc(100% - var(--space-12))',
    zIndex: 1,
    '& > span': {
      //@TODO next Image component
      overflow: 'initial!important',
      '& > img': {
        backgroundColor: '$backgroundPrimary',
        borderRadius: '$5px',
        boxShadow: '$small',
      },
    },
    '@md': {
      width: 'calc(100% - var(--space-18))',
    },
  },
  variants: {
    fluid: {
      true: {
        '& > figure': {
          aspectRatio: '1!important',
          '& > *': {
            aspectRatio: '1!important',
          },
        },
      },
    },
  },
});

export const Section = styled('section', {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  width: '$full',
  overflow: 'hidden',
  '@sm': {
    flexDirection: 'row',
  },
  variants: {
    block: {
      left: {
        [`& ${Article}`]: {
          backgroundColor: 'var(--section-background-color)',
          '@sm': {
            order: 2,
          },
          '@md': {
            paddingRight: 'calc(50% - $md/2)',
          },
          '@lg': {
            paddingRight: 'calc(50% - $lg/2)',
          },
          '& > article': {
            padding: '0 $6 0 $6',
            '@md': {
              padding: '0 $12 0 $6',
            },
          },
        },
        [`& ${Figure}`]: {
          backgroundColor: 'hsl($gradientPrimaryStart)',
          '@sm': {
            order: 1,
          },
          '@md': {
            paddingLeft: 'calc(50% - $md/2)',
          },
          '@lg': {
            paddingLeft: 'calc(50% - $lg/2)',
          },
          '&::before, &::after': {
            left: 0,
            '@md': {
              left: 'calc(100% - $md/2)',
            },
            '@lg': {
              left: 'calc(100% - $lg/2)',
            },
          },
          '&::after': {
            backgroundColor: 'hsl($gradientPrimaryStop)',
          },
          '& > div:first-child': {
            right: 0,
            left: 144,
            '@md': {
              left: 'calc(100% - $md/2 + 144px)',
            },
            '@lg': {
              left: 'calc(100% - $lg/2 + 144px)',
            },
            '&::before, &::after': {
              left: -8,
            },
            '&::before': {
              borderTopRightRadius: 8,
            },
            '&::after': {
              borderBottomRightRadius: 8,
            },
          },
          '& > figure': {
            minHeight: 144,
            right: '$6',
            left: '$6',
            aspectRatio: 3 / 2,
            '& > *': {
              '@sm': {
                aspectRatio: 3 / 2,
                margin: 'auto !important',
              },
            },
            '@sm': {
              aspectRatio: 1,
            },
            '@md': {
              right: '$6',
              left: '$12',
            },
          },
        },
      },
      right: {
        [`& ${Article}`]: {
          backgroundColor: 'var(--section-background-color)',
          '@sm': {
            order: 1,
          },
          '@md': {
            paddingLeft: 'calc(50% - $md/2)',
          },
          '@lg': {
            paddingLeft: 'calc(50% - $lg/2)',
          },
          '& > article': {
            padding: '0 $6 0 $6',
            '@md': {
              padding: '0 $6 0 $12',
            },
          },
        },
        [`& ${Figure}`]: {
          backgroundColor: 'hsl($gradientPrimaryStop)',
          '@sm': {
            order: 2,
          },
          '@md': {
            paddingRight: 'calc(50% - $md/2)',
          },
          '@lg': {
            paddingRight: 'calc(50% - $lg/2)',
          },
          '&::before, &::after': {
            right: 0,
            '@md': {
              right: 'calc(100% - $md/2)',
            },
            '@lg': {
              right: 'calc(100% - $lg/2)',
            },
          },
          '&::after': {
            backgroundColor: 'hsl($gradientPrimaryStart)',
          },
          '& > div:first-child': {
            right: 144,
            left: 0,
            '@md': {
              right: 'calc(100% - $md/2 + 144px)',
            },
            '@lg': {
              right: 'calc(100% - $lg/2 + 144px)',
            },
            '&::before, &::after': {
              right: -8,
            },
            '&::before': {
              borderTopLeftRadius: 8,
            },
            '&::after': {
              borderBottomLeftRadius: 8,
            },
          },
          '& > figure': {
            minHeight: 144,
            right: '$6',
            left: '$6',
            aspectRatio: 3 / 2,
            '& > *': {
              '@sm': {
                aspectRatio: 3 / 2,
                margin: 'auto !important',
              },
            },
            '@sm': {
              aspectRatio: 1,
            },
            '@md': {
              right: '$12',
            },
          },
        },
      },
    },
    background: {
      primary: {
        backgroundColor: '$backgroundPrimary',
      },
      secondary: {
        backgroundColor: '$backgroundSecondary',
      },
      tertiary: {
        backgroundColor: '$backgroundTertiary',
      },
      brand: {
        backgroundColor: '$backgroundBrandLight',
      },
    },
    fluid: {
      true: {},
    },
    gradient: {
      true: {
        backgroundImage: '$gradientPrimarySection',
        [`& ${Container}`]: {
          color: '$textTertiary',
          backgroundImage: '$gradientPrimary',
        },
      },
    },
  },
  compoundVariants: [
    {
      block: 'left',
      fluid: true,
      css: {
        backgroundImage:
          'linear-gradient(to right,hsl($gradientPrimaryStart) 50%,var(--section-background-color) 50%)',
        [`& ${Figure}`]: {
          backgroundColor: 'transparent',
          '@sm': {
            width: '$full',
          },
          '@md': {
            justifyContent: 'center',
            width: '$md',
            margin: '0 auto',
            paddingLeft: 0,
          },
          '@lg': {
            width: '$lg',
          },
          '&::before, &::after': {
            '@md': {
              left: 'calc(100% - $md)',
            },
            '@lg': {
              left: 'calc(100% - $lg)',
            },
          },
          '& > div:first-child': {
            '@md': {
              left: 'calc(100% - $md + 144px)',
            },
            '@lg': {
              left: 'calc(100% - $lg + 144px)',
            },
          },
          '& > figure': {
            left: '$6',
            width: 'calc(100% - var(--space-12))',
            aspectRatio: 'unset',
            '& > *': {
              '@sm': {
                aspectRatio: 'unset',
              },
            },
            '@md': {
              margin: '0 $18 0 $6',
            },
          },
        },
      },
    },
    {
      block: 'right',
      fluid: true,
      css: {
        backgroundImage:
          'linear-gradient(to right,var(--section-background-color) 50%,hsl($gradientPrimaryStop) 50%)',
        [`& ${Figure}`]: {
          backgroundColor: 'transparent',
          '@sm': {
            width: '$full',
          },
          '@md': {
            justifyContent: 'center',
            width: '$md',
            margin: '0 auto',
            paddingRight: 0,
          },
          '@lg': {
            width: '$lg',
          },
          '&::before, &::after': {
            '@md': {
              right: 'calc(100% - $md)',
            },
            '@lg': {
              right: 'calc(100% - $lg)',
            },
          },
          '& > div:first-child': {
            '@md': {
              right: 'calc(100% - $md + 144px)',
            },
            '@lg': {
              right: 'calc(100% - $lg + 144px)',
            },
          },
          '& > figure': {
            left: '$6',
            width: 'calc(100% - var(--space-12))',
            aspectRatio: 'unset',
            '& > *': {
              '@sm': {
                aspectRatio: 'unset',
              },
            },
            '@md': {
              margin: '0 $18 0 $6',
            },
          },
        },
      },
    },
  ],
});

export const ContentText = styled('div', {
  borderRadius: '$5px',
  boxShadow: '$default',
  backgroundColor: '$backgroundPrimary',
  padding: '$8',
  '& a': {
    textDecoration: 'underline',
    '&:hover,&:focus': {
      color: '$textSecondary',
    },
  },
  '@md': {
    padding: '$12',
  },
});

export const OtherPageLayout = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$6',
  borderRadius: '$5px',
  boxShadow: '$default',
  backgroundColor: '$backgroundPrimary',
  padding: '$8',
  '& > p': {
    color: '$textPrimary',
    '& ~ h2': {
      marginTop: '$4',
    },
  },
  '& ul': {
    marginLeft: '$4',
    paddingLeft: '$4',
    listStylePosition: 'outside',
    listStyleType: 'disc',
    '& ul': {
      listStyleType: 'circle',
    },
  },
  '& a': {
    textDecoration: 'underline',
    '&:hover,&:focus': {
      color: '$textSecondary',
    },
  },
  '@md': {
    padding: '$12',
  },
});

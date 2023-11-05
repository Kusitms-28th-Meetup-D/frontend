import { DefaultTheme } from 'styled-components';

const colors = {
  primary90: '#404079',
  primary60: '#5C5FFA',
  primary40: '#898BF8',
  primary20: '#EEEFFD',
  primary10: '#F5F5FE',

  gray100: '#15161B',
  gray90: '#3C3E48',
  gray80: '#595B68',
  gray70: '#7A7C8B',
  gray60: '#8E909D',
  gray50: '#A9ABB5',
  gray40: '#BBBCC4',
  gray30: '#CFD0D6',
  gray20: '#DBDCE1',
  gray10: '#EEEFF1',

  white: '#FFFFFF',
  overay50: '#2B2B2E',
  overay20: '#CDCEFA',

  error90: '#CB3830',
  error60: '#D9635D',
  error40: '#E0817C',
  error20: '#E8A19D',

  warning90: '#EDAB47',
  warning60: '#F5BD68',
  warning40: '#F7C882',
  warning20: '#F9DAAB',

  success90: '#5FB84F',
  success60: '#83C877',
  success40: '#ABDAA3',
  success20: '#D1EBCD',

  linear1: 'linear-gradient(90deg, #B1B4FC 100%, #DADCFE 70%, #DBDDFF 0%)',
  linear2: 'linear-gradient(90deg, #7376F0 0%, #3B3EF1 100%)',
} as const;

interface Font {
  weight: number;
  size: number;
  lineHeight: number;
}

const FONT = ({ weight, size, lineHeight }: Font): string => {
  return `
    font-weight : ${weight};
    font-size : ${size}rem;
    line-height : ${lineHeight}%;
    `;
};

const fonts = {
  logo1: FONT({
    weight: 800,
    size: 5.6,
    lineHeight: 160,
  }),
  logo2: FONT({
    weight: 800,
    size: 4.8,
    lineHeight: 160,
  }),
  logo3: FONT({
    weight: 800,
    size: 3.2,
    lineHeight: 160,
  }),
  logo4: FONT({
    weight: 800,
    size: 2.4,
    lineHeight: 160,
  }),

  heading1: FONT({
    weight: 700,
    size: 5.6,
    lineHeight: 160,
  }),
  heading2: FONT({
    weight: 700,
    size: 4.8,
    lineHeight: 160,
  }),
  heading21: FONT({
    weight: 700,
    size: 3.6,
    lineHeight: 160,
  }),
  heading3: FONT({
    weight: 700,
    size: 2.8,
    lineHeight: 160,
  }),
  heading4: FONT({
    weight: 700,
    size: 2.4,
    lineHeight: 160,
  }),
  heading5: FONT({
    weight: 700,
    size: 2.0,
    lineHeight: 160,
  }),
  heading6: FONT({
    weight: 700,
    size: 1.8,
    lineHeight: 160,
  }),

  subtitleXXL: FONT({
    weight: 500,
    size: 2.4,
    lineHeight: 160,
  }),
  subtitleXL: FONT({
    weight: 500,
    size: 2.0,
    lineHeight: 160,
  }),
  subtitleL: FONT({
    weight: 500,
    size: 1.8,
    lineHeight: 160,
  }),
  subtitleM: FONT({
    weight: 500,
    size: 1.6,
    lineHeight: 160,
  }),
  subtitleS: FONT({
    weight: 500,
    size: 1.4,
    lineHeight: 160,
  }),
  subtitleXS: FONT({
    weight: 500,
    size: 1.2,
    lineHeight: 160,
  }),
  subtitleXXS: FONT({
    weight: 500,
    size: 1.0,
    lineHeight: 160,
  }),

  bodyXXL: FONT({
    weight: 400,
    size: 2.4,
    lineHeight: 160,
  }),
  bodyXL: FONT({
    weight: 400,
    size: 2.0,
    lineHeight: 160,
  }),
  bodyL: FONT({
    weight: 400,
    size: 1.8,
    lineHeight: 160,
  }),
  bodyM: FONT({
    weight: 400,
    size: 1.6,
    lineHeight: 160,
  }),
  bodyS: FONT({
    weight: 400,
    size: 1.4,
    lineHeight: 160,
  }),
  bodyXS: FONT({
    weight: 400,
    size: 1.2,
    lineHeight: 160,
  }),
  bodyXXS: FONT({
    weight: 400,
    size: 1.0,
    lineHeight: 160,
  }),

  buttonXXL: FONT({
    weight: 500,
    size: 2.4,
    lineHeight: 140,
  }),
  buttonXL: FONT({
    weight: 500,
    size: 2.0,
    lineHeight: 140,
  }),
  buttonL: FONT({
    weight: 500,
    size: 1.8,
    lineHeight: 140,
  }),
  buttonM: FONT({
    weight: 500,
    size: 1.6,
    lineHeight: 140,
  }),
  buttonS: FONT({
    weight: 500,
    size: 1.4,
    lineHeight: 140,
  }),
  buttonXS: FONT({
    weight: 500,
    size: 1.2,
    lineHeight: 140,
  }),
  buttonXXS: FONT({
    weight: 500,
    size: 1.0,
    lineHeight: 140,
  }),

  caption: FONT({
    weight: 600,
    size: 2.0,
    lineHeight: 140,
  }),
  menuTabs: FONT({
    weight: 500,
    size: 1.6,
    lineHeight: 140,
  }),
};

const deviceSizes = {
  mobile: '390px',
  tablet: '768px',
  desktop: '1536px',
};

const devices = {
  mobile: `screen and (min-width: ${deviceSizes.mobile})`,
  tablet: `screen and (min-width: ${deviceSizes.tablet})`,
  desktop: `screen and (min-width: ${deviceSizes.desktop})`,
};

export type ColorsTypes = typeof colors;
export type FontsTypes = typeof fonts;
export type DevicesTypes = typeof devices;

export const theme: DefaultTheme = {
  colors,
  fonts,
  devices,
};

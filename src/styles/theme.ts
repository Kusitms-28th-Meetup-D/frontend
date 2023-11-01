import { DefaultTheme } from 'styled-components';

const colors = {
  primary90: '#1214A5',
  primary60: '#3134E9',
  primary40: '#7376F0',
  primary20: '#A6A7F6',

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
  overay: '#2B2B2E',

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
    line-height : ${lineHeight}rem;
    `;
};

const fonts = {
  logo1: FONT({
    weight: 800,
    size: 5.6,
    lineHeight: 1.6,
  }),
  logo2: FONT({
    weight: 800,
    size: 4.8,
    lineHeight: 1.6,
  }),
  logo3: FONT({
    weight: 800,
    size: 3.2,
    lineHeight: 1.6,
  }),
  logo4: FONT({
    weight: 800,
    size: 2.4,
    lineHeight: 1.6,
  }),

  heading1: FONT({
    weight: 600,
    size: 5.6,
    lineHeight: 1.6,
  }),
  heading2: FONT({
    weight: 600,
    size: 4.8,
    lineHeight: 1.6,
  }),
  heading3: FONT({
    weight: 600,
    size: 3.2,
    lineHeight: 1.6,
  }),
  heading4: FONT({
    weight: 600,
    size: 2.4,
    lineHeight: 1.6,
  }),
  heading5: FONT({
    weight: 600,
    size: 2.0,
    lineHeight: 1.6,
  }),
  heading6: FONT({
    weight: 600,
    size: 1.8,
    lineHeight: 1.6,
  }),

  subtitleM: FONT({
    weight: 500,
    size: 1.6,
    lineHeight: 1.6,
  }),
  subtitleS: FONT({
    weight: 500,
    size: 1.4,
    lineHeight: 1.6,
  }),

  bodyL: FONT({
    weight: 400,
    size: 1.8,
    lineHeight: 1.6,
  }),
  bodyM: FONT({
    weight: 400,
    size: 1.6,
    lineHeight: 1.6,
  }),
  bodyS: FONT({
    weight: 400,
    size: 1.4,
    lineHeight: 1.6,
  }),
  bodyXS: FONT({
    weight: 400,
    size: 1.2,
    lineHeight: 1.6,
  }),
  bodyXXS: FONT({
    weight: 400,
    size: 1.0,
    lineHeight: 1.6,
  }),

  buttonL: FONT({
    weight: 500,
    size: 2.0,
    lineHeight: 1.4,
  }),
  buttonM: FONT({
    weight: 500,
    size: 1.6,
    lineHeight: 1.4,
  }),
  buttonS: FONT({
    weight: 500,
    size: 1.4,
    lineHeight: 1.4,
  }),

  caption: FONT({
    weight: 600,
    size: 2.0,
    lineHeight: 1.4,
  }),
  menuTabs: FONT({
    weight: 500,
    size: 1.6,
    lineHeight: 1.4,
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

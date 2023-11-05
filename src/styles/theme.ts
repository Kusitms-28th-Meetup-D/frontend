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
  gray5: '#F9F9FA',

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
} as const;

interface Font {
  font: string;
  weight: number;
  size: number;
  lineHeight: number;
}

const FONT = ({ font, weight, size, lineHeight }: Font): string => {
  return `
    font-family : "${font}";
    font-weight : ${weight};
    font-size : ${size}rem;
    line-height : ${lineHeight}%;
    `;
};

const fonts = {
  //logo
  logo1: FONT({ font: 'Suit', weight: 800, size: 5.6, lineHeight: 160 }),
  logo2: FONT({ font: 'Suit', weight: 800, size: 4.8, lineHeight: 160 }),
  logo3: FONT({ font: 'Suit', weight: 800, size: 3.2, lineHeight: 160 }),
  logo4: FONT({ font: 'Suit', weight: 800, size: 2.4, lineHeight: 160 }),

  //heading
  heading1: FONT({
    font: 'Pretendard',
    weight: 700,
    size: 5.6,
    lineHeight: 160,
  }),
  heading2: FONT({
    font: 'Pretendard',
    weight: 700,
    size: 4.8,
    lineHeight: 160,
  }),
  heading2_1: FONT({
    font: 'Pretendard',
    weight: 700,
    size: 3.6,
    lineHeight: 160,
  }),
  heading3: FONT({
    font: 'Pretendard',
    weight: 700,
    size: 2.8,
    lineHeight: 160,
  }),
  heading4: FONT({
    font: 'Pretendard',
    weight: 700,
    size: 2.4,
    lineHeight: 160,
  }),
  heading5: FONT({
    font: 'Pretendard',
    weight: 700,
    size: 2.0,
    lineHeight: 160,
  }),
  heading6: FONT({
    font: 'Pretendard',
    weight: 700,
    size: 1.8,
    lineHeight: 160,
  }),

  //subtitle
  subtitleXXL: FONT({
    font: 'Pretendard',
    weight: 600,
    size: 2.4,
    lineHeight: 160,
  }),
  subtitleXL: FONT({
    font: 'Pretendard',
    weight: 600,
    size: 2,
    lineHeight: 160,
  }),
  subtitleL: FONT({
    font: 'Pretendard',
    weight: 600,
    size: 1.8,
    lineHeight: 160,
  }),
  subtitleM: FONT({
    font: 'Pretendard',
    weight: 600,
    size: 1.6,
    lineHeight: 160,
  }),
  subtitleS: FONT({
    font: 'Pretendard',
    weight: 600,
    size: 1.4,
    lineHeight: 160,
  }),
  subtitleXS: FONT({
    font: 'Pretendard',
    weight: 600,
    size: 1.2,
    lineHeight: 160,
  }),
  subtitleXXS: FONT({
    font: 'Pretendard',
    weight: 600,
    size: 1,
    lineHeight: 160,
  }),

  //body
  bodyXXL: FONT({
    font: 'Pretendard',
    weight: 400,
    size: 2.4,
    lineHeight: 160,
  }),
  bodyXL: FONT({ font: 'Pretendard', weight: 400, size: 2, lineHeight: 160 }),
  bodyL: FONT({ font: 'Pretendard', weight: 400, size: 1.8, lineHeight: 160 }),
  bodyM: FONT({ font: 'Pretendard', weight: 400, size: 1.6, lineHeight: 160 }),
  bodyS: FONT({ font: 'Pretendard', weight: 400, size: 1.4, lineHeight: 160 }),
  bodyXS: FONT({ font: 'Pretendard', weight: 400, size: 1.2, lineHeight: 160 }),
  bodyXXS: FONT({
    font: 'Pretendard',
    weight: 400,
    size: 1.0,
    lineHeight: 160,
  }),

  //button
  buttonXXL: FONT({
    font: 'Pretendard',
    weight: 500,
    size: 2.4,
    lineHeight: 140,
  }),
  buttonXL: FONT({
    font: 'Pretendard',
    weight: 500,
    size: 2.0,
    lineHeight: 140,
  }),
  buttonL: FONT({
    font: 'Pretendard',
    weight: 500,
    size: 1.8,
    lineHeight: 140,
  }),
  buttonM: FONT({
    font: 'Pretendard',
    weight: 500,
    size: 1.6,
    lineHeight: 140,
  }),
  buttonS: FONT({
    font: 'Pretendard',
    weight: 500,
    size: 1.4,
    lineHeight: 140,
  }),
  buttonXS: FONT({
    font: 'Pretendard',
    weight: 500,
    size: 1.2,
    lineHeight: 140,
  }),
  buttonXXS: FONT({
    font: 'Pretendard',
    weight: 500,
    size: 1,
    lineHeight: 140,
  }),

  caption: FONT({
    font: 'Pretendard',
    weight: 500,
    size: 2.0,
    lineHeight: 140,
  }),
  menuTabs: FONT({
    font: 'Pretendard',
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

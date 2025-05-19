import { Palette, Semantic } from './types';

export const palette: Palette = {
  common: {
    0: '#FFFFFF',
    100: '#000000',
  },

  neutral: {
    99: '#F7F7F7',
    98: '#F2F2F2',
    97: '#ECECEC',
    96: '#E5E5E5',
    95: '#DCDCDC',
    90: '#C4C4C4',
    80: '#B0B0B0',
    70: '#9B9B9B',
    60: '#8A8A8A',
    50: '#737373',
    40: '#5C5C5C',
    30: '#474747',
    20: '#2A2A2A',
    10: '#171717',
    5: '#0F0F0F',
  },

  coolNeutral: {
    99: '#F7F7F8',
    98: '#F4F4F5',
    97: '#EAEBEC',
    96: '#E1E2E4',
    95: '#DBDCDF',
    90: '#C2C4C8',
    80: '#AEB0B6',
    70: '#989BA2',
    60: '#878A93',
    50: '#70737C',
    40: '#5A5C63',
    30: '#46474C',
    20: '#292A2D',
    10: '#171719',
    5: '#0F0F10',
  },

  blue: {
    99: '#F2F7FF',
    95: '#E8F1FF',
    90: '#DCE8FB',
    80: '#9FB9E4',
    70: '#759AD9',
    60: '#4677C8',
    50: '#3067C1',
    40: '#1D52A9',
    30: '#174796',
    20: '#12356E',
    10: '#1D2B45',
  },

  red: {
    99: '#FFFAFA',
    95: '#FEECEC',
    90: '#FED5D5',
    80: '#FFB5B5',
    70: '#FF8C8C',
    60: '#FF6363',
    50: '#FF4242',
    40: '#E52222',
    30: '#B00C0C',
    20: '#730303',
    10: '#3B0101',
  },

  green: {
    99: '#F2FFF6',
    95: '#D9FFE6',
    90: '#ACFCC7',
    80: '#7DF5A5',
    70: '#49E57D',
    60: '#1ED45A',
    50: '#00BF40',
    40: '#009632',
    30: '#006E25',
    20: '#004517',
    10: '#00240C',
  },

  orange: {
    99: '#FFFCF7',
    95: '#FEF4E6',
    90: '#FEE6C6',
    80: '#FFD49C',
    70: '#FFC06E',
    60: '#FFA938',
    50: '#FF9200',
    40: '#D47800',
    30: '#9C5800',
    20: '#663A00',
    10: '#361E00',
  },

  redOrange: {
    99: '#FFFAF7',
    95: '#FEEEED',
    90: '#FED9C4',
    80: '#FFBD96',
    70: '#FF9B61',
    60: '#FF7B2E',
    50: '#FF5E00',
    40: '#C94A00',
    30: '#913500',
    20: '#592100',
    10: '#290F00',
  },

  lime: {
    99: '#F8FFF2',
    95: '#E6FFD4',
    90: '#E6FFD4',
    80: '#AEF779',
    70: '#88F03E',
    60: '#6BE016',
    50: '#58CF04',
    40: '#48AD00',
    30: '#347D00',
    20: '#225200',
    10: '#112900',
  },

  cyan: {
    99: '#F7FEFF',
    95: '#DEFAFF',
    90: '#B5F4FF',
    80: '#8AEDFF',
    70: '#57DFF7',
    60: '#28D0ED',
    50: '#00BDDE',
    40: '#0098B2',
    30: '#006F82',
    20: '#004854',
    10: '#00252B',
  },

  lightBlue: {
    99: '#F7FDFF',
    95: '#E5F6FE',
    90: '#C4ECFE',
    80: '#A1E1FF',
    70: '#70D2FF',
    60: '#3DC2FF',
    50: '#00AEFF',
    40: '#008DCF',
    30: '#006796',
    20: '#004261',
    10: '#002130',
  },

  violet: {
    99: '#FBFAFF',
    95: '#F0ECFE',
    90: '#DBD3FE',
    80: '#C0B0FF',
    70: '#9E86FC',
    60: '#7D5EF7',
    50: '#6541F2',
    40: '#4F29E5',
    30: '#3A16C9',
    20: '#23098F',
    10: '#11024D',
  },

  purple: {
    99: '#FEFBFF',
    95: '#F9EDFF',
    90: '#F2D6FF',
    80: '#E9BAFF',
    70: '#DE96FF',
    60: '#D478FF',
    50: '#CB59FF',
    40: '#AD36E3',
    30: '#861CB8',
    20: '#580A7D',
    10: '#290247',
  },

  pink: {
    99: '#FFFAFE',
    95: '#FEECFB',
    90: '#FED3F7',
    80: '#FFB8F3',
    70: '#FF94ED',
    60: '#FA73E3',
    50: '#F553DA',
    40: '#D331B8',
    30: '#A81690',
    20: '#730560',
    10: '#3D0133',
  },
};

export const semantic: Semantic = {
  primary: {
    normal: { group: 'blue', level: 60 },
    strong: { group: 'blue', level: 20 },
    heavy: { group: 'blue', level: 10 },
  },

  label: {
    normal: { group: 'coolNeutral', level: 10 },
    strong: { group: 'common', level: 100 },
    neutral: 'rgba(46, 47, 51, 0.88)', // #2E2F33 + 88%
    alternative: 'rgba(55, 56, 60, 0.61)', // #37383C + 61%
    assistive: 'rgba(55, 56, 60, 0.28)', // #37383C + 28%
    disable: 'rgba(55, 56, 60, 0.16)', // #37383C + 16%
  },

  interaction: {
    inactive: { group: 'coolNeutral', level: 70 },
    disable: { group: 'coolNeutral', level: 98 },
  },

  background: {
    normal: {
      normal: { group: 'common', level: 0 },
      alternative: { group: 'coolNeutral', level: 99 },
    },
    elevated: {
      normal: { group: 'blue', level: 95 },
      alternative: { group: 'blue', level: 70 },
    },
  },

  line: {
    normal: 'rgba(194, 196, 200, 0.43)', // #C2C4C8 + 43%
    neutral: 'rgba(194, 196, 200, 0.26)', // #C2C4C8 + 26%
    alternative: 'rgba(194, 196, 200, 0.12)', // #C2C4C8 + 12%
  },

  status: {
    positive: { group: 'green', level: 60 },
    cautionary: { group: 'orange', level: 60 },
    destructive: { group: 'red', level: 60 },
  },

  accent: {
    redOrange: { group: 'redOrange', level: 60 },
    lime: { group: 'lime', level: 60 },
    cyan: { group: 'cyan', level: 60 },
    lightBlue: { group: 'lightBlue', level: 60 },
    violet: { group: 'violet', level: 60 },
    purple: { group: 'purple', level: 60 },
    pink: { group: 'pink', level: 60 },
  },

  static: {
    white: { group: 'common', level: 0 },
    black: { group: 'common', level: 100 },
  },

  fill: {
    normal: 'rgba(194, 196, 200, 0.16)', // #C2C4C8 · 16%
    strong: 'rgba(194, 196, 200, 0.28)', // #C2C4C8 · 28%
    alternative: 'rgba(194, 196, 200, 0.05)', // #C2C4C8 · 5%
    dimmer: 'rgba(23, 23, 25, 0.52)', // #171719 · 52%
  },
};

import Constants from 'expo-constants';

const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#faf9f9',
    textAppBar:'#faf9f9',
    primary: '#0366d6',
    appBarBackGround: '#24292e',
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: 'System',
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
  length: {
    height: Constants.statusBarHeight,
    barHeight: 35,
  },
} as const;

export default theme;
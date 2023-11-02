import Constants from "expo-constants";

const bodyFontSize = 14;
const radiusRatio = 10 / 57;

const theme = {
  colors: {
    textPrimary: "#24292e",
    textSecondary: "#faf9f9",
    textTertiary: "#626262",
    primary: "#0366d6",
    secondary: "#faf9f9",
    mainBackGround: "#e1e4e8",
  },
  fontSizes: {
    body: bodyFontSize,
    subheading: 16,
  },
  fonts: {
    main: "System",
  },
  fontWeights: {
    normal: "400",
    bold: "700",
  },
  length: {
    height: Constants.statusBarHeight,
    barHeight: 35,
    logoLength: 50,
    radiusRatio,
    elementRadius: (bodyFontSize + 9) * radiusRatio,
  },
} as const;

export default theme;

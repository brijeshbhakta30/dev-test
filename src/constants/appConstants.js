import {
  Dimensions, PixelRatio, Platform, StatusBar,
} from 'react-native';

const {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
} = Dimensions.get('window');

const [shortDimension, longDimension] = SCREEN_WIDTH < SCREEN_HEIGHT
  ? [SCREEN_WIDTH, SCREEN_HEIGHT]
  : [SCREEN_HEIGHT, SCREEN_WIDTH];

// Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const scale = shortDimension / guidelineBaseWidth;
const verticalScale = longDimension / guidelineBaseHeight;

export function getSizeAccordingToScreenWidth(val) {
  return (scale * val);
}

export function getSizeAccordingToScreenHeight(val) {
  return (verticalScale * val);
}

export function normalizeFontSize(size) {
  const newSize = scale * size;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  }
  return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
}

export function isIphoneX() {
  return ((SCREEN_HEIGHT === 812 || SCREEN_WIDTH === 812) || (SCREEN_HEIGHT === 896 || SCREEN_WIDTH === 896));
}

function emptyFunc() {
}

export default {
  isIOS: Platform.OS === 'ios',
  isANDROID: Platform.OS === 'android',
  screenHeight: SCREEN_HEIGHT,
  screenWidth: SCREEN_WIDTH,
  isiPAD: ((SCREEN_HEIGHT / SCREEN_WIDTH) < 1.6),
  statusBarHeight: Platform.select({
    ios: isIphoneX() ? 44 : 28,
    android: StatusBar.currentHeight,
  }),
  scale,
  hs: getSizeAccordingToScreenWidth,
  vs: getSizeAccordingToScreenHeight,
  fs: normalizeFontSize,
  emptyFunc,
};

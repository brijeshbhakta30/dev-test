import React from 'react';
import {
  StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import constants from '../constants/appConstants';
import colors from '../helper/colors';

const ICON_SIZE = constants.hs(30);

const NavigationBar = (props) => {
  const {
    style, leftButtonType, rightButtonType, titleStyle, title, onLeftButtonPress, onRightButtonPress, leftButtonStyle, rightButtonStyle,
  } = props;
  const getIcon = (type) => {
    switch (type) {
      case 'back':
        return <Ionicons name="ios-arrow-back" size={ICON_SIZE} color={colors.white} />;
      case 'menu':
        return <Ionicons name="ios-menu" size={ICON_SIZE} color={colors.white} />;
      case 'add':
        return <Ionicons name="md-add" size={ICON_SIZE} color={colors.white} />;
      case 'logout':
        return <Ionicons name="md-log-out" size={ICON_SIZE} color={colors.white} />;
      default:
        return <View />;
    }
  };
  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity
        activeOpacity={1}
        style={[styles.buttonStyle, leftButtonStyle]}
        onPress={() => onLeftButtonPress && onLeftButtonPress()}
      >
        {getIcon(leftButtonType)}
      </TouchableOpacity>
      <Text style={[styles.titleStyle, titleStyle]}>
        {title}
      </Text>
      <TouchableOpacity
        activeOpacity={1}
        style={[styles.buttonStyle, rightButtonStyle]}
        onPress={() => onRightButtonPress && onRightButtonPress()}
      >
        {getIcon(rightButtonType)}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: constants.statusBarHeight,
    paddingBottom: constants.vs(10),
    paddingHorizontal: constants.hs(5),
    flexDirection: 'row',
    backgroundColor: colors.appBlue,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleStyle: {
    flex: 8,
    textAlign: 'center',
    fontSize: constants.fs(17),
    lineHeight: ICON_SIZE,
    fontWeight: 'bold',
    color: colors.white,
  },
  buttonStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default NavigationBar;

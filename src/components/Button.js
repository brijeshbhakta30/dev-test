import React from 'react';
import {
  Keyboard, StyleSheet, Text, TouchableOpacity,
} from 'react-native';
import constants from '../constants/appConstants';
import colors from '../helper/colors';

const Button = ({
  style, textStyle, title, onPress = constants.emptyFunc,
}) => (
  <TouchableOpacity
    style={[styles.buttonContainer, style]}
    onPress={() => {
      Keyboard.dismiss();
      onPress();
    }}
  >
    <Text style={[styles.textStyle, textStyle]}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: colors.appBlue,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 5,
  },
  textStyle: {
    fontSize: constants.fs(15),
    color: colors.white,
    fontWeight: 'bold',
    marginVertical: constants.hs(10),
    marginHorizontal: constants.hs(25),
  },
});

export default Button;

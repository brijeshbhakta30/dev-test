import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import colors from '../helper/colors';

const FormInput = (props) => {
  const {
    input, meta, placeHolder, ...inputProps
  } = props;
  const isDirty = meta.touched && !meta.active;
  const hasError = meta.touched && (!meta.valid) && meta.error;
  const inputStyle = meta.valid ? styles.valid : styles.invalid;
  const validationStyles = isDirty ? inputStyle : null;
  const placeHolderText = placeHolder || input.name || '';
  return (
    <View>
      <TextInput
        placeholder={placeHolderText}
        {...inputProps}
        style={[styles.textInputStyle, validationStyles, inputProps.style]}
        onChangeText={input.onChange}
        onBlur={input.onBlur}
        onFocus={input.onFocus}
        value={input.value}
        autoCorrect={false}
        underlineColorAndroid="transparent"
      />
      {!!hasError && <Text style={styles.errorMessage}>{meta.error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  textInputStyle: {
    height: 45,
    borderColor: colors.appBlue,
    borderBottomWidth: 1,
    marginBottom: 10,
    backgroundColor: colors.white,
  },
  valid: {
    borderColor: colors.lightGreen,
  },
  invalid: {
    borderColor: colors.errorRed,
  },
  errorMessage: {
    color: colors.errorRed,
  },
});

export default FormInput;

import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { AlertBox, Button, FormInput } from '../../components';
import { REGISTER_FORM } from '../../constants/formConstants';
import { required, validateEmail, validatePassword } from '../../helper/validators';
import { registerUser } from '../../redux/modules/user';
import styles from './styles';

class Register extends Component {
  onRegisterUser = (data) => {
    const { registerUser, navigation } = this.props;
    registerUser(data)
      .then(() => navigation.navigate('App'))
      .catch(err => AlertBox.alert(err.message));
  };

  onLogin = () => {
    this.props.navigation.navigate('Login');
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <View style={styles.container}>
        <Field
          name="name"
          component={FormInput}
          validate={[required]}
          autoCapitalize="none"
          clearButtonMode="while-editing"
        />
        <Field
          name="email"
          component={FormInput}
          validate={[required, validateEmail]}
          autoCapitalize="none"
          clearButtonMode="while-editing"
        />
        <Field
          name="password"
          component={FormInput}
          validate={[required, validatePassword]}
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="while-editing"
        />
        <Field
          name="confirmPassword"
          placeholder="confirm password"
          component={FormInput}
          validate={[required, validatePassword]}
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="while-editing"
        />
        <Text style={styles.loginNow} onPress={this.onLogin}>Already registered?</Text>
        <Button
          title="REGISTER"
          onPress={handleSubmit(this.onRegisterUser)}
          style={styles.registerButton}
        />
      </View>
    );
  }
}

const mapActionToProps = ({
  registerUser,
});

export default reduxForm({ form: REGISTER_FORM })(connect(null, mapActionToProps)(Register));

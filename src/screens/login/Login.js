import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { AlertBox, Button, FormInput } from '../../components';
import { LOG_IN_FORM } from '../../constants/formConstants';
import { required, validateEmail, validatePassword } from '../../helper/validators';
import { loginUser } from '../../redux/modules/user';
import styles from './styles';

class Login extends Component {
  onLoginUser = (data) => {
    const { loginUser, navigation } = this.props;
    loginUser(data)
      .then(() => navigation.navigate('App'))
      .catch(err => AlertBox.alert(err.message));
  };

  onRegister = () => {
    this.props.navigation.navigate('Register');
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <View style={styles.container}>
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
        <Text style={styles.registerNow} onPress={this.onRegister}>Don't have an account? Register Now</Text>
        <Button
          title="LOGIN"
          onPress={handleSubmit(this.onLoginUser)}
          style={styles.loginButton}
        />
      </View>
    );
  }
}

const mapActionToProps = ({
  loginUser,
});

export default reduxForm({ form: LOG_IN_FORM })(connect(null, mapActionToProps)(Login));

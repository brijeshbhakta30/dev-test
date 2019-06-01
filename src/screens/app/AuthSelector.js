import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import storage from '../../helper/storage';
import { addAsyncActivityProcessing, removeAsyncActivityProcessing } from '../../redux/modules/system';
import styles from './styles';

class AuthSelector extends Component {
  constructor(props) {
    super(props);
    this.checkAuth();
  }

  checkAuth = () => {
    const { addAsyncActivityProcessing, removeAsyncActivityProcessing, navigation } = this.props;
    addAsyncActivityProcessing();
    storage.get('LOGGED_IN_USER').then((result) => {
      if (result) {
        navigation.navigate('App');
      } else {
        navigation.navigate('Login');
      }
    }).catch(() => navigation.navigate('Login')).finally(() => {
      removeAsyncActivityProcessing();
    });
  };

  render() {
    return (
      <View style={styles.container} />
    );
  }
}

const mapActionToProps = ({
  addAsyncActivityProcessing,
  removeAsyncActivityProcessing,
});

export default (connect(null, mapActionToProps)(AuthSelector));

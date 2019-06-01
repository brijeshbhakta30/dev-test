import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { AlertBox, Button, NavigationBar } from '../../components';
import { logout } from '../../redux/modules/user';
import styles from './styles';

class Profile extends Component {
  handleLogout = () => {
    const { logout, navigation } = this.props;
    logout()
      .then(() => navigation.navigate('Login'))
      .catch(() => AlertBox.alert('Something went wrong'));
  };

  render() {
    return (
      <View style={styles.container}>
        <NavigationBar title="Profile" />
        <Text style={styles.welcome}>Profile Page</Text>
        <Button title="LOG OUT" style={styles.logout} onPress={this.handleLogout} />
      </View>
    );
  }
}

const mapActionToProps = ({ logout });

export default connect(null, mapActionToProps)(Profile);

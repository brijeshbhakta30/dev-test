import React from 'react';
import { Text, View } from 'react-native';
import { NavigationBar } from '../../components';
import styles from './styles';

const Messages = () => (
  <View style={styles.container}>
    <NavigationBar title="Messages" />
    <Text style={styles.welcome}>Messages Page</Text>
  </View>
);

export default Messages;

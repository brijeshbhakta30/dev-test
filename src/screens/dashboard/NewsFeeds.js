import React from 'react';
import { Text, View } from 'react-native';
import { NavigationBar } from '../../components';
import styles from './styles';

const NewsFeeds = () => (
  <View style={styles.container}>
    <NavigationBar title="News" />
    <Text style={styles.welcome}>News Feeds Page</Text>
  </View>
);

export default NewsFeeds;

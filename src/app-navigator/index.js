/* eslint-disable react/display-name */
import React from 'react';
import Icons from 'react-native-vector-icons/Ionicons';
import { createAppContainer, createBottomTabNavigator, createSwitchNavigator } from 'react-navigation';
import colors from '../helper/colors';
// screens
import AuthSelector from '../screens/app/AuthSelector';
import Home from '../screens/dashboard/Home';
import Messages from '../screens/dashboard/Messages';
import NewsFeeds from '../screens/dashboard/NewsFeeds';
import Profile from '../screens/dashboard/Profile';
import Login from '../screens/login/Login';
import Register from '../screens/register/Register';

const App = createBottomTabNavigator({
  Home,
  NewsFeeds,
  Messages,
  Profile,
}, {
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'Home') {
        iconName = 'ios-home';
      } else if (routeName === 'NewsFeeds') {
        iconName = 'md-today';
      } else if (routeName === 'Messages') {
        iconName = 'ios-mail';
      } else {
        iconName = 'ios-person';
      }
      return <Icons name={iconName} size={25} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: colors.appBlue,
    inactiveTintColor: colors.description,
  },
});

const AuthContainer = createSwitchNavigator({
  AuthSelector,
  Login,
  Register,
  App,
});

const AppContainer = createAppContainer(AuthContainer);
export default AppContainer;

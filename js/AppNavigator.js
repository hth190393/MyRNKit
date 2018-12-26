// import { ScrollView, Button, Image, Text } from 'react-native';
import React from 'react';
import {
  StackNavigator, // eslint-disable-line
  DrawerNavigator, // eslint-disable-line
  TabNavigator, // eslint-disable-line
  StackRouter,
  createNavigationContainer,
  createNavigator,
  createAppContainer,
  createDrawerNavigator,
  createBottomTabNavigator,
  createStackNavigator,
  createSwitchNavigator,
} from 'react-navigation';
import { connect } from 'react-redux';
import { Text, View, Image, Button, StyleSheet } from 'react-native';
import Login from '@js/screens/Login';
import Home from '@js/screens/Home';

console.disableYellowBox = true;
// console.disableYellowBox = true;


const MyDrawerNavigator = createDrawerNavigator(
  {
    Login: {
      screen: Login,
    },
    Home: {
      screen: Home,
    },
  },
  {
    drawerType: 'slide',
    drawerBackgroundColor: 'yellow',
    // drawerWidth: 100,
    drawerOpenRoute: "DrawerOpen",
    drawerCloseRoute: "DrawerClose",
    drawerToggleRoute: "DrawerToggle",
    // drawerBackgroundColor: "transparent",
  }
);

export default createAppContainer(MyDrawerNavigator);

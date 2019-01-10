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
import Test from '@js/screens/Test';

const AuthStack = createStackNavigator(
  {
    Login: {
      screen: Login,
    },
  },
  {
    headerMode: 'none',
  }
);

const MyDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: Home,
    },
    Test: {
      screen: Test,
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
    // initialRouteName: 'Home',
  }
);

const AppStack = createStackNavigator(
  {
    MyDrawerNavigator: {
      screen: MyDrawerNavigator,
    },
  },
  {
    headerMode: 'none',
  }
);

const MyStackRouter = createSwitchNavigator(
  {
    AuthLoading: Login,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);

export default createAppContainer(MyStackRouter);

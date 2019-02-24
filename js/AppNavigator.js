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
import StackViewStyleInterpolator from 'react-navigation-stack/dist/views/StackView/StackViewStyleInterpolator';

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
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    // drawerBackgroundColor: "transparent",
    // initialRouteName: 'Home',
  }
);

const AppStack = createStackNavigator(
  {
    MyDrawerNavigator: {
      screen: MyDrawerNavigator,
    },
    Test1: {
      screen: Test,
    },
  },
  {
    headerMode: 'none',
    mode: 'card',
    transitionConfig: () => ({
      // screenInterpolator: CardStackStyleInterpolator.forHorizontal,
      screenInterpolator: StackViewStyleInterpolator.forHorizontal,
    }),
    navigationOptions: () => ({
    }),
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

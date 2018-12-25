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

console.disableYellowBox = true;
// console.disableYellowBox = true;


class MyHomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('./chats-icon.png')}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    ),
  };

  componentDidMount() {
    // this.props.navigation.setOnNavigatorEvent(() => {
    //   this.props.navigation.toggleDrawer({
    //     side: 'left'     
    //   });
    // })
    this.props.navigation.openDrawer()
    console.log('AAAA', this.props)
  }

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    );
  }
}

class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Notifications',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('./notif-icon.png')}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    ),
  };

  render() {
    return (
      <View style={{ backgroundColor: 'red', height: '100%' }}>
        <SS navigation={this.props.navigation} />
      </View>
    );
  }
}

class MyN extends React.Component {

  render() {
    console.log('TTTTT', this.props)
    return (
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"
      />
    );
  }
}

const mapStateToProps = (state, props) => {
  console.log('WWWW', state)
  return {
    // WARNING: THE FOLLOWING SELECTOR DOES NOT CORRECTLY MEMOIZE
    nav: state.nav,
    s: state.s,
  }
}

const SS = connect(mapStateToProps)(MyN);

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

const MyDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: MyHomeScreen,
    },
    Notifications: {
      screen: MyNotificationsScreen,
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

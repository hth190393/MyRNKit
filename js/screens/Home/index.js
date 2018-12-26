import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { View, Text, TouchableOpacity } from 'react-native';

export default class Login extends Component {
  componentWillMount() {
  }

  openLogin = () => {
    this.props.navigation.navigate('Login')
  }

  render() {
    return (
      <View style={{ backgroundColor: 'red', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity onPress={this.openLogin}>
          <Text>HOME SCREEN</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

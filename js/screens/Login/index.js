import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { View, Text, TouchableOpacity } from 'react-native';

export default class Login extends Component {
  componentWillMount() {
  }

  openHome = () => {
    this.props.navigation.push('Home')
  }

  render() {
    console.log('AAA', this.props)
    return (
      <View style={{ backgroundColor: 'green', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity onPress={this.openHome}>
          <Text>LOGIN SCREEN</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

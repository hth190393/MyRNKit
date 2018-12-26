import React, { PureComponent } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import addNavigationHelpers from 'react-navigation';

import AppNavigator from './AppNavigator';

/*---------------------------------------------------------
 *  Config Redux Store for Navigation State
 *  use connect and create navReducer
 *---------------------------------------------------------*/

const navReducer = (state, action) => AppNavigator.router.getStateForAction(action, state) || state;


// eslint-disable-next-line
class AppWithNavigationState extends PureComponent {
  static propTypes = {
    nav: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
  }

  _dispatch = async () => {

  }

  _popup = (fnName, ...params) => {
    if (this.popup && this.popup[fnName]) { this.popup[fnName](...params); }
  }

  _setPopRef = (ref) => {
    this.popup = ref;
  }

  _getBackKey = (num = 1) => {

  }

  render() {
    const { nav } = this.props;
    return (
      <View style={{ position: 'relative', flex: 1 }}>
        <AppNavigator
          // navigation={{
          //   dispatch: this.props.dispatch,
          //   state: this.props.nav,
          // }}
        />
      </View>
    );
  }
}

const connectAppWithNavigationState = connect(state => ({
  nav: state.nav,
}))(AppWithNavigationState);

export { connectAppWithNavigationState as AppState, navReducer };

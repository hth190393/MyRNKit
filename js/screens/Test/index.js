import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import Lottie from 'lottie-react-native';
// import wiggly from './wiggly.json';
import wiggly from './santa_riding_bike.json';

export default class Anim extends React.Component {
  state = {
    animation: null,
    speed: 1,
  };

  componentWillMount() {
    this._playAnimation();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.animationContainer}>
          {this.state.animation && (
            <Lottie
              ref={animation => {
                this.animation = animation;
              }}
              style={{
                width: 400,
                height: 400,
                backgroundColor: 'black',
              }}
              source={this.state.animation}
              speed={this.state.speed}
              loop={true}
            />
          )}
          <View>
            <Button
              title="Wash the veggies"
              color="#4caf50"
              onPress={this._playAnimation}
            />
            <View style={styles.margin} />
            <Button
              title="Stop washing"
              color="#4caf50"
              onPress={this._stopAnimation}
            />
            <View style={styles.margin} />
            <View style={styles.speedBtnContainer}>
              <Button
                title="Slow"
                color="#4caf50"
                onPress={() => this._changeSpeed(0.5)}
              />
              <View style={styles.marginRight} />
              <Button
                title="Normal"
                color="#4caf50"
                onPress={() => this._changeSpeed(1)}
              />
              <View style={styles.marginRight} />
              <Button
                title="Fast"
                color="#4caf50"
                onPress={() => this._changeSpeed(1.5)}
              />
              <Button
                title="Back"
                color="#4caf50"
                onPress={() => this.props.navigation.pop()}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }

  _changeSpeed = (speed) => {
    this.setState({ speed });
  }

  _playAnimation = () => {
    if (!this.state.animation) {
      this._loadAnimation();
    } else {
      this.animation.reset();
      this.animation.play();
    }
  };

  _stopAnimation = () => {
    this.animation.reset();
  };

  _loadAnimation = () => {
    this.setState({ animation: wiggly }, this._playAnimation);
  };
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  animationContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  speedBtnContainer: {
    flexDirection: 'row',
  },
  margin: {
    height: 10,
  },
  marginRight: {
    width: 5,
  },
});

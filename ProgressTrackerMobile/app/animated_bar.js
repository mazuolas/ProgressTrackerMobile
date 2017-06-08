import React, { Component } from 'react';
import { Animated, Dimensions } from 'react-native';

class AnimatedBar extends Component {
  constructor(props) {
    super(props);
    this.dim = Dimensions.get('window');
    this._width = new Animated.Value(0);
    this.state = {
      color: 'green',
    };
  }

  componentDidMount() {
    this.animateTo(this.props.delay, this.props.value);
  }

  componentWillReceiveProps(nextProps) {
    this.animateTo(nextProps.delay, nextProps.value);
  }

  animateTo = (delay, value) => {

    Animated.sequence([
      Animated.delay(delay),
      Animated.timing(this._width, {
        toValue: value*this.dim.width - 20,
      }),
    ]).start();
  }

  render() {
    const barStyles = {
      backgroundColor: this.state.color,
      height: 40,
      width: this._width,
      borderTopRightRadius: 4,
      borderBottomRightRadius: 4,
    };

    return (
      <Animated.View style={barStyles} />
    );
  }
}

export default AnimatedBar;

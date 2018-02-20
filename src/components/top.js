import React, { Component } from 'react';
import {
  View,
  Image
} from 'react-native';
import styles from '../style/styles';

export default class Top extends Component {
    render() {
    const {
      top
    } = styles;
    return (
      <View style={top}>
        <Image style={{width: 425}} source={require('../../images/jokenpo.png')} />
      </View>
    );
  }
}
import React, { Component } from 'react';
import { 
  Image
} from 'react-native';

export default class Result extends Component {
  render () {
    
    if(this.props.choice === 'Pedra')
      return <Image source={require('../../images/pedra.png')} />
    else if (this.props.choice === 'Papel')
      return <Image source={require('../../images/papel.png')} />
    else if (this.props.choice === 'Tesoura')
      return <Image source={require('../../images/tesoura.png')} />
    else
      return false;
  }
}
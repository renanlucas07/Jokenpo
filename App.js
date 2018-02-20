import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import styles from './src/style/styles';
import Top from './src/components/top';
import Result from './src/components/results';

export default class App extends Component {
  constructor(props) {
     super(props);
     this.state = {
        userChoice: '',
        computerChoice: '',
        result: ''
     };
  }

  getComputerChoice(){
    let num = Math.floor((3*Math.random()));
    switch (num) {
      case 0:
        return 'Pedra';
        break;
      case 1:
        return 'Papel';
        break;
      case 2:
        return 'Tesoura';
        break;
    }
  }

  jokenpo(userChoice){
    let computerChoice = this.getComputerChoice();
    this.setState({
      userChoice:  userChoice,
      computerChoice:  computerChoice,
    });
    if (userChoice === computerChoice) {
      this.setState({
        result:  'Empate!',
      });
    } else if ( (userChoice === 'Pedra'   && computerChoice === 'Tesoura' ) ||
                (userChoice === 'Tesoura' && computerChoice === 'Papel'   ) ||
                (userChoice === 'Papel'   && computerChoice === 'Pedra'   ) ) {
      this.setState({
        result:  'Você Ganhou!',
      });
    } else {
      this.setState({
        result:  'Você Perdeu!',
      });
    }
  }

  render() {
    const {
      container,
      actions,
      results,
      button,
      buttonText
    } = styles;
    return (
      <View style={container}>
        <Top />
        
        <View style={actions}>
          <TouchableOpacity 
            style={button}
            onPress={() => this.jokenpo('Pedra')}
          >
            <Text style={buttonText}>PEDRA</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={button}
            onPress={() => this.jokenpo('Papel')}
          >
            <Text style={buttonText}>PAPEL</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={button}
            onPress={() => this.jokenpo('Tesoura')}
          >
            <Text style={buttonText}>TESOURA</Text>
          </TouchableOpacity>
        </View>

        <View style={results}>
          <Text style={{fontSize: 30, fontWeight: 'bold', color: 'goldenrod', height: 40}}>{this.state.result}</Text>

          <View style={{flex: 1, flexDirection: 'row', marginTop: 20}}>
            <View style={container}>
              <Text style={{margin: 10}}>Escolha do usuário: {this.state.userChoice}</Text>
              <Result choice={this.state.userChoice} player='usuário' />
            </View>
            <View style={container}>
              <Text style={{margin: 10}}>Escolha do computador: {this.state.computerChoice}</Text>
              <Result choice={this.state.computerChoice} player='computador' />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

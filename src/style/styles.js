import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  top: {
    flex: 5,
    paddingTop: 24,
    alignItems: 'center',
    //justifyContent: 'center'
  },
  actions: {
    flex: 2,
    flexDirection: 'row',
    //alignItems: 'center',
    justifyContent: 'center'
  },
  results: {
    flex: 7,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    marginHorizontal: 15,
    backgroundColor: '#1E90FF',
    alignItems: 'center',
    justifyContent: 'center',
    height: 25,
    width: 100,
    padding: 15
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold'
  }
});

module.exports = styles;
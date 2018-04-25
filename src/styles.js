const React = require('react-native')
const { StyleSheet } = React

const constants = {
  actionColor: '#24CE84'
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18
  },
  quote:{
    fontSize: 30,
    fontWeight: '400',
    textAlign: 'center'
  },
  author: {
    fontSize: 18,
    color: 'gray',
    fontStyle: 'italic'
  },
  inputField: {
    height: 50, 
    width: 200,
    borderColor: 'gray', 
    borderWidth: 1
  },
  action: {
    backgroundColor: constants.actionColor,
    borderColor: 'transparent',
    borderWidth: 1,
    paddingLeft: 16,
    paddingTop: 14,
    paddingBottom: 16,
  },
})

module.exports = styles
module.exports.constants = constants;

/*
Resources:
 - https://github.com/vhpoet/react-native-styling-cheat-sheet#text
*/
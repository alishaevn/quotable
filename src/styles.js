const React = require('react-native')
const { StyleSheet } = React

const constants = {
  actionColor: '#24CE84'
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 30
  },
  profile: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 50,
  },
  quotesBox: {
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 350,
    marginTop: 25
  },
  quoteBlock: {
    width: 300,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 4,
    margin: 10,
    paddingHorizontal: 20,
    paddingVertical: 70
  },
  text: {
    fontSize: 18
  },
  homeQuote:{
    fontSize: 30,
    fontWeight: '400',
    textAlign: 'center'
  },
  profileQuote: {
    textAlign: 'center',
    fontSize: 18
  },
  homeAuthor: {
    fontSize: 18,
    color: 'gray',
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: 20
  },
  profileAuthor: {
    textAlign: 'center',
    fontStyle: 'italic',
    fontSize: 14,
    color: 'grey'
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
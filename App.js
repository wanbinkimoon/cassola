import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet, Text, View } from 'react-native';

const Rapallo = styled.Text`
  font-size: 72px;
  transform: rotate(180deg);
`
const TestWrap = styled.View`
  width: 350px;
  height: 230px;
  border-radius: 4px;
  border-left-color: #FFA309;
  border-left-width: 5px;
  background-color: #fff;
  shadow-color: #000;
  shadow-offset: 0px 7px;
  shadow-radius: 3px;
  shadow-opacity: 0.4;
  margin: 34px 0 0 0;
`

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>F A V A</Text>
        <Rapallo>F A V A</Rapallo>
      
      <TestWrap>
        
      </TestWrap>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'tomato',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 72,
    color: '#fff', 

  }
});


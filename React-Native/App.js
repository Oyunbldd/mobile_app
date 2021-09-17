/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function App() {
  return (
    <View >
      <View style={{height: 100, backgroundColor: 'yellow'}}>
        <Text style={{margin: 10}}>H:100</Text>
      </View>
      <View style={[styles.row,{height:520}]}>
        <View style={{flex: 1, backgroundColor: 'blue',justifyContent:'center'}}>
          <Text style={{textAlign:'center'}}>Row : Flex 1</Text>
        </View>
        <View style={[styles.column, {flex: 3}]}>
          <View style={{height:120,backgroundColor:'grey'}}>
            <Text>Row - Flex:3</Text>
            <Text style={{marginTop:30}}>H: 120</Text>
          </View>
          <View style={[{backgroundColor:'green',flex:1,justifyContent:'center'}]}>
            <Text>Col-Flex:1</Text>
          </View>
          <View style={{height:150,backgroundColor:'white',justifyContent:'center'}}>
            <Text>H:150</Text>
          </View>
        </View>
      </View>
      <View style={{backgroundColor: 'red', height: 100 , justifyContent:'center'}}>
        <Text style={{alignSelf: 'center'}}>H:100</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',

  },
});

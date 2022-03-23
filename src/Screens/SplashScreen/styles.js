import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Color} from '../../utils'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.Colors.default,
    alignItems:'center',
    justifyContent:'center'
  },
  logoStyle:{
    height:150,
    width:150,
    resizeMode:'contain'
  }
});

export default styles;

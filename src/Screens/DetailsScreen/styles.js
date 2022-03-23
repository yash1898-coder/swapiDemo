import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { Color, Fonts } from '../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.Colors.default,
    width:'100%'
  },
  mainView:{
   flexDirection:'row',
   width:'70%',
   marginTop:20
  },
  nameText:{
    fontFamily:Fonts.FONTS.MontserratBold,
    fontSize:18,
    color:Color.Colors.white
  },
  textView:{
    width:'70%',
    justifyContent:'space-between',

  },
  manufacturerText:{
    paddingTop:10,
    fontFamily:Fonts.FONTS.MontserratRegular,
    fontSize:15,
    color:Color.Colors.black
  },
  headerView:{
    height:80,
    width:'100%',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:Color.Colors.white,
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20
  },
  headerTitle:{
    fontSize:24,
    fontFamily:Fonts.FONTS.MontserratBold,
    color:Color.Colors.default
  },
  textView1:{
    width:'30%',
    justifyContent:'space-between',
    alignItems:'center'
  },
});

export default styles;

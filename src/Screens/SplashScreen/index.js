import React,{useEffect,useState} from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import styles from './styles';
import {Fonts} from '../../utils'
import Logo from '../../Assets/Logo.png'


export const SplashScreen = ({navigation}) => {

  useEffect(()=>{
    setTimeout(()=>{
      navigation.replace('TabStack')
    },3000)
  },[])

  return (
    <View style={styles.container}>
      <Image style={styles.logoStyle} source={Logo} />
    </View>
  );
};

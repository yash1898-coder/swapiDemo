import React,{useState,useEffect} from 'react';
import {StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen,PlanetScreen,SplashScreen,PeopleScreen,DetailsScreen} from '../Screens'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import fly from '../Assets/fly.png'
import planets from '../Assets/planets.png'
import spaceInvaders from '../Assets/space-invaders.png'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const TabStack = () => {
    return (
      <Tab.Navigator
        initialRouteName="Starships"
        
        tabBarOptions={{
    keyboardHidesTabBar: false,
    showLabel: false,
    style: {
      position: 'absolute',
    },
  }}
  
        screenOptions={{headerShown: false,tabBarStyle:{position: 'absolute',height: 95,
            borderTopColor: '#333333',
            backgroundColor: '#333333',}}}>
        <Tab.Screen
          name="Starships"
          component={HomeScreen}
          screenOptions={{headerShown: false}}
          options={{
          tabBarIcon: ({color, size, focused}) => (
            <View style={[styles.viewStyle,{backgroundColor:focused?'#fff':'#333333'}]}>
               <Image
              style={{
                width: 35,
                height: 35,
                resizeMode: 'contain',
              }}
              source={spaceInvaders}
            />
            </View>
          ),
        }}
        />
        <Tab.Screen
          name="Planet"
          component={PlanetScreen}
          screenOptions={{headerShown: false}}
          options={{
          tabBarIcon: ({color, size, focused}) => (
            <View style={[styles.viewStyle,{backgroundColor:focused?'#fff':'#333333'}]}>
          
            <Image
              style={{
                width: 35,
                height: 35,
                resizeMode: 'contain',
              }}
              source={planets}
            />
          </View>
          ),
        }}
        />
        <Tab.Screen
          name="People"
          component={PeopleScreen}
          screenOptions={{headerShown: false}}
          options={{
          tabBarIcon: ({color, size, focused}) => (
            <View style={[styles.viewStyle,{backgroundColor:focused?'#fff':'#333333'}]}>
            <Image
              style={{
                width: 35,
                height: 35,
                resizeMode: 'contain',
              }}
              source={fly}
            />
            </View>
          ),
        }}
        />
          
       
      </Tab.Navigator>
    );
  };

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{
          headerStyle: {backgroundColor: '#42f44b'},
          headerTintColor: '#fff',
          headerTitleStyle: {fontWeight: 'bold'},
        }}>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TabStack"
          component={TabStack}
          options={{headerShown: false}}
        />
       <Stack.Screen
          name="DetailsScreen"
          component={DetailsScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({
    viewStyle:{height:50,width:50,borderRadius:50,alignItems:'center',justifyContent:'center'}
});

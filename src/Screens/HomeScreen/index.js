import React,{useEffect,useState} from 'react';
import {StyleSheet, Text, View, Image, ScrollView,FlatList,TouchableOpacity} from 'react-native';
import styles from './styles';
import {Fonts} from '../../utils'
import {StarShipApi} from '../../Service/Api'

export const HomeScreen = ({navigation}) => {
 
const [starShipData, setStarShipData] = useState([])

useEffect(()=>{
  const subscribe= navigation.addListener('focus',()=>{
    onGetStarShipData()
  })
},[])

const onGetStarShipData=async()=>{
  const response= await StarShipApi()
  console.log('Get Response:::',response.results)
  setStarShipData(response.results)
}

const renderItem=({item,index})=>{
  return(
    <TouchableOpacity style={styles.mainView} onPress={()=>navigation.navigate('DetailsScreen',{from:'StarShip',item:item})}>
    <View style={styles.textView}>
      <Text style={styles.nameText}>Name: {item.name}</Text>
      <Text style={styles.manufacturerText}>{item.manufacturer}</Text>
      </View>
     
      <View style={styles.textView1}>
        <Text style={styles.manufacturerText}>Cost In Credit:</Text>
        <Text style={styles.manufacturerText}>{item.cost_in_credits}</Text>
        </View>
    </TouchableOpacity>
  )
}

  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Text style={styles.headerTitle}>StarShip</Text>
      </View>

     <FlatList 
     data={starShipData}
     keyExtractor={(item,index)=>index.toString()}
     renderItem={renderItem}
     />
    </View>
  );
};

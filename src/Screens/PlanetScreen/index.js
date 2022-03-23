import React,{useEffect,useState} from 'react';
import {StyleSheet, Text, View, Image, ScrollView,FlatList,TouchableOpacity} from 'react-native';
import styles from './styles';
import {Fonts} from '../../utils'
import {PlanetsApi} from '../../Service/Api'


export const PlanetScreen = ({navigation}) => {
 

  const [starShipData, setStarShipData] = useState([])

  useEffect(()=>{
    const subscribe= navigation.addListener('focus',()=>{
      onGetPlanetData()
    })
  },[])
  
  const onGetPlanetData=async()=>{
    const response= await PlanetsApi()
    console.log('Get Response:::',response.results)
    setStarShipData(response.results)
  }
  
  const renderItem=({item,index})=>{
    return(
      <TouchableOpacity style={styles.mainView}  onPress={()=>navigation.navigate('DetailsScreen',{from:'Planet',item:item})}>
      <View style={styles.textView}>
        <Text style={styles.nameText}>Name: {item.name}</Text>
        <Text style={styles.manufacturerText}>Diameter: {item.diameter}</Text>
        <Text style={styles.manufacturerText}>Climate: {item.climate}</Text>
        </View>
        <View style={styles.textView1}>
        <Text style={styles.manufacturerText}>Population:</Text>
        <Text style={styles.manufacturerText}>{item.population}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>
    <View style={styles.headerView}>
      <Text style={styles.headerTitle}>Planet</Text>
    </View>

   <FlatList 
   data={starShipData}
   keyExtractor={(item,index)=>index.toString()}
   renderItem={renderItem}
   />
  </View>
  );
};

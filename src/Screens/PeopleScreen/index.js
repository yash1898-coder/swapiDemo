import React,{useEffect,useState} from 'react';
import {StyleSheet, Text, View, Image, ScrollView,FlatList,TouchableOpacity} from 'react-native';
import styles from './styles';
import {Fonts} from '../../utils'
import {PeopleApi} from '../../Service/Api'


export const PeopleScreen = ({navigation}) => {
 
  const [starShipData, setStarShipData] = useState([])

  useEffect(()=>{
    const subscribe= navigation.addListener('focus',()=>{
      onGetPeopleData()
    })
  },[])
  
  const onGetPeopleData=async()=>{
    const response= await PeopleApi()
    console.log('Get Response:::',response.results)
    setStarShipData(response.results)
  }
  
  const renderItem=({item,index})=>{
    return(
      <TouchableOpacity style={styles.mainView}  onPress={()=>navigation.navigate('DetailsScreen',{from:'People',item:item})}>
      <View style={styles.textView}>
        <Text style={styles.nameText}>Name: {item.name}</Text>
        <Text style={styles.manufacturerText}>Gender: {item.gender}</Text>
        </View>
        <View style={styles.textView1}>
        <Text style={styles.manufacturerText}>Birth Year:</Text>
        <Text style={styles.manufacturerText}>{item.birth_year}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Text style={styles.headerTitle}>People</Text>
      </View>

     <FlatList 
     data={starShipData}
     keyExtractor={(item,index)=>index.toString()}
     renderItem={renderItem}
     />
    </View>
  );
};

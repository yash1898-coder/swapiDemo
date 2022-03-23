import React,{useEffect,useState} from 'react';
import {StyleSheet, Text, View, Image, ScrollView,FlatList,TouchableOpacity} from 'react-native';
import styles from './styles';
import {Fonts} from '../../utils'
import {StarShipApi} from '../../Service/Api'

export const DetailsScreen = ({navigation,route}) => {
 
const [headerText, setHeaderText] = useState(route.params.from)
const [name,setName] = useState('')
const [modal,setModal] = useState('')
const [description, setDescription] = useState('')
const [cost,setCost] = useState('')
const [length,setLength] = useState('')
const [crew,setCrew] = useState('')
const [passengers,setPassengers] = useState('')
const [cargoCapacity,setCargoCapacity] = useState('')
const [consumables,setConsumables] = useState('')
const [rating,setRating] = useState('')

useEffect(()=>{
  const subscribe= navigation.addListener('focus',()=>{
    onGetStarShipData()
  })
},[])

const onGetStarShipData=async()=>{
    if(route.params.from=='StarShip'){
      setName(route.params.item.name)
      setDescription(route.params.item.manufacturer)
      setModal(route.params.item.model)
      setCost(route.params.item.cost_in_credits)
      setLength(route.params.item.length)
      setCrew(route.params.item.crew)
      
    }
    else if(route.params.from=='People'){
      setName(route.params.item.name)
      setDescription(route.params.item.height)
      setModal(route.params.item.mass)
      setCost(route.params.item.hair_color)
      setLength(route.params.item.skin_color)
      setCrew(route.params.item.eye_color)
      
    }
    else{
      setName(route.params.item.name)
      setDescription(route.params.item.rotation_period)
      setModal(route.params.item.orbital_period)
      setCost(route.params.item.diameter)
      setLength(route.params.item.climate)
      setCrew(route.params.item.gravity)
      
    }
}

  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Text style={styles.headerTitle}>{headerText}</Text>
      </View>
      <View style={styles.mainView}>      
      <Text style={styles.nameText}>Name : </Text>
      <Text style={styles.nameText}>{name}</Text>
      </View>

      <View style={styles.mainView}>      
      <Text style={styles.nameText}>
      {
      route.params.from=='StarShip'?
      'Manufacturer : ':
      route.params.from=='People'?
      'Height : '
      :'Rotation Period : '
      }
       </Text>
      <Text style={styles.nameText}>{description}</Text>
      </View>

      <View style={styles.mainView}>      
      <Text style={styles.nameText}>
      {
      route.params.from=='StarShip'?
      'Model : ':
      route.params.from=='People'?
      'Mass : '
      :'Orbital Period : '
      }
       </Text>
      <Text style={styles.nameText}>{description}</Text>
      </View>

      <View style={styles.mainView}>      
      <Text style={styles.nameText}>
      {
      route.params.from=='StarShip'?
      'Cost In Credits : ':
      route.params.from=='People'?
      'Hair Color : '
      :'Diameter : '
      }
       </Text>
      <Text style={styles.nameText}>{cost}</Text>
      </View>

      <View style={styles.mainView}>      
      <Text style={styles.nameText}>
      {
      route.params.from=='StarShip'?
      'Length : ':
      route.params.from=='People'?
      'Skin Color : '
      :'Climate : '
      }
       </Text>
      <Text style={styles.nameText}>{length}</Text>
      </View>

      <View style={styles.mainView}>      
      <Text style={styles.nameText}>
      {
      route.params.from=='StarShip'?
      'Crew : ':
      route.params.from=='People'?
      'Eye Color : '
      :'Gravity : '
      }
       </Text>
      <Text style={styles.nameText}>{crew}</Text>
      </View>
     
    </View>
  );
};

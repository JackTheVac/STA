import React, { useState, useEffect } from 'react';

import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native';

import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DrinkCard from '../../components/drinkCard';
import { db } from '../../firebase';


const GeneralDrinkScreen = ({route, navigation}) => {

    const {testVar1} = route.params;

    const [imagePull, setImagePull] = useState(null);

    const pullImage = async() => {
    
        const imageRef = db.collection('menu').doc('categories').collection('test').doc(testVar1);
        const finalImage = await imageRef.get();
    
        if(!finalImage.exists)
        {
          console.log("error");
        }else {
          console.log('Document Data:', finalImage.data().downloadURL);
          setImagePull(finalImage.data().downloadURL);
          console.log(imagePull);
        }
    
    
        
      }

    pullImage();

    return(
        <View>
            
            <Text>Drink Screen</Text>
            <Text>{testVar1}</Text>
            <Image source={{ uri: imagePull}}  style={{ width: 200, height: 200 }}/>
            <Text>{imagePull}</Text>
            
            
        </View>
    )
} 

export default GeneralDrinkScreen;
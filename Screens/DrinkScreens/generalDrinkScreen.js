import React, { useState, useEffect } from 'react';

import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native';

import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DrinkCard from '../../components/drinkCard';
import { db } from '../../firebase';
import { FlatList } from 'react-native';
import BottomNavigationBar from '../../components/bottomNavigationBar';



const GeneralDrinkScreen = ({route, navigation}) => {

    

    //const [imagePull, setImagePull] = useState(null);

    // const pullImage = async() => {
    
    //     const imageRef = db.collection('menu').doc('categories').collection('test').doc(testVar1);
    //     const finalImage = await imageRef.get();
    
    //     if(!finalImage.exists)
    //     {
    //       console.log("error");
    //     }else {
    //       console.log('Document Data:', finalImage.data().downloadURL);
    //       setImagePull(finalImage.data().downloadURL);
    //       console.log(imagePull);
    //     }
    
    
        
    //   }

    // pullImage();

    const {testVar1} = route.params;
    const [drinks, setDrinks] = useState([]);

    //Using passed in variable from menu screen (when user clicks on a category the variable changes to said category) 
    //and pulls the collection from firebase and store into drinks array. This function runs once every time the screen is rendered
    useEffect(()=>{
      console.log(testVar1);
      const subscriber = db.collection('menu')
                           .doc('categories')
                           .collection(testVar1)
                           .onSnapshot(querySnapshot => {
                             const drinks = [];

                             querySnapshot.forEach(documentSnapshot =>{
                               drinks.push({
                                   ...documentSnapshot.data(),
                                   key: documentSnapshot.id,
                                 });
                             });

                            setDrinks(drinks);
                            
                           })
                         


      return () => subscriber();

                          
    }, [])

    return(
        <View>
            
  
             <View style={styles.container}>
                        <SafeAreaView style = {styles.header}>
                            <Text style = {styles.titleText} >Menu</Text>
                        </SafeAreaView>
            </View>

            <SafeAreaView style = {styles.SAVcontainer}>
              <FlatList 
                  showsVerticalScrollIndicator={false}
                  showsHorizontalScrollIndicator={false}
                  data = {drinks}
                  renderItem = {({item}) => (
                    <View style = {styles.border}>
                      <DrinkCard
                      name = {item.name}
                      price = {item.price}
                      link = {item.downloadURL}
                      />
                    </View>
                  )}
              />
            </SafeAreaView>

             
            <View>
              <BottomNavigationBar />
            </View>
         


            
        </View>
    )
} 

const styles = StyleSheet.create({
  container: {
      //flex: 1,
      backgroundColor: '#fff',
  },
  header: {
      height: 80,
      //flexDirection: 'row',
      backgroundColor: '#D0112B',
      justifyContent: 'center',
      //alignItems: 'center',  
  },
   titleText: {
      color: '#fff',
      alignSelf: 'center',
      fontSize: 20,
  },
  SAVcontainer: {
    backgroundColor: 'white',
    width: '100%',
    height: Dimensions.get('window').height - 152,
    justifyContent: 'space-around',
    alignItems: 'center',
    //borderWidth: 10
},
 
})

export default GeneralDrinkScreen;
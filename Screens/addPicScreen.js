import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, StyleSheet, SafeAreaView, Text} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';
import * as firebase from 'firebase'
import { db } from '../firebase';


//const testVar = 'lol123';

const AddPicScreen = () => {
    const navigation = useNavigation();

  const [testVar, setTestVar] = useState('');
  
  const [image, setImage] = useState(null);
  const [imagePull, setImagePull] = useState(null);

  

  //ask permission for image library when screen first render
  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);


 
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    //console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
      
    }
    //console.log(result.uri)
    
  };



  //WORKING, setting imagePull to lol123's image
  // const pullImage = async() => {
    
  //   const imageRef = db.collection('menu').doc('categories').collection('test').doc('lol123');
  //   const finalImage = await imageRef.get();

  //   if(!finalImage.exists)
  //   {
  //     console.log("error");
  //   }else {
  //     console.log('Document Data:', finalImage.data().downloadURL);
  //     setImagePull(finalImage.data().downloadURL);
  //     console.log(imagePull);
  //   }


    
  // }



  //listens to when testVar changes variable, then navigate to next page with new variable value
  useEffect( ()  => {
    console.log(testVar);

    if (testVar !== ''){
      navigation.navigate('generalDrinkScreen', {
        testVar1 : testVar
        
      });
    }
    

    return () => {
      setTestVar('')
    }
   
  }, [testVar])
  

  return (

    <View>
        <View style={styles.container}>
                        <SafeAreaView style = {styles.header}>
                            <Text style = {styles.titleText} >Choose a Picture</Text>
                        </SafeAreaView>
        </View>
        <View style={{alignItems: 'center', justifyContent: 'center' }}>

        <Button title="Pick an image from camera roll" onPress={pickImage} />
        {image && 
        <>
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
        <Button  title = "next"
                 onPress = { ()=> navigation.navigate('upload', {image})}
                 link = {image}/>
        </>
        }
       
        {/* For testing purposes  */}
        {/* <Button title = "test for pulling"  onPress = {pullImage}/>
        <Button title = 'test for variable across screen' onPress = {() => setTestVar('lol123')} /> */}

        
        </View>
    </View>
  );
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
})


export default AddPicScreen;

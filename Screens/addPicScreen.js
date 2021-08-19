import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, StyleSheet, SafeAreaView, Text} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';



const AddPicScreen = () => {
    const navigation = useNavigation();

    
  
  const [image, setImage] = useState(null);

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
    console.log(result.uri)
    
  };

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
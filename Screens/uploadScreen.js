
import { TouchableOpacity, View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native';

import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';


import React, { useState, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
// onChooseImagePress = async () => {
//     let result = await ImagePicker.launchCameraAsync();

// }



const UploadScreen = () => {

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

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

    return(
        <View>
            <View style={styles.container}>
                    <SafeAreaView style = {styles.header}>
                        <Text style = {styles.titleText} >Upload</Text>
                    </SafeAreaView>
            </View>

            
            <TouchableOpacity style = {styles.imageContainer}
                onPress = {pickImage}
                >
                <Text style = {styles.imageText}>Upload Image</Text>
            </TouchableOpacity>
                
            {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
            
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
    imageContainer: {
        borderWidth: 5,
        alignSelf: 'center',
        marginTop: 50,
    },
    imageText: {
        fontSize: 20,
    }
})

export default UploadScreen;
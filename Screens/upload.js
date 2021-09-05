import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, StyleSheet, SafeAreaView, Text, TextInput, TouchableOpacity} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import firebase from 'firebase';
require("firebase/firestore")
require("firebase/firebase-storage")

const Upload = (props) =>
{
    const navigation = useNavigation();

    const [name, setName] = useState ("");
    const [price, setPrice] = useState("")
    const [categories, setCategories] = useState("fruitTea")
    const [uploading, setUploading] = useState(false)


    //Upload Image to firestore storage with the path of 'childpath'. 
    //uri is passed in through props.
    const uploadImage = async() => {
        const uri = props.route.params.image;
        const childPath = `drink/${categories}/${name}_${Math.random().toString(36)}`
        
        

        const response = await fetch(uri);
        const blob = await response.blob();

        const task = firebase
                    .storage()
                    .ref()
                    .child(childPath)
                    .put(blob);

        const taskProgress = snapshot => {
            setUploading(true);
            console.log(`transfereed: ${snapshot.bytesTransferred}`)
            
            
        }

        //calls savePostData and past in snapshot
        const taskCompleted = () => {
            
            task.snapshot.ref.getDownloadURL().then((snapshot) => {
                savePostData(snapshot);
                console.log(snapshot);
                
                setUploading(false);
                console.log(uploading);
            })
        }

        const taskError = snapshot => {
            console.log(snapshot)
        }
        
        task.on("state_changed", taskProgress, taskError, taskCompleted)

    }
    
    //called by uploadImage, will save data to firestore
    const savePostData = (downloadURL) => {
        firebase.firestore().collection('menu')
                            .doc('categories')
                            .collection(categories)
                            .doc(name)                       
                            .set({
                                downloadURL,
                                name,
                                price,
                                categories,
                                //creataion: firebase.firestore().FieldValue.serverTimestamp()
                            }).then((function () {
                                navigation.navigate('menuScreen')
                            }))

    }

    return(
        <View>
            <View style={styles.container}>
                        <SafeAreaView style = {styles.header}>
                            <Text style = {styles.titleText} >Edit and Upload</Text>
                        </SafeAreaView>
            </View>

            <View style = {styles.imageBox}>
                <Image style = {styles.image} source = {props.link} />
            </View>

            <TextInput placeholder = "enter drink name" style = {styles.drinkName} onChangeText = {(name) => setName(name)}/>
            <TextInput placeholder = "enter drink price" style = {styles.drinkPrice} onChangeText = {(price) => setPrice(price)} keyboardType='numeric' returnKeyType={ 'done' }/>

            <Picker
                style = {styles.picker}
                selectedValue={categories}
                onValueChange={(categories) =>
                    setCategories(categories)
                }>
             <Picker.Item label="Fruit Tea" value="fruitTea" />
            <Picker.Item label="Milk Tea" value="milkTea" />
            <Picker.Item label="Fresh Milk" value="freshMilk" />
            <Picker.Item label="Signatures" value="signatures" />
            <Picker.Item label="Brewed Tea" value="brewedTea" />
            <Picker.Item label="Ice Blended" value="iceBlended" />
            <Picker.Item label="Seasonal" value="seasonal" />
            <Picker.Item label="Test" value="test" />

            </Picker>

            

            {!uploading ? 
            <TouchableOpacity title = "Upload" onPress = {() => uploadImage()} style = {styles.uploadButton}>
                <Text style = {styles.buttonText}>Upload</Text>
            </TouchableOpacity>
            :
            <View style = {styles.uploadBox} >
                 <Text style = {styles.uploadingText}>
                     Uploading...Please Wait
                </Text>
            </View>}
            

            
           



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
    imageBox: {
        //borderWidth: 5,
        height: 250
    },
    drinkName: {
        alignSelf: 'center',
        borderWidth: 2,
        width: 200,
        height: 30,
        borderRadius: 5,
        backgroundColor: '#E7E7E7',
        
        
    },
    drinkPrice: {
        top: 50,
        alignSelf: 'center',
        borderWidth: 2,
        width: 200,
        height: 30,
        borderRadius: 5,
        backgroundColor: '#E7E7E7'
    },
    uploadButton: {
        alignSelf: 'center',
        borderWidth: 2,
        width: 100,
        top: 200,
        height: 30,
        backgroundColor: '#E7E7E7',
        borderRadius: 5,
    },
    buttonText: {
        alignSelf: 'center',
        top: 5,
    },
    picker: {
        top: 50,
        //borderWidth: 1,
        height: 50,
        width: 200,
        alignSelf: 'center'
    },
    uploadBox: {
        top: 150
    },
    uploadingText:
    {
        alignSelf: 'center'
    }
})



export default Upload;
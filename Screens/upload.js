import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, StyleSheet, SafeAreaView, Text, TextInput, TouchableOpacity} from 'react-native';
import {Picker} from '@react-native-picker/picker';

import firebase from 'firebase';
require("firebase/firestore")
require("firebase/firebase-storage")

const Upload = (props) =>
{
    

    const [name, setName] = useState ("");
    const [price, setPrice] = useState("")
    const [categories, setCategories] = useState("")

    const uploadImage = async() => {
        const uri = props.route.params.image;
        const childPath = `drink/${categories}/${name}${Math.random().toString(36)}`
        

        const response = await fetch(uri);
        const blob = await response.blob();

        const task = firebase
                    .storage()
                    .ref()
                    .child(childPath)
                    .put(blob);

        const taskProgress = snapshot => {
            console.log(`transfereed: ${snapshot.bytesTransferred}`)
        }

        const taskCompleted = () => {
            task.snapshot.ref.getDownloadURL().then((snapshot) => {
                console.log(snapshot)
            })
        }

        const taskError = snapshot => {
            console.log(snapshot)
        }
        
        task.on("state_changed", taskProgress, taskError, taskCompleted)

    }
    

    return(
        <View>
            <View style={styles.container}>
                        <SafeAreaView style = {styles.header}>
                            <Text style = {styles.titleText} >Edit and Upload</Text>
                        </SafeAreaView>
            </View>

            <View style = {styles.imageBox}>
                <Image style = {styles.image} source = {{uri: props.route.params.image}} />
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
            <Picker.Item label="Milk Tea1" value="milkTea1" />
            <Picker.Item label="Milk Tea2" value="milkTea2" />
            <Picker.Item label="Milk Tea3" value="milkTea3" />
            </Picker>

            <TouchableOpacity title = "Upload" onPress = {() => uploadImage()} style = {styles.uploadButton}>
                <Text style = {styles.buttonText}>Upload</Text>
            </TouchableOpacity>

            

            
           



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
    }
})



export default Upload;
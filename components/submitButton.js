import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {TouchableOpacity, SafeAreaView, View, Image, StyleSheet, Text, Animated, TextInput} from 'react-native';


const SubtmitButton = ({title}) => {
    return (
        <View style = {styles.container}>
            <TouchableOpacity style = {styles.buttonBorder}>
                <Text style = {styles.titleText}>{title}</Text>
            </TouchableOpacity>
        </View>

    )




}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
    buttonBorder: {
        backgroundColor: '#E7E7E7',
        height: 40,
        width: 127,
        borderWidth: 1,
        borderRadius: 10,
    },
    titleText: {    
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 5,
        fontSize: 20,
        
        

    },
})


export default SubtmitButton;
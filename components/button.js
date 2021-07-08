import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { TouchableOpacity, SafeAreaView, View, Image, StyleSheet, Text, Animated} from 'react-native';
import { AntDesign } from '@expo/vector-icons'

const BackButton = () => {
    return(
        <TouchableOpacity style = {styles.returnLogo}>
                 <AntDesign name="left" size={24} color="white" />
        </TouchableOpacity>



    )
}

const styles = StyleSheet.create({
    returnLogo:{
        top: 25,
        marginLeft: 10
    },
    

})


export default BackButton;
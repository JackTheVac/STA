import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {TouchableOpacity, SafeAreaView, View, Image, StyleSheet, Text, Animated, TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SubtmitButton = (props) => {
    const navigation = useNavigation();
    return (
        <View style = {styles.container}>
            <TouchableOpacity
            style = {styles.buttonBorder}
            onPress = { ()=> navigation.navigate(props.next)}
            >
                <Text style = {styles.titleText}>{props.title}</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
    
    buttonBorder: {
        backgroundColor: '#D0112B',
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
        color: '#fff'
    },
})


export default SubtmitButton;
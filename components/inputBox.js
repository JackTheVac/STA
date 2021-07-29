import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {TouchableOpacity, SafeAreaView, View, Image, StyleSheet, Text, Animated, TextInput} from 'react-native';



//TWO PROPS: TITLE (Set as string) and HIDE (set as true or false)
//ONE OPTIONAL PROP: onChangeText
const InputBox = (props) => {
    return (
        <>
            <View>
                <Text style = {styles.fieldText}>{props.title}</Text>
                <View style = {styles.inputContainer}>      
                    <TextInput 
                        style = {styles.textInput}
                        secureTextEntry = {props.hide}
                        onChangeText = {props.onChangeText}   
                         />  
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({

    inputContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'   
    },

    fieldText: {
        paddingBottom: 5,
        backgroundColor: '#fff',
        paddingLeft: 88,
    },

    textInput: {
        width: 242,
        height: 48,
        borderWidth: 1,
        backgroundColor: '#E7E7E7',
        borderRadius: 5,
    }
})

export default InputBox;
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {  TouchableOpacity,SafeAreaView, View, Image, StyleSheet, Text, Animated} from 'react-native';
import { AntDesign } from '@expo/vector-icons'
import { Dimensions } from 'react-native';

const BottomNavigationBar = (props) => {
    return (       
        <View style = {styles.container}>
                <TouchableOpacity style = {styles.button}>
                    <AntDesign name="book" size={32} color="white"/>
                    <Text>Menu</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.button}>
                    <AntDesign name="star" size={32} color="white" />
                    <Text>Rewards</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.button}>
                    <AntDesign name="setting" size={32} color="white" />
                    <Text>Settings</Text>
                </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

        height: 72,
        backgroundColor: '#D0112B',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    button: {
        top: 8,
        flexDirection: 'column',
        alignItems: 'center'
    }
});


export default BottomNavigationBar;
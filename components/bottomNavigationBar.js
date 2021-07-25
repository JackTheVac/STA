import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {  TouchableOpacity,SafeAreaView, View, Image, StyleSheet, Text, Animated} from 'react-native';
import { AntDesign } from '@expo/vector-icons'
import { Dimensions } from 'react-native';

const BottomNavigationBar = (props) => {
    return (       
        <View style={styles.container}>
            <View style = {styles.header}>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
       // flexDirection: 'column',
        backgroundColor: '#fff',

    },
    header: {
        height: 72,
        backgroundColor: '#D0112B',
        
    },
});


export default BottomNavigationBar;
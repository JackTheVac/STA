import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { TouchableOpacity, SafeAreaView, View, Image, StyleSheet, Text, Animated} from 'react-native';

const Button = (props) => {
    return(
        <View style = {styles.item}>
            <View style = {styles.button}>
                <TouchableOpacity style = {styles.button}>{props.Text}</TouchableOpacity>
               
            </View>
            
        </View>



    )
}

const styles = StyleSheet.create({
    button: {
        width: 256,
        height: 72,
        backgroundColor: '#D0112B',
    },
    

})


export default Button;
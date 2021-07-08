import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {  TouchableOpacity,SafeAreaView, View, Image, StyleSheet, Text, Animated} from 'react-native';
import { AntDesign } from '@expo/vector-icons'
import BackButton from '../components/button';


const SignUpScreen = () => {
    return (
                
        <View style={styles.container}>
            <View style = {styles.header}>
              <BackButton />
              <Text style = {styles.titleText}>Sign Up</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',

      },
    header: {
        height: 72,
        //flexDirection: 'row',
        backgroundColor: '#D0112B',
        justifyContent: 'center',
        //alignItems: 'center',
      
    },
  
    titleText: {
      color: '#fff',
      alignSelf: 'center',
      fontSize: 20,

    }

        

      
      
    
    
      
});

export default SignUpScreen;
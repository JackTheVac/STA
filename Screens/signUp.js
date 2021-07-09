import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {   KeyboardAvoidingView,TouchableOpacity,SafeAreaView, View, Image, StyleSheet, Text, Animated, KeyboardAvoidingViewBase} from 'react-native';
import Banner from '../components/banner';
import InputBox from '../components/inputBox';
import SubtmitButton from '../components/submitButton';


const SignUpScreen = () => {
    return (
        <>
        <View style = {styles.container}>
        <Banner title = 'Sign Up' />
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
              style = {styles.inputContainer}> 
                <View style = {styles.inputOne}>
                  <InputBox title = 'Phone Number'/>
                </View>
                <View style = {styles.inputOne}>
                  <InputBox title = 'Password'/>
                </View>
                <View style = {styles.inputOne}>
                  <InputBox title = 'Confirm Password'/>
                </View>
                  
               

          
            

            </KeyboardAvoidingView>
            
            <View style = {styles.submitButton}>
              <SubtmitButton title = 'Submit' />
            </View>
            

            <Image 
              source = {require('../assets/images/boba_icon.png')} 
              style = {styles.boba_icon}
            /> 
                


        </View>
           







        </>
              



    )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
    
    inputContainer: {
      flexDirection: 'column',
      marginTop: 30,
      backgroundColor: '#fff',

 
    },
    inputOne:{
      marginTop: 10,

    },
    submitButton: {
      marginTop: 52,
      alignItems: 'center',
      //borderWidth: 1,
      backgroundColor: '#fff'
    },

    boba_icon : {
      width: 378,
      height: 372,
      transform: [{rotate: '15.91 deg'}],
      //borderWidth: 5,
      right: 130,
      bottom : 54,
    }
    
        

      
      
    
    
      
});

export default SignUpScreen;
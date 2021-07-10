import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {  KeyboardAvoidingView ,SafeAreaView, View, Image, StyleSheet, Text, Animated, KeyboardAvoidingViewBase} from 'react-native';
import Banner from '../components/banner';
import InputBox from '../components/inputBox';
import SubtmitButton from '../components/submitButton';


const SignInScreen = () => {
    return (
        <>      
        <View style={styles.container}>
          <Banner 
            title = 'Sign In'
            lastPage = 'firstMainScreen'
                   />
          
          <KeyboardAvoidingView 
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style = {styles.inputContainer}
          >
            <View style = {styles.inputBoxOne}>
                  <InputBox title = 'Phone Number'/>
            </View>
            <View style = {styles.inputBoxTwo}>
                  <InputBox title = 'Password'/>
            </View>

          </KeyboardAvoidingView>
          

          <View style = {styles.submitButton}>
              <SubtmitButton title = 'Sign In' />
          </View>
          

          <Image 
            source =  {require('../assets/images/strawberry.png')}
            style = {styles.strawberry}
          />

          <Image 
            source =  {require('../assets/images/orange.png')}
            style = {styles.orange}
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
          backgroundColor: '#fff',
      },

      inputBoxOne: {
        marginTop: 50,
      },
      inputBoxTwo: {
        marginTop: 42,
      },
      submitButton: {
        marginTop: 52,
        alignItems: 'center',
        //borderWidth: 1,
        backgroundColor: '#fff'
      },
      strawberry: {
        height: 227.52,
        width: 250,
        transform: [{rotate: '-9.73 deg'}],
        //borderWidth: 2,
        right: 35,
        bottom: 10,
      },
      orange: {
        width: 250,
        height: 250,
        //borderWidth: 1,
        bottom: 130,
        left: 180,
        transform: [{rotate: '7.85 deg'}],
       
      }
    
});

export default SignInScreen;
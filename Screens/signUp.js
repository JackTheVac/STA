import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {   KeyboardAvoidingView,TouchableOpacity,SafeAreaView, View, Image, StyleSheet, Text, Animated, KeyboardAvoidingViewBase} from 'react-native';
import Banner from '../components/banner';
import InputBox from '../components/inputBox';
import Input from 'react-native-elements'
import SubtmitButton from '../components/submitButton';
import { useNavigation } from '@react-navigation/native';
import {auth} from '../firebase'



const SignUpScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const signUp = async() => {
      try{
        //auth().createUserWithEmailAndPassword(email,password)
        await auth.createUserWithEmailAndPassword(email,password)
        navigation.navigate('rewardsScreen')  
      }catch(err){
        setError(err.message)
      } 
    }

    
    return (
        <>
        <View style = {styles.container}>
        <Banner 
          title = 'Sign Up' 
          lastPage = 'firstMainScreen'
            />
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
              style = {styles.inputContainer}> 
                  <View style = {styles.inputOne}>
                    <InputBox 
                      title = 'Email'
                      value = {email}
                      onChangeText = {setEmail}
                      hide = {false}
                    />
                  </View>
                  <View style = {styles.inputOne}>
                    <InputBox
                      title = 'Password'
                      value = {password}
                      onChangeText= {setPassword}
                      hide = {true}
                    />
                  </View>
                  <View style = {styles.inputOne}>
                    <InputBox 
                      title = 'Confirm Password'
                      hide = {true}/>
                  </View>
            </KeyboardAvoidingView>

            {
          error?
          <Text style = {styles.errorMessage}>{error}</Text>
          :null
        }
            
            <View style = {styles.submitButton}>
              <View style = {styles.buttonContainer}>
                <TouchableOpacity
                style = {styles.buttonBorder}
                onPress = { ()=> signUp()}
                >
                    <Text style = {styles.titleText}>Sign Up</Text>
                </TouchableOpacity>
              </View>
            </View>
            

            <Image 
              source = {require('../assets/images/boba_icon.png')} 
              style = {styles.boba_icon}
            /> 
                


        </View>
           

        {
          error?
          <Text style = {{color:'red'}}>{error}</Text>
          :null
        }





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
      bottom : -10,
    },

    buttonContainer: {
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
  
  errorMessage: {
    color: 'red',
    alignSelf: 'center',
    top: 20,
  }
      
      
    
    
      
});

export default SignUpScreen;
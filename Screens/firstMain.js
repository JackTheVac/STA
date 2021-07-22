import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {  SafeAreaView, View, Image, StyleSheet, Text, Animated} from 'react-native';
import BackButton from '../components/backButton';
import SubmitButton from '../components/submitButton';


const FirstMainScreen = () => {

    
    return (
                
        <View style={styles.container}>
           <Image 
              source = {require('../assets/images/STimg.jpeg')} 
              style = {styles.topImage}
            />
            <View style = {styles.horView}>
              <Image
                source ={require('../assets/images/drink_box.png')}
                style = {styles.horFirst}
              />
              <Image
                source = {require('../assets/images/drink_pic.jpg')}
                style = {styles.horSecond}
              />
            </View>
            
            <Image 
              source = {require('../assets/images/stLogo.png')}
              style = {styles.stLogo}
            />

           <View style = {styles.logInButton}>
             <SubmitButton 
               title = "Sign In"
               next = "signInScreen"
             />
           </View>

           <View style = {styles.signUpButton}>
             <SubmitButton 
               title = 'Sign Up'
               next ='signUpScreen'
              />
           </View>



            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        
        flex: 1,
      },
    topImage: {
        height: 232,
        width: 420,
        alignSelf: 'center',
      //  borderWidth: 2,
      },
    horView : {
      flexDirection: 'row',
    },
      stLogo: {
        height: 94,
        width: 356,
        alignSelf: 'center',
        bottom: 320,
       // borderWidth: 1,

        },
      horFirst: {
          height: 277,
          width: 211,

        },
      horSecond: {
          height: 277,
          width: 211,
        },
      logInButton: {
       // borderWidth: 2,
        alignSelf: 'center',
        bottom: 40,
      },

      signUpButton : {
        //borderWidth: 2,
        alignSelf : 'center',
        bottom: 0,
      }
    
      
});

export default FirstMainScreen;
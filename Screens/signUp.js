import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {  SafeAreaView, View, Image, StyleSheet, Text, Animated} from 'react-native';
import Button from '../components/button';


const SignUpScreen = () => {
    return (
                
        <View style={styles.container}>
            <View style = {styles.header}>
              <Text style = {styles.titleText}>Sign Up</Text>
            </View>


            
            <SafeAreaView> 
              <View style = {styles.loadingWrapper}>
              {/* <Button text = {'Test'} /> */}
                  <Image 
                  source={require('../assets/images/signUpBG.png')}
                  style = {styles.signUpBG} />
              </View>
           
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center',
      },
      firstMainWrapper:{
    
        paddingHorizontal: 20,
    
      },
      signUpBG: {
        flex: 1,
        width: 375,
        height: 812,
        alignContent: 'center',
        resizeMode: 'contain',
        

      
      },

    
    
      
});

export default SignUpScreen;
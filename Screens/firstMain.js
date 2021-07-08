import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {  SafeAreaView, View, Image, StyleSheet, Text, Animated} from 'react-native';
import Button from '../components/button';


const FirstMainScreen = () => {
    return (
                
        <View style={styles.container}>
            
            <SafeAreaView> 
              <View style = {styles.loadingWrapper}>
              {/* <Button text = {'Test'} /> */}
                  <Image 
                  source={require('../assets/images/firstMainBG.png')}
                  style = {styles.mainBG} />
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
      mainBG: {
        width: 375,
        height: 812,
      
      },
      bottomLoading: {
        width: 403,
        height: 306,
        alignItems: 'center',
        marginLeft: 60,
    
    
    
      }
});

export default FirstMainScreen;
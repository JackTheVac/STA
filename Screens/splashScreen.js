import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {  SafeAreaView, View, Image, StyleSheet, Text, Animated} from 'react-native';


const SplashScreen = () => {
    return (
                
        <View style={styles.container}>
            
            <SafeAreaView> 
            <View style = {styles.loadingWrapper}>
                <Image 
                source={require('../assets/images/logo_4.png')}
                style = {styles.topLoading} />
            
                <Image 
                source={require('../assets/images/mascot.png')}
                style = {styles.bottomLoading} />
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
      loadingWrapper:{
        flexDirection: 'column',
        paddingHorizontal: 20,
    
      },
      topLoading: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 545,
        height: 336,
      },
      bottomLoading: {
        width: 403,
        height: 306,
        alignItems: 'center',
        marginLeft: 60,
    
    
    
      }
});

export default SplashScreen;
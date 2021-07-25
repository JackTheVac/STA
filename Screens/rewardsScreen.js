import React from 'react';
import QR from '../components/qrBox';
import StampBar from '../components/progressBar'
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native';
import BottomNavigationBar from '../components/bottomNavigationBar';


const rewardsScreen = () =>{
    return(
        <View>
        <SafeAreaView style = {styles.container}>
            
            <View style = {styles.stampBarSpace}>
                <Text style = {styles.textContainer}> Stamp Count: {getStampCount()} </Text>
                    <StampBar stampCount = {2}/>
                <Text style = {styles.textContainer}> Purchase at least {10 - getStampCount()} more drinks to receive your free drink! </Text>
            </View>


                <View style = {styles.qrContainer}>
                    <QR uuid='userUUID'/>
                </View>

                <View style = {styles.bottomContainer}>
                    <BottomNavigationBar/>
                </View>
            
       
           
           
            
        </SafeAreaView>
          
            
        </View>
        
    );
}

function getStampCount() {
    return 2
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
     
    },
    stampBarSpace: {
      
        borderWidth: 10,
    },
    qrContainer: {   
        top: 50,
        borderWidth: 10,


    },
  
    textContainer: {
        textAlign: 'center',
    },
    navigationFooter: {
        borderWidth: 20,
        
    },
    bottomContainer: {
        top: 10,
        borderWidth: 10
        
        
       
    },
    
});

export default rewardsScreen;


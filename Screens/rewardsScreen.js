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
                <QR uuid='userUUID' styles = {styles.qr} />
            </View>
            
            <View style = {styles.bottomContainer}>
                <BottomNavigationBar style = {styles.navigationFooter}/>
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
        // justifyContent: 'space-between',
    },
    stampBarSpace: {
        justifyContent: 'space-between',
        borderWidth: 10,
    },
    qrContainer: {
        //alignItems: 'center',
        justifyContent: 'space-between',
        top: 50,
        borderWidth: 10,
    },
    qr: {
        // justifyContent: 'center',
        // top: '70',
    },
    textContainer: {
        textAlign: 'center',
    },
    navigationFooter: {
        borderWidth: 20,
        
    },
    bottomContainer: {
        borderWidth: 10,
        position: 'absolute', //Here is the trick
        bottom: 0, //Here is the trick
    }
});

export default rewardsScreen;


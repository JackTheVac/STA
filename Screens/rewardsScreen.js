import React from 'react';
import QR from '../components/qrBox';
import StampBar from '../components/progressBar'
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native';
import BottomNavigationBar from '../components/bottomNavigationBar';
import { Dimensions } from 'react-native';


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
            
            
            
        </SafeAreaView>
        <BottomNavigationBar/>
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
        height: Dimensions.get('window').height - 72,
    },
    stampBarSpace: {
        justifyContent: 'space-between',
    },
    qrContainer: {
        justifyContent: 'space-between',
        top: 50,
    },
    textContainer: {
        textAlign: 'center',
    },
    navigationFooter: {
        borderWidth: 20,
        
    },
});

export default rewardsScreen;


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
                <StampBar stampCount = {2} styles = {styles.bar}/>
                <Text style = {styles.textContainer}> Purchase at least {10 - getStampCount()} more drinks to receive your free drink! </Text>
            </View>
            <View style = {styles.qrContainer}>
                <QR uuid='userUUID' styles = {styles.qr} />
            </View>
        </SafeAreaView>
        <BottomNavigationBar style = {styles.navigationFooter}/>
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
    },
    bar: {
        // position: 'relative',
        // justifyContent: 'center',
        // top: '50',
    },
    qrContainer: {
        justifyContent: 'space-around',
    },
    qr: {
        // justifyContent: 'center',
        // top: '70',
    },
    textContainer: {
        textAlign: 'center',
    },
    navigationFooter: {
    }
});

export default rewardsScreen;


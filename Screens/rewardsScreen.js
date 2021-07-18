import React from 'react';
import QR from '../components/qrBox';
import StampBar from '../components/progressBar'
import { View, Text, StyleSheet } from 'react-native';


const rewardsScreen = () =>{
    return(
        <View styles = {styles.container}>
            <StampBar stampCount = {2} styles = {styles.bar}/>
            <QR uuid='userUUID' styles = {styles.qr} />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
    bar: {
        position: 'relative',
        justifyContent: 'center',
    },
    qr: {
        justifyContent: 'center',
    }
});

export default rewardsScreen;


import React from 'react';
import QR from '../components/qrBox'
import { View, Text, StyleSheet } from 'react-native';


const rewardsScreen = () =>{


    return(
        <QR uuid='userUUID' styles = {styles.container}/>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        alignItems: 'center',
        paddingTop: 20
    },
});

export default rewardsScreen;


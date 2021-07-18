import React from 'react';
import QR from '../components/qrBox';
import StampBar from '../components/progressBar'
import { View, Text, StyleSheet } from 'react-native';


const rewardsScreen = () =>{
    return(
        <View>
            <QR uuid='userUUID' styles = {styles.container}/>
            <StampBar stampCount = {2}/>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        alignItems: 'center',
        paddingTop: 20
    },
    bar: {
        position: 'relative',
        top: 'center',
    }
});

export default rewardsScreen;


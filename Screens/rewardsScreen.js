import React from 'react';
import QR from '../components/qrBox'
import { View, Text, StyleSheet } from 'react-native';


const rewardsScreen = () =>{


    return(
        <View>
            <QR uuid='userUUID'/>
        </View>
    );
}


const styles = StyleSheet.create({

});

export default rewardsScreen;


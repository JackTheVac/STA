import React from 'react';
import QR from '../components/qrBox';
import StampBar from '../components/progressBar'
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';


const rewardsScreen = () =>{
    return(
        <>
        <View style = {styles.container}>
        <SafeAreaView style = {styles.safeAreaContainer}>

        </SafeAreaView>
        
            
            <View style = {styles.stampBarBox}>
                <StampBar stampCount = {2}/>
            </View>
            
            <View style = {styles.textUpdateBox}>
                <Text>dawdwadawd</Text>
            </View>

            <View style = {styles.QRBox}>
            <QR uuid='userUUID' style = {styles.QRcontainer}/>
            </View>


        </View>
        </>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderWidth: 3
    },
    safeAreaContainer: {
        backgroundColor: '#fff',


    },
    stampBarBox: {
       
    },

});

export default rewardsScreen;


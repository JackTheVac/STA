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
                        <StampBar stampCount = {getStampCount()}/>
                    <Text style = {styles.textContainer}> {message()} </Text>
                </View>

                <View style = {styles.qrContainer}>
                    <QR uuid='userUUID'/>
                </View>

            </SafeAreaView>

            <View style = {styles.bottomContainer}>
                <BottomNavigationBar/>
            </View>

        </View>
        
    );
}

function getStampCount() {
    return 2
    // actual code will pull from firebase
}

function message(){
    if (getStampCount() == 9){
        return 'Purchase at least 1 more drink to receive your next free drink!'
    }
    else if(getStampCount() < 9){
        return 'Purchase at least ' + (10 - getStampCount()) + ' more drinks to receive your next free drink!'
    }
    else{
        return 'You\'ve earned a free drink on your next visit!'
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',
        height: Dimensions.get('window').height - 72,
        justifyContent: 'space-around',
    },
    stampBarSpace: {
        justifyContent: 'space-around',
    },
    qrContainer: {
    },
    textContainer: {
        textAlign: 'center',
        borderWidth: 20,
        borderColor: 'white'
    },
    navigationFooter: {
        borderWidth: 20,
    },
});

export default rewardsScreen;


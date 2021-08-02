import React from 'react';
import QR from '../components/qrBox';
import StampBar from '../components/progressBar'
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native';
import BottomNavigationBar from '../components/bottomNavigationBar';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Banner from '../components/banner';

const MenuScreen = () => {
    return(
        <View>
            <View style={styles.container}>
                <View style = {styles.header}>
                    <Text style = {styles.titleText} >Menu</Text>
                </View>
            </View>


        <View>
        
        </View>


        </View>
        
    );
}


const styles = StyleSheet.create({
    container: {
        //flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        height: 72,
        //flexDirection: 'row',
        backgroundColor: '#D0112B',
        justifyContent: 'center',
        //alignItems: 'center',  
    },
    titleText: {
      color: '#fff',
      alignSelf: 'center',
      fontSize: 20,
    }   
});

export default MenuScreen;
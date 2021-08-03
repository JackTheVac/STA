import React from 'react';
import QR from '../components/qrBox';
import StampBar from '../components/progressBar'
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native';
import BottomNavigationBar from '../components/bottomNavigationBar';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CategoryBox from '../components/categoryBox';


const MenuScreen = () => {
    return(
        <View style = {styles.bigContainer}>
             <View style={styles.container}>
                    <View style = {styles.header}>
                        <Text style = {styles.titleText} >Menu</Text>
                    </View>
                </View>
            <SafeAreaView style = {styles.SAVcontainer}>

                <ScrollView>
                    <View style = {styles.firstRow}>
                        <View style = {styles.fruitTea}>
                            <CategoryBox title = 'Fruit Tea'/> 
                        </View>

                        <View style = {styles.milkTea}>
                            <CategoryBox title = 'Milk Tea'/> 
                        </View>
                        
                    
                    </View>
                    
                </ScrollView> 

            </SafeAreaView>

            <View style = {styles.bottomContainer}>
                <BottomNavigationBar/>
            </View>
           

        </View>
        
    );
}


const styles = StyleSheet.create({
    bigContainer: {
        //borderWidth: 10
    },
    SAVcontainer: {
        backgroundColor: 'white',
        width: '100%',
        height: Dimensions.get('window').height - 144,
        justifyContent: 'space-around',
        //borderWidth: 10
    },
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
    },
    firstRow: {
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    fruitTea:{
       marginLeft: 21,
       marginTop: 45,  
    },
    milkTea: {
        marginTop: 45,
        marginRight: 33,
       
    },

});

export default MenuScreen;
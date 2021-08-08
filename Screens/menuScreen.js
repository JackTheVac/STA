import React from 'react';
import QR from '../components/qrBox';
import StampBar from '../components/progressBar'
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native';
import BottomNavigationBar from '../components/bottomNavigationBar';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CategoryBox from '../components/categoryBox';
import FruitIcon from '../assets/images/fruitLogo.png'
import MilkTeaIcon from '../assets/images/milkteaLogo.png'
import FreshMilkIcon from '../assets/images/milk.png'
import SignatureIcon from '../assets/images/lemon.png'

const MenuScreen = () => {
    return(
        <View style = {styles.bigContainer}>
             <View style={styles.container}>
                    <SafeAreaView style = {styles.header}>
                        <Text style = {styles.titleText} >Menu</Text>
                    </SafeAreaView>
                </View>
            <SafeAreaView style = {styles.SAVcontainer}>

                <ScrollView>
                    <View style = {styles.firstRow}>
                        <View style = {styles.fruitTea}>
                            <CategoryBox 
                                title = 'Fruit Tea' 
                                icon = {FruitIcon} 
                                style = {{height: 111, width: 97, alignSelf:  'center', marginTop: 5}} /> 
                        </View>

                        <View style = {styles.milkTea}>
                            <CategoryBox 
                                title = 'Milk Tea'
                                icon = {MilkTeaIcon}
                                style = {{height: 110, width: 119, alignSelf: 'center', marginTop: 5}}
                                /> 
                        </View>
                    </View>
                    <View style = {styles.secondRow}>
                        <View style = {styles.freshMilk}>
                            <CategoryBox
                                title = 'Fresh Milk'
                                icon = {FreshMilkIcon}
                                style = {{height:110, width: 106, alignSelf: 'center', marginTop: 7}}
                                />
                        </View>

                        <View style = {styles.signature}>
                            <CategoryBox
                                title = 'Signatures'
                                icon = {SignatureIcon}
                                style = {{height: 110, width: 117, alignSelf: 'center', marginTop: 5}}
                                />
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
        height: Dimensions.get('window').height - 152,
        justifyContent: 'space-around',
        alignItems: 'center'
        //borderWidth: 10
    },
    container: {
        //flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        height: 80,
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
      
       paddingRight: 28,
       marginTop: 45,  
    },
    milkTea: {
        marginTop: 45,
        paddingLeft: 28,
       
    },
    secondRow: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 40,
        //borderWidth: 5,
    }

});

export default MenuScreen;
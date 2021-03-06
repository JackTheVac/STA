import React from 'react';
import QR from '../components/qrBox';
import StampBar from '../components/progressBar'
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native';
import BottomNavigationBar from '../components/bottomNavigationBar';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CategoryBox from '../components/categoryBox';
import FruitIcon from '../assets/images/fruitLogo.png'
import MilkTeaIcon from '../assets/images/milkteaLogo.png'
import FreshMilkIcon from '../assets/images/milk.png'
import SignatureIcon from '../assets/images/lemon.png'
import BrewedTeaIcon from '../assets/images/brewedTeaLogo.png'
import IceBlendedIcon from '../assets/images/iceBlendedLogo.png'
import SeasonalIcon from '../assets/images/seasonalLogo.png'
import { TouchableOpacity } from 'react-native-gesture-handler';
import AddIcon from '../assets/images/addIcon.png'

const MenuScreen = () => {



    const navigation = useNavigation();


    return(
        <View style = {styles.bigContainer}>
             <View style={styles.container}>
                    <SafeAreaView style = {styles.header}>
                        <Text style = {styles.titleText} >Menu</Text>
                        <View style = {styles.button}>
                            <TouchableOpacity style = {styles.addButton}
                             onPress = { ()=> navigation.navigate('addPicScreen')}>
                                <Image source = {AddIcon} style = {styles.addIconStyle }/>
                            </TouchableOpacity>
                        </View>
                    </SafeAreaView>
             </View>

            <SafeAreaView style = {styles.SAVcontainer}>

                <ScrollView
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}>
                    <View style = {styles.firstRow}>
                        <View style = {styles.fruitTea}>
                            <CategoryBox 
                                title = 'Fruit Tea' 
                                icon = {FruitIcon} 
                                style = {{height: 111, width: 97, alignSelf:  'center', marginTop: 5}}
                                next = 'fruitTeaScreen'
                                path = 'fruitTea' /> 
                        </View>
                        <View style = {styles.milkTea}>
                            <CategoryBox 
                                title = 'Milk Tea'
                                icon = {MilkTeaIcon}
                                style = {{height: 110, width: 119, alignSelf: 'center', marginTop: 5}}
                                next = 'milkTea'
                                path = 'milkTea'
                                /> 
                        </View>
                    </View>
                    <View style = {styles.secondRow}>
                        <View >
                            <CategoryBox
                                title = 'Fresh Milk'
                                icon = {FreshMilkIcon}
                                style = {{height:110, width: 106, alignSelf: 'center', marginTop: 7}}
                                next = 'freshMilkScreen'
                                path = 'freshMilk'
                                />
                        </View>

                        <View >
                            <CategoryBox
                                title = 'Signatures'
                                icon = {SignatureIcon}
                                style = {{height: 110, width: 117, alignSelf: 'center', marginTop: 5}}
                                next = 'signatureScreen'
                                path = 'signatures'
                                />
                        </View>
                    </View>

                    <View style = {styles.thirdRow}>
                        <View >
                            <CategoryBox
                                title = 'Brewed Tea'
                                icon = {BrewedTeaIcon}
                                style = {{height:100, width: 100, alignSelf: 'center', marginTop: 10}}
                                next = 'brewedTeaScreen'
                                path = 'brewedTea'
                                />
                        </View>
                        <View>
                            <CategoryBox
                                title = 'Ice Blended'
                                icon = {IceBlendedIcon}
                                style = {{height: 103, width: 100, alignSelf:'center', marginTop: 7}}
                                next = 'iceBlendedScreen'
                                path = 'iceBlended'
                                />
                        </View>
                    </View>

                    <View style = {styles.fourthRow}>
                        <CategoryBox
                            title = 'Seasonal'
                            icon = {SeasonalIcon}
                            style = {{height: 100, width: 100, alignSelf: 'center', marginTop: 10}}
                            next = 'seasonalScreen'
                            path = 'seasonal'
                            />
                    </View>
                    
                </ScrollView> 

            </SafeAreaView>

            <View >
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
        alignItems: 'center',
        //borderWidth: 10
    },
    container: {
        //flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        height: 80,
        flexDirection: 'row',
        backgroundColor: '#D0112B',
        justifyContent: 'center',
        //alignItems: 'center',  
    },
    titleText: {
      color: '#fff',
      alignSelf: 'center',
      fontSize: 20,
      left: 20
    },
    firstRow: {
        marginTop: -20,
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
    },
    thirdRow: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 40,
        //borderWidth: 5,
    },
    fourthRow: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 40,
        marginBottom: 20
        //borderWidth: 5,
    },
    addButton: {
       // left: 100,
        //borderWidth: 1,
        height: 63,
        width: 44,
    },
    addIconStyle: {
        //borderWidth: 1,
        height: 50,
        width: 44,
        
    },
    button: {
        left: 130,
    }


});

export default MenuScreen;
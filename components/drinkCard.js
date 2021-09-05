import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { TouchableOpacity, SafeAreaView, View, Image, StyleSheet, Text, Animated} from 'react-native';
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';



//PROPS TO PASS INTO DRINK CARD
//link: for image
//name: drink name
//price: drink price
const DrinkCard = (props) => {
    return (
        <View style = {styles.outLine}>

            <View style = {styles.imageBox}>
                <Image 
                source = {{ uri: props.link}} 
                style = {styles.imageStyle} />
            </View>

            <View style = {styles.rightSide}>
                <View style = {styles.textBox}>
                    <Text style = {styles.nameStyle} >{props.name}</Text>
                </View>

                <View style = {styles.priceBox}>
                    <Text style = {styles.priceStyle}>${props.price}</Text>
                </View>
                
            </View>
            
        </View>
    )
}


const styles = StyleSheet.create({
    outLine: {
        marginTop: 20,
        backgroundColor: '#FFE5E5',
        borderWidth: 1,
        width: 335,
        height: 149,
        alignSelf: 'center',
        borderRadius: 20,
        marginBottom: 5,
        flexDirection: 'row',
    },
    imageBox: {
        width: 149,
        height: 151,
        borderRadius: 20,
    },
    imageStyle: {
        alignSelf: 'center',
        width: 149,
        height: 147,
        borderRadius: 20,
        borderWidth: 3,
    },
    nameStyle : {
        alignSelf: 'center',
        fontSize: 25,
        textAlign: 'center'


    },
    rightSide: {
        flexDirection: 'column',
        //borderWidth: 3,
        width: 180
    },
    textBox: {
        //borderWidth: 1,
        height: 60,
        marginTop: 31,
    },
    priceBox: {
        //borderWidth: 1,
        marginTop: 25,
        marginLeft: 119,
    },
    priceStyle:{
        alignSelf: 'center',
        fontSize: 18,
    }
    
})
export default DrinkCard;
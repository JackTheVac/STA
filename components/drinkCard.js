import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { TouchableOpacity, SafeAreaView, View, Image, StyleSheet, Text, Animated} from 'react-native';
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';


const DrinkCard = (props) => {
    return (
        <View style = {styles.outLine}>

        </View>
    )
}


const styles = StyleSheet.create({
    outLine: {
        backgroundColor: '#FFE5E5',
        borderWidth: 1,
        width: 335,
        height: 149,
        alignSelf: 'center',
        borderRadius: 20,
    }
})
export default DrinkCard;
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { TouchableOpacity, SafeAreaView, View, Image, StyleSheet, Text, Animated} from 'react-native';
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';


const BackButton = (props) => {
    const navigation = useNavigation();
    return(
        <TouchableOpacity 
            style = {styles.returnLogo}
            onPress = { ()=> navigation.navigate(props.lastPage)}>
                 <AntDesign name="left" size={24} color="white" />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    returnLogo:{
        top: 25,
        marginLeft: 10,
        width: 20,
    },
})


export default BackButton;
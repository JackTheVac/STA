import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { TouchableOpacity, SafeAreaView, View, Image, StyleSheet, Text, Animated} from 'react-native';
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';


const CategoryBox = (props) => {
    const navigation = useNavigation();
    return(
    <View>
         <TouchableOpacity style = {styles.box}>
            <Image source = {props.icon} style = {{...props.style}} />
            <Text style = {styles.titleText}>{props.title}</Text>
        </TouchableOpacity>
    </View>
   
     
    )
}


const styles = StyleSheet.create({
    box: {
        width:145,
        height:156,
        backgroundColor: '#FFCACA',
        borderRadius: 20,
    },
    titleText: {
        //borderWidth: 10,
        alignSelf: 'center',
        paddingTop: 10,
        fontSize: 20,
        
    },




});

export default CategoryBox
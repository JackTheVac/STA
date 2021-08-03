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
        alignSelf: 'center',
        paddingTop: 128,
        fontSize: 20,
    }





});

export default CategoryBox
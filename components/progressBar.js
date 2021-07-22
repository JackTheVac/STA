import { View, Text, StyleSheet } from 'react-native';
import * as Progress from 'react-native-progress';
import React from 'react';
import { Dimensions } from 'react-native';


const StampBar = (props) => {
    return (
    <View style = {styles.container}>
        <Progress.Bar 
            progress = {progressRatio(props.stampCount)} 
            color = {'#D0112B'} 
            width = {0.6 * Dimensions.get('window').width} 
            borderWidth = {2} 
            borderRadius = {6}
        />
    </View>
    );
}

function progressRatio(stampCount) {
    if (stampCount > 10){
        return(1);
    }
    else{
        return(stampCount / 10);
    }
}


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#fff',
    },
})

export default StampBar
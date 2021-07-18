import { View, Text, StyleSheet } from 'react-native';
import * as Progress from 'react-native-progress';
import React from 'react';


const StampBar = (props) => {
    return (
    <View style = {styles.container}>
        <Progress.Bar progress = {progressRatio(props.stampCount)} style = {styles.progress}/>
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
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingVertical: 20,
        },
    progress: {
        borderColor: '#D0112B',
        color: '#D0112B'
        },
})

export default StampBar
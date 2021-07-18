import QRCode from 'react-native-qrcode-svg';
import {TouchableOpacity, SafeAreaView, View, Image, StyleSheet, Text, Animated, TextInput} from 'react-native';
import React from 'react';

const QR = (props) => {
    return (
    <View style = {styles.container}>
        <QRCode value={props.uuid}/>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        alignItems: 'center',
    },
})

export default QR
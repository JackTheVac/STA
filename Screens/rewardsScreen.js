import React, {Component} from 'react';
import QR from '../components/qrBox';
import StampBar from '../components/progressBar'
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native';
import BottomNavigationBar from '../components/bottomNavigationBar';
import { Dimensions } from 'react-native';
import { db, auth } from '../firebase';

export default class RewardsScreen extends Component{
    render(){
        return(
            <View>
                <SafeAreaView style = {styles.container}>
                    
                    <View style = {styles.stampBarSpace}>
                        <Text style = {styles.textContainer}> Stamp Count: {this.state.stampCount} </Text>
                            <StampBar stampCount = {this.state.stampCount}/>
                        <Text style = {styles.textContainer}> {message(this.state.stampCount)} </Text>
                    </View>
    
                    <View style = {styles.qrContainer}>
                        <QR uuid= {user.uid}/>
                    </View>
    
                </SafeAreaView>
    
                <View style = {styles.bottomContainer}>
                    <BottomNavigationBar/>
                </View>
    
            </View>
            
        );
    }
    
    state = {
        stampCount: ''
    }
    constructor(props){
        super(props);
        db.collection('users').doc(user.uid).get().then(doc => {
            this.setState({
                stampCount: doc.data().stampCount
            })
        })
    }
    
}

function message(stamps){
    if (stamps == 9){
        return 'Purchase at least 1 more drink to receive your next free drink!'
    }
    else if(stamps < 9){
        return 'Purchase at least ' + (10 - stamps) + ' more drinks to receive your next free drink!'
    }
    else{
        return 'You\'ve earned a free drink on your next visit!'
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',
        height: Dimensions.get('window').height - 72,
        justifyContent: 'space-around',
    },
    stampBarSpace: {
        justifyContent: 'space-around',
    },
    qrContainer: {
    },
    textContainer: {
        textAlign: 'center',
        borderWidth: 20,
        borderColor: 'white'
    },
    navigationFooter: {
        borderWidth: 20,
    },
});


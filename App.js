import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {  SafeAreaView, View, Image, StyleSheet, Text, Animated} from 'react-native';

//Screens
import SplashScreen from './Screens/splashScreen';
import FirstMainScreen from './Screens/firstMain';
import SignInScreen from './Screens/signIn';
import SignUpScreen from './Screens/signUp';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>

        <Stack.Screen name="Signin" component={SignUpScreen} />

        <Stack.Screen name="FirstMain" component={FirstMainScreen} />

      </Stack.Navigator>

    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingWrapper:{
    flexDirection: 'column',
    paddingHorizontal: 20,

  },
  topLoading: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 545,
    height: 336,
  },
  bottomLoading: {
    width: 403,
    height: 306,
    alignItems: 'center',
    marginLeft: 60,



  }

});

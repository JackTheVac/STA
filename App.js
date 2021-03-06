import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {  SafeAreaView, View, Image, StyleSheet, Text, Animated} from 'react-native';

import {enableScreens} from 'react-native-screens'



enableScreens();

import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from 'react-native-screens/native-stack'

//Screens
import FirstMainScreen from './Screens/firstMain';
import SignInScreen from './Screens/signIn';
import SignUpScreen from './Screens/signUp';
import RewardsScreen from './Screens/rewardsScreen';
import MenuScreen from './Screens/menuScreen';
import AddPicScreen from './Screens/addPicScreen';
import Upload from './Screens/upload';
import GeneralDrinkScreen from './Screens/DrinkScreens/generalDrinkScreen';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions = {{headerShown: false}}
                       initialRouteName = {'firstMainScreen'}
                       
                       >
        <Stack.Screen name = 'firstMainScreen' component = {FirstMainScreen} options={{gestureEnabled: false}} />
        <Stack.Screen name = 'signInScreen' component = {SignInScreen} />
        <Stack.Screen name = 'signUpScreen' component = {SignUpScreen} />
        <Stack.Screen name = 'rewardsScreen' component = {RewardsScreen} options={{gestureEnabled: false}}/>
        <Stack.Screen name = 'menuScreen' component = {MenuScreen}  />
        <Stack.Screen name = 'addPicScreen' component = {AddPicScreen} />
        <Stack.Screen name = 'upload' component = {Upload} />
        <Stack.Screen name = 'generalDrinkScreen' component = {GeneralDrinkScreen} />

      </Stack.Navigator>

    </NavigationContainer>
    // <NavigationContainer>
    //   <Stack.Navigator screenOptions={{headerShown: false}}>

    //     <Stack.Screen name="Signin" component={FirstMainScreen} />

    //     <Stack.Screen name="FirstMain" component={FirstMainScreen} />

    //   </Stack.Navigator>

    // </NavigationContainer>

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

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
import FruitTeaScreen from './Screens/DrinkScreens/FruitTeaScreen';
import MilkTeaScreen from './Screens/DrinkScreens/MilkTeaScreen';
import FreshMilkScreen from './Screens/DrinkScreens/FreshMilkScreen';
import SignatureScreen from './Screens/DrinkScreens/SignatureScreen';
import BrewedTeaScreen from './Screens/DrinkScreens/BrewedTeaScreen';
import IceBlendedScreen from './Screens/DrinkScreens/IceBlendedScreen';
import SeasonalScreen from './Screens/DrinkScreens/SeasonalScreen';
import UploadScreen from './Screens/uploadScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions = {{headerShown: false}}
                       initialRouteName = {'uploadScreen'}
                       
                       >
        <Stack.Screen name = 'firstMainScreen' component = {FirstMainScreen} />
        <Stack.Screen name = 'signInScreen' component = {SignInScreen} />
        <Stack.Screen name = 'signUpScreen' component = {SignUpScreen} />
        <Stack.Screen name = 'rewardsScreen' component = {RewardsScreen} options = {{gestureDirection: 'vertical'}}/>
        <Stack.Screen name = 'menuScreen' component = {MenuScreen}  options= {{gestureDirection :'SlideFromLeftIOS'}}/>
        
        <Stack.Screen name = 'fruitTeaScreen' component = {FruitTeaScreen} />
        <Stack.Screen name = 'milkTeaScreen' component = {MilkTeaScreen} />
        <Stack.Screen name = 'freshMilkScreen' component = {FreshMilkScreen} />
        <Stack.Screen name = 'signatureScreen' component = {SignatureScreen} />
        <Stack.Screen name = 'brewedTeaScreen' component = {BrewedTeaScreen} />
        <Stack.Screen name = 'iceBlenededScreen' component = {IceBlendedScreen} />
        <Stack.Screen name = 'seasonalScreen' component = {SeasonalScreen} />
        <Stack.Screen name = 'uploadScreen' component = {UploadScreen} />

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

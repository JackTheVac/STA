import { StatusBar } from 'expo-status-bar';
import React ,{useState}from 'react';
import { TouchableOpacity, KeyboardAvoidingView ,SafeAreaView, View, Image, StyleSheet, Text, Animated, KeyboardAvoidingViewBase} from 'react-native';
import Banner from '../components/banner';
import InputBox from '../components/inputBox';
import {auth} from '../firebase'


const SignInScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const signIn = async() => {
    try{
      //auth().createUserWithEmailAndPassword(email,password)
      await auth.signInWithEmailAndPassword(email,password)
      
      navigation.navigate('rewardsScreen')  
      //.catch((error) => alert(error));
     
    }catch(err){
      setError(err.message)
     
    } 
  }


    return (
        <>      
        <View style={styles.container}>
          <Banner 
            title = 'Sign In'
            lastPage = 'firstMainScreen'
                   />
          
          <KeyboardAvoidingView 
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style = {styles.inputContainer}
          >
            <View style = {styles.inputBoxOne}>
                  <InputBox 
                    title = 'Email'
                    hide = {false}
                    value = {email}
                    onChangeText = {setEmail}
                  />
            </View>
            <View style = {styles.inputBoxTwo}>
                  <InputBox 
                    title = 'Password'
                    hide = {true}
                    value = {password}
                    onChangeText= {setPassword}

                  />
            </View>

          </KeyboardAvoidingView>
          {
          error?
          <Text style = {styles.errorMessage}>{error}</Text>
          :null
          }

          <View style = {styles.submitButton}>
            <View style = {styles.submitContainer}>
              <TouchableOpacity
              style = {styles.buttonBorder}
              onPress = {signIn}
              >
                  <Text style = {styles.titleText}>Sign In</Text>
              </TouchableOpacity>
            </View>
          </View>
          

          <Image 
            source =  {require('../assets/images/strawberry.png')}
            style = {styles.strawberry}
          />

          <Image 
            source =  {require('../assets/images/orange.png')}
            style = {styles.orange}
          />

          


       </View>
       </>
       
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
      },

      inputContainer: {
          backgroundColor: '#fff',
      },

      inputBoxOne: {
        marginTop: 50,
      },
      inputBoxTwo: {
        marginTop: 42,
      },
      submitButton: {
        marginTop: 52,
        alignItems: 'center',
        //borderWidth: 1,
        backgroundColor: '#fff'
      },
      strawberry: {
        height: 227.52,
        width: 250,
        transform: [{rotate: '-9.73 deg'}],
        //borderWidth: 2,
        right: 35,
        bottom: 10,
      },
      orange: {
        width: 250,
        height: 250,
        //borderWidth: 1,
        bottom: 130,
        left: 180,
        transform: [{rotate: '7.85 deg'}],
       
      },

      submitContainer: {
        backgroundColor: '#fff',
      },
      buttonBorder: {
        backgroundColor: '#D0112B',
        height: 40,
        width: 127,
        borderWidth: 1,
        borderRadius: 10,
    },
      titleText: {    
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 5,
        fontSize: 20,
        color: '#fff'
        
        

    },
    errorMessage: {
      color:'red',
      //borderWidth: 3,
      alignSelf: 'center',
      paddingTop: 20,
    }



    
});

export default SignInScreen;
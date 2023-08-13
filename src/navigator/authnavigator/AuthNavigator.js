import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SignUp from '../../screens/authscreens/SignUp'
import SignIn from '../../screens/authscreens/SignIn'

const AuthNavigator = () => {

const AuthStack=createNativeStackNavigator()

  return (
    <AuthStack.Navigator>
        <AuthStack.Screen name="SignIn" component={SignIn}/>
        <AuthStack.Screen name="SignUp" component={SignUp}/> 
        
        
    </AuthStack.Navigator>
    
  )
}

export default AuthNavigator

const styles = StyleSheet.create({})
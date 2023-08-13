import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Products from '../../screens/bottomscreens/Products'
import Profile from '../../screens/bottomscreens/Profile'


const BottomNavigator = () => {

const Bottom=createBottomTabNavigator()
  return (
   <Bottom.Navigator>
    <Bottom.Screen name='Products' component={Products}/>
    <Bottom.Screen name='Profile' component={Profile}/>
    
 </Bottom.Navigator>

   
  )
}

export default BottomNavigator

const styles = StyleSheet.create({})
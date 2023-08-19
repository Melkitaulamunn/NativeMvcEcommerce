import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {DataContext} from '../../context/context'
import BottomNavigator from '../bottomnavigator/BottomNavigator'
import AuthNavigator from '../authnavigator/AuthNavigator'
const RootNavigator = () => {

const RootStack=createNativeStackNavigator()

const {userAvaible}=useContext(DataContext)

  return (
    <>
    {userAvaible==true?(<BottomNavigator/>):(<AuthNavigator/>)}
    </>
  )
}

export default RootNavigator

const styles = StyleSheet.create({})
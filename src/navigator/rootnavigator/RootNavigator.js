import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {DataContext} from '../../context/context'

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
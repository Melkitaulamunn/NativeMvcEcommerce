import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import RootNavigator from './src/navigator/rootnavigator/RootNavigator'
import { DataProvider } from './src/context/context'

const App = () => {
  return (
    <DataProvider>
    <SafeAreaView style={{flex:1}}>
      <NavigationContainer>
        <RootNavigator/>
      </NavigationContainer>
    </SafeAreaView>
    </DataProvider>
  
  )
}

export default App

const styles = StyleSheet.create({})
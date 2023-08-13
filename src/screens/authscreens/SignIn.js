import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Button } from 'react-native'

const SignIn = () => {

const navigation=useNavigation()
  return (
    <View>
      <Text>SignIn</Text>
      <Button title='SignUp' onPress={()=>navigation.navigate('SignUp')}/>
    </View>
  )
}

export default SignIn

const styles = StyleSheet.create({})
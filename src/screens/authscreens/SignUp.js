import { StyleSheet, Text, View ,Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


const SignUp = () => {

const navigation=useNavigation()
  return (
    <View>
      <Text>SignUp</Text>
      <Button title='SignIn' onPress={()=>navigation.navigate('SignIn')}/>
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({})
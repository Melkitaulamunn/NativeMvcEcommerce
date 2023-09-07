import { View, Text } from 'react-native'
import React, { useContext, useState } from 'react'
import { DataContext } from '../context/context'
import ProfilScreenModel from '../models/ProductScreenModel'
import Profile from '../screens/bottomscreens/Profile'

export default function ProfileScreenController() {

const {userInfo} = useContext(DataContext)
const [user,setUser] = useState(new ProfilScreenModel(

   userInfo?.userImage,
   userInfo?.userName,
   userInfo?.userEmail,
   userInfo?.userBio

))
  return (
    <Profile userInfo={user}/>
  )
}
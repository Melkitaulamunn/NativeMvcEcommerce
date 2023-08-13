import { StyleSheet, Text, View } from 'react-native'
import React, { createContext } from 'react'
import { create } from 'react-test-renderer'

const context = () => {
const DataContext=createContext()
const DataProvider=({children})=>{

    const [userAvaible,setUserAvaible]=useState(true)

return(

    <DataContext.Provider value={{
        userAvaible,setUserAvaible
    }}>
    {children}
    </DataContext.Provider>

)

}
  
exports (DataCoontext,DataProvider)

const styles = StyleSheet.create({})
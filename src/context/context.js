import { StyleSheet, Text, View } from 'react-native'
import React, { createContext,useState } from 'react'
import { create } from 'react-test-renderer'


const DataContext=createContext();
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
  //1 den fazlayapı dışarı çıkaırlırken süslü parantez kullnaılır
export {DataContext,DataProvider}

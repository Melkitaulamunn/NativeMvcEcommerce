import { StyleSheet, Text, View } from 'react-native'
import React, { createContext,useState } from 'react'
import { create } from 'react-test-renderer'


const DataContext=createContext();
const DataProvider=({children})=>{

    const [userAvaible,setUserAvaible]=useState(true)
    const [productDetailInfo,setProductDetailInfo] = useState()
    const [userInfo,stUserInfo] = useState({
        
        userName:"Ayşe ALBAYRAK",
        userEmail:"aysealbyrak@gmail.com",
        userImage:"https://miro.medium.com/v2/resize:fit:1400/1*YMJDp-kqus7i-ktWtksNjg.jpeg",
        userBio: "React Native Developer"

    })


return(

    <DataContext.Provider value={{
        userAvaible,setUserAvaible,
        productDetailInfo,setProductDetailInfo,
    }}>
    {children}
    </DataContext.Provider>

)

}
  //1 den fazlayapı dışarı çıkaırlırken süslü parantez kullnaılır
export {DataContext,DataProvider}

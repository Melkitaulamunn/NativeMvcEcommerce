import { View, Text } from 'react-native'
import React, { useContext, useState } from 'react'
import { DataContext } from '../context/context'
import ProductDetail from '../screens/homeScreens/ProductDetail'
import ProductDetailModel from '../models/ProductDetailModel'

export default function productDetailController() {

const {productDetailInfo} = useContext(DataContext)

const [prouctDetailCont,setProductDetailCont] = useState(new ProductDetailModel(

  productDetailInfo.name,
  productDetailInfo.price,
  productDetailInfo.description,
  productDetailInfo.ratring,
  productDetailInfo.image

))

    
  return (
    <ProductDetail productDetailProp = {prouctDetailCont} />
  )
}
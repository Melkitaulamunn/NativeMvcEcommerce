import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProductDetail from '../homeScreens/ProductDetail'
import ProductList from '../homeScreens/ProductList'
import productDetailController from '../../controlller/productDetailController'
const Products = () => {

  const ProductsStack = createNativeStackNavigator()

  return (

    <ProductsStack.Navigator>

      <ProductsStack.Screen options={{ headerShown: false }} name="ProductList" component={ProductList} />
      <ProductsStack.Screen options={{ headerShown: false }} name="ProductDetail" component={productDetailController} />

    </ProductsStack.Navigator>
  )
}

export default Products

const styles = StyleSheet.create({})
import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import ProductCartModel from '../../models/ProductCartModel';
import ProductCartController from '../../controlller/productListController';
import { useNavigation } from '@react-navigation/native';
import { DataContext } from '../../context/context';
import StarRating from 'react-native-star-rating-widget';
import Animation from '../../components/Animation';





const PropertyList = () => {

  

  const [product, setProduct] = useState(null)
  const { productDetailInfo, setProductDetailInfo } = useContext(DataContext)
  const navigation = useNavigation()

  const fetchProducts = async () => {
    try {
      const fetchPro = await ProductCartController.getProduct()
      setProduct(fetchPro)
    }
    catch (error) {

      console.log(error)
    }

  }

  useEffect(() => {
    fetchProducts()
  }, [])

  const goToDetailScreen = (touchedProduct) => {
    setProductDetailInfo(touchedProduct)
    navigation.navigate("ProductDetail")
  }






  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => goToDetailScreen(item)}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.cardBody}>
        <Text style={styles.price}>${item.price}</Text>
        <Text style={styles.address}>{item.description}</Text>
        <Text style={styles.squareMeters}>{item.brand} </Text>
      </View>
      <View style={styles.cardFooter}>
        <Text style={styles.beds}> </Text>
        <StarRating
          rating={item.rating}
        />
      </View>
    </TouchableOpacity>
  );



  return (
    <View style={styles.container}>

      {product===null?(
      <Animation />
      ):(

      <FlatList
        contentContainerStyle={styles.propertyListContainer}
        data={product}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}

      />)
      }

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
  searchInputContainer: {
    paddingHorizontal: 20,
  },
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderColor: '#dcdcdc',
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  },
  propertyListContainer: {
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  image: {
    height: 150,
    marginBottom: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  cardBody: {
    marginBottom: 10,
    padding: 10,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5
  },
  address: {
    fontSize: 16,
    marginBottom: 5
  },
  squareMeters: {
    fontSize: 14,
    marginBottom: 5,
    color: '#666'
  },
  cardFooter: {
    padding: 10,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#dcdcdc',
    justifyContent: 'space-between',
  },
  beds: {
    fontSize: 14,
    color: '#ffa500',
    fontWeight: 'bold'
  },
  baths: {
    fontSize: 14,
    color: '#ffa500',
    fontWeight: 'bold'
  },
  parking: {
    fontSize: 14,
    color: '#ffa500',
    fontWeight: 'bold'
  }
});

export default PropertyList
import React from 'react';
import { View, Text, Image, StyleSheet, Button, ScrollView } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList, Product } from '../types';

type ProductDetailScreenRouteProp = RouteProp<RootStackParamList, 'ProductDetail'>;

const products: Product[] = [
  { id: '1', name: 'Acme Circles T-Shirt', price: 20.00, image: require('@/assets/images/images.png') },
  { id: '2', name: 'Acme Cup', price: 15.00, image: require('@/assets/images/images.png') },
];

const ProductDetailScreen = () => {
  const route = useRoute<ProductDetailScreenRouteProp>();
  const { productId } = route.params;

  const product = products.find(p => p.id === productId);

  if (!product) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Product not found!</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Image source={product.image} style={styles.image} />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${product.price.toFixed(2)} USD</Text>
      <Text style={styles.description}>
        60% combed ringspun cotton/40% polyester jersey tee.
      </Text>
      <Button title="Add To Cart" onPress={() => {}} color="#0000FF" />
      <View style={styles.relatedProductsContainer}>
        <Text style={styles.relatedProductsTitle}>Related Products</Text>
        {/* Add related products here */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    color: '#fff',
    marginVertical: 10,
    textAlign: 'center',
  },
  price: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#fff',
    paddingHorizontal: 20,
    textAlign: 'center',
    marginBottom: 20,
  },
  relatedProductsContainer: {
    paddingHorizontal: 10,
  },
  relatedProductsTitle: {
    fontSize: 20,
    color: '#fff',
    marginVertical: 10,
  },
  errorText: {
    color: 'red',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default ProductDetailScreen;

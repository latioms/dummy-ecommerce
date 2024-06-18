import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList, Product } from '../types';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const products: Product[] = [
    { id: '1', name: 'Acme Circles T-Shirt', price: 20.00, image: require('@/assets/images/images.png') },
    { id: '2', name: 'Acme Cup', price: 15.00, image: require('@/assets/images/images.png') },
  ];

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('ProductDetail', { productId: item.id })} style={styles.productContainer}>
            <Image source={item.image} style={styles.productImage} />
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>${item.price.toFixed(2)} USD</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.productList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  productContainer: {
    margin: 10,
    padding: 10,
    backgroundColor: '#222',
    borderRadius: 10,
  },
  productImage: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
  },
  productName: {
    color: '#fff',
    fontSize: 18,
    marginTop: 10,
  },
  productPrice: {
    color: '#fff',
    fontSize: 16,
  },
  productList: {
    padding: 10,
  },
});

export default HomeScreen;

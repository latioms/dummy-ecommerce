import React from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { styled } from 'nativewind';
import { withExpoSnack } from 'nativewind';
import Icon from 'react-native-vector-icons/Ionicons';  // Import the Ionicons set of icons
import { Image } from 'react-native';

// Sample image URLs, replace with your actual image sources
const sampleProducts = [
  { name: 'Acme Circles T-Shirt', price: '$20.00 USD', image: 'https://example.com/tshirt.png' },
  { name: 'Acme Drawstring Bag', price: '$12.00 USD', image: 'https://example.com/bag.png' },
  { name: 'Acme Cup', price: '$15.00 USD', image: 'https://example.com/cup.png' },
  { name: 'Acme Baby Cap', price: '$10.00 USD', image: 'https://example.com/cap.png' },
  { name: 'Acme Mug', price: '$15.00 USD', image: 'https://example.com/mug.png' },
];

const StyledScrollView = styled(ScrollView);
const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledImage = styled(Image);

const App = () => {
  return (
    <StyledScrollView className="bg-white">
      <StyledView className="flex-row items-center justify-between p-4 border-b border-gray-200">
        <StyledTouchableOpacity>
          <Icon name="menu-outline" size={24} color="black" />
        </StyledTouchableOpacity>
        <StyledView className="flex-row items-center">
          <Icon name="logo-octocat" size={24} color="black" style={{ marginRight: 8 }} />
          <StyledText className="text-lg font-bold">ACME STORE</StyledText>
        </StyledView>
        <StyledTouchableOpacity className="relative">
          <Icon name="cart-outline" size={24} color="black" />
          <StyledView className="absolute top-0 right-0 bg-blue-600 rounded-full w-4 h-4 items-center justify-center">
            <StyledText className="text-xs text-white">5</StyledText>
          </StyledView>
        </StyledTouchableOpacity>
      </StyledView>
      <StyledView className="items-center py-4">
        {sampleProducts.map((product, index) => (
          <StyledView key={index} className="border-b border-gray-200 pb-4 mb-4">
            <StyledImage source={{ uri: "https://dummyjson.com/image/200x100" }} className="w-52 h-36 mb-2" />
            <StyledText className="text-lg font-semibold">{product.name}</StyledText>
            <StyledText className="text-blue-600">{product.price}</StyledText>
          </StyledView>
        ))}
      </StyledView>
      <StyledView className="p-4">
        <StyledText className="font-bold text-lg">ACME STORE</StyledText>
      </StyledView>
    </StyledScrollView>
  );
};

export default withExpoSnack(App);

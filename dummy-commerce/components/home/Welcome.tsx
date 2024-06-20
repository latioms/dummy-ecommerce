import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import { styled } from 'nativewind';
import { withExpoSnack } from 'nativewind';

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
const StyledImage = styled(Image);

const App = () => {
  return (
    <StyledScrollView className="bg-white">
      <StyledView className="items-center py-4">
        {sampleProducts.map((product, index) => (
          <StyledView key={index} className="border-b border-gray-200 pb-4 mb-4">
            <StyledImage source={{ uri: product.image }} className="w-40 h-40 mb-2" />
            <StyledText className="text-lg font-semibold">{product.name}</StyledText>
            <StyledText className="text-blue-600">{product.price}</StyledText>
          </StyledView>
        ))}
      </StyledView>
      <StyledView className="p-4">
        <StyledText className="font-bold text-lg text-center">ACME STORE</StyledText>
      </StyledView>
    </StyledScrollView>
  );
};

export default withExpoSnack(App);

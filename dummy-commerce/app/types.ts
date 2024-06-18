// types.ts
export type Product = {
    id: string;
    name: string;
    price: number;
    image: any;
  };
  

  export type RootStackParamList = {
    Home: undefined;
    ProductDetail: { productId: string };
  };
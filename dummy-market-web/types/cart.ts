export type Item = {
    id: string;
    name: string;
    price: number;
    quantity: number;
    total: number;
    discountPercentage: number;
    discountedTotal: number;
};

export type Cart = {
    id: string;
    userId: string;
    cartItems: Item[];
    total: number; // total price of all items in the cart
    discountedTotal: number; // total price of all items in the cart after discount
    numberItems: number; // total number of items in the cart
    totalQuantity: number;
    createdAt: string;
};

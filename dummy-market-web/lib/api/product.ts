// get all products 
export const getProducts = async () => {
    const res = await fetch('https://dummyjson.com/products');
    const data = await res.json();
    return data;
}

// get a specific product by id
export const getProduct = async (id: string) => {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await res.json();
    return data;
}

// get all products from a specific category
export const getCategoryProducts = async (category: string) => {
    const res = await fetch(`https://dummyjson.com/products/category/${category}`);
    const data = await res.json();
    return data;
}

//search products by query
export const searchProducts = async (query: string) => {
    const res = await fetch(`https://dummyjson.com/products?search?q=${query}`);
    const data = await res.json();
    return data;
};

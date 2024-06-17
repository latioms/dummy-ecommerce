export type review = {
    id: string;
    name: string;
    email: string;
    rating: number;
    comment: string;
    createdAt: string;
};

export type Product = {
    id: string;
    title: string;
    price: number;
    description: string;
    rating: number;
    reviews?: review[];
    createdAt: string;
    thumbnail: string;
    availabilityStatus?: string;
    discountPercentage?: number;
    shippingInformation: string;
    weight: number;
    sku: string;
    brand: string;
    category: string;
    dimensions: {
        width: number;
        height: number;
        depth: number;
    };
    warrantyInformation: string;

};
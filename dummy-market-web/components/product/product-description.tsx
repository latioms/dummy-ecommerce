import React from "react";
import Price from "../layout/price";
import { Product } from "@/types/product";

function ProductDescription({ product }: { product: any }) {
  const discountedPrice = product.discountPercentage
    ? product.price * (1 - product.discountPercentage / 100)
    : product.price;
  return (
    <>
      <div className="mb-6 flex flex-col border-b pb-6 dark:border-neutral-700">
        <h1 className="mb-2 text-5xl font-medium">{product.title}</h1>
        <div className="product-price mr-auto w-auto rounded-full bg-blue-600 p-2 text-sm text-white">
          {product.discountPercentage && product.discountPercentage > 0 ? (
            <>
              <span className="line-through mr-2">
                ${product.price.toFixed(2)} USD
              </span>
              <span>${discountedPrice.toFixed(2)} USD</span>
            </>
          ) : (
            <span>${product.price.toFixed(2)} USD</span>
          )}
        </div>

        <div className="product-description-text mb-6 text-sm leading-tight dark:text-white/[60%]">
          <p>{product.description}</p>
        </div>

        <div className="product-details mb-6">
          <h2 className="text-xl font-bold">Product Details</h2>
          <ul className="list-disc pl-5">
            <li>Category: {product.category}</li>
            <li>Brand: {product.brand}</li>
            <li>SKU: {product.sku}</li>
            <li>Weight: {product.weight}g</li>
            <li>
              Dimensions: {product.dimensions.width} x{" "}
              {product.dimensions.height} x {product.dimensions.depth} cm
            </li>
            <li>Warranty: {product.warrantyInformation}</li>
            <li>Shipping: {product.shippingInformation}</li>
          </ul>

          <div className="product-reviews mb-6">
            <h2 className="text-xl font-bold">Customer Reviews</h2>
            <ul className="list-disc pl-5">
              {product.reviews &&
                product.reviews.map((review: any, index: any) => (
                  <li key={index} className="review-item">
                    <strong>{review.reviewerName}:</strong> {review.comment} (
                    {review.rating} stars)
                  </li>
                ))}
            </ul>
          </div>

        </div>
        
      </div>
      <button className="w-full bg-blue-600 text-white py-4 px-4 rounded-full">
        Add to Cart
      </button>
    </>
  );
}

export default ProductDescription;

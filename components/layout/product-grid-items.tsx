import React from 'react';
import { Product } from '@/types/product';
import Grid from './ui/grid';
import { GridTileImage } from './ui/tile';
import Link from 'next/link';

export default async function ProductGridItems({ products }: { products: any[] }) { 
  
  return (
    <React.Fragment>
      {products.map((product, index) => (
        <Grid.Item key={index} className="animate-fadeIn">
          <Link className="relative inline-block h-full w-full" href={`/product/${product.id}`}>
            <GridTileImage
              alt={product.title}
              label={{
                title: product.title,
                price: product.price,
                currencyCode: "USD",
              }}
              src={product.thumbnail}
              fill
              sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
            />
          </Link>
        </Grid.Item>
      ))}
    </React.Fragment>
  );
}
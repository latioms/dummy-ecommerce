"use client";
import React from "react";
import { Metadata } from "next";
import { useParams, usePathname } from "next/navigation";
import { getCategoryProducts } from "@/lib/api/product";
import Grid from "@/components/layout/ui/grid";
import ProductGridItems from "@/components/layout/product-grid-items";
import { Product } from "@/types/product";

export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: { category: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  //---------------------------------
  const category = useParams().collection;

  const  data =  await getCategoryProducts(`${category}`);
  const products : any[] = data.products;
  console.log(products);

  return (
    <section>
      {products.length === 0 ? (
        <p className="py-3 text-lg">{`No products found in this collection`}</p>
      ) : (
        <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <ProductGridItems products={products} />
        </Grid>
      )}
    </section>
  );
}

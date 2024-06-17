import React, { Suspense } from "react";
import { getProduct } from "@/lib/api/product";
import { notFound, useParams } from "next/navigation";
import Gallery from "@/components/product/gallery";
import ProductDescription from "@/components/product/product-description";

const Page = async ({ params }: { params: { slug: string } }) => {

  const product = await getProduct(params.slug);

  if (!product) return notFound();

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.description,
    image: product.thumbnail,
    offers: {
      "@type": "AggregateOffer",
      availability: product.availabilityStatus
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      priceCurrency: "USD",
      highPrice: product.price,
      lowPrice: product.price - product.discountPercentage * product.price,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <div className="mx-auto max-w-screen-2xl px-4">
        <div className="flex flex-col rounded-lg border border-neutral-200 bg-white p-8 md:p-12 lg:flex-row lg:gap-8 dark:border-neutral-800 dark:bg-black">
          {/* Gallery */}
          <div className="h-full w-full basis-full lg:basis-4/6">
            <Suspense
              fallback={
                <div className="relative aspect-square h-full max-h-[550px] w-full overflow-hidden" />
              }
            >
              <Gallery images={product.images} />
            </Suspense>
          </div>

          {/* Product Details */}
          <div className="basis-full lg:basis-2/6">
            <ProductDescription product={product}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;

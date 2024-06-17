import { getProducts } from "@/lib/api/product";
import { Product } from "@/types/product";
import { GridTileImage } from "./tile";
import Link from "next/link";

async function ThreeItemGridItem({
  item,
  size,
  priority,
}: {
  item: Product;
  size: "full" | "half";
  priority?: boolean;
}) {
  return (
    <div
      className={
        size === "full"
          ? "md:col-span-4 md:row-span-2"
          : "md:col-span-2 md:row-span-1"
      }
    >
      <Link
        className="relative block aspect-square h-full w-full"
        href={`/product/${item.id}`}
      >
        <GridTileImage
          src={item.thumbnail}
          content="cover"
          sizes={
            size === "full"
              ? "(min-width: 768px) 66vw, 100vw"
              : "(min-width: 768px) 33vw, 100vw"
          }
          priority={priority}
          alt={item.title}
          label={{
            position: size === "full" ? "center" : "bottom",
            title: item.title as string,
            price: item.price,
            currencyCode: "USD",
          }}
        />
      </Link>
    </div>
  );
}

export async function ThreeItemGrid() {
  //   get all the fisrt three products from the
  //   homepage items
  const data = await getProducts();

  const homepageItems = data.slice(0, 3);
  const [firstProduct, secondProduct, thirdProduct] = homepageItems;

  return (
    <section className="mx-auto grid max-w-screen-2xl gap-4 px-4 pb-4 md:grid-cols-6 md:grid-rows-2">
      <ThreeItemGridItem size="full" item={firstProduct} priority={true} />
      <ThreeItemGridItem size="half" item={secondProduct} priority={true} />
      <ThreeItemGridItem size="half" item={thirdProduct} />
    </section>
  );
}

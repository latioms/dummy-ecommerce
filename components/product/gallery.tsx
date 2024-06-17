"use client";

import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { GridTileImage } from "../layout/ui/tile";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import next from "next";
import { createUrl } from "@/lib/utils";

export default function Gallery({
  images,
}: {
  images: string[];
}) {
  const pathName = usePathname();
  const searchParams = useSearchParams();

  const imageSearchParam = searchParams.get("image");
  const imageIndex = imageSearchParam ? parseInt(imageSearchParam) : 0;

  // get the next image
  const nextSearchParam = new URLSearchParams(searchParams.toString());
  const nextIndex = imageIndex + 1 < images.length ? imageIndex + 1 : 0;
  nextSearchParam.set("image", nextIndex.toString());
  const nextUrl = createUrl(pathName, nextSearchParam);

  // get the previous image
  const previousSearchParams = new URLSearchParams(searchParams.toString());
  const prevIndex = imageIndex - 1 >= 0 ? imageIndex - 1 : images.length - 1;
  previousSearchParams.set("image", prevIndex.toString());
  const previousUrl = createUrl(pathName, previousSearchParams);

  const buttonClassName =
    "h-full px-6 transition-all ease-in-out hover:scale-110 hover:text-black dark:hover:text-white flex items-center justify-center";

  return (
    <>
      <div className="relative aspect-square h-full max-h-[550px] w-full overflow-hidden">
        {images[imageIndex] && (
          <Image
            className="h-full w-full object-contain"
            fill
            sizes="(min-width: 1024px) 66vw, 100vw"
            alt={images[imageIndex]}
            src={images[imageIndex]}
            priority={true}
          />
        )}

        {images.length > 1 ? (
          <div className="absolute bottom-[15%] flex w-full justify-center">
            <div className="mx-auto flex h-11 items-center rounded-full border border-white bg-neutral-50/80 text-neutral-500 backdrop-blur dark:border-black dark:bg-neutral-900/80">
              <Link
                aria-label="Previous product image"
                href={previousUrl}
                className={buttonClassName}
                scroll={false}
              >
                <ArrowLeftIcon className="h-5" />
              </Link>
              <div className="mx-1 h-6 w-px bg-neutral-500"></div>
              <Link
                aria-label="Next product image"
                href={nextUrl}
                className={buttonClassName}
                scroll={false}
              >
                <ArrowRightIcon className="h-5" />
              </Link>
            </div>
          </div>
        ) : null}
      </div>



      {images.length > 1 ? (
        <ul className="my-12 flex items-center justify-center gap-2 overflow-auto py-1 lg:mb-0">
          {images.map((image, index) => {
            const isActive = index === imageIndex;
            const imageSearchParams = new URLSearchParams(searchParams.toString());

            imageSearchParams.set('image', index.toString());

            return (
              <li key={image} className="h-20 w-20">
                <Link
                  aria-label="Enlarge product image"
                  href={createUrl(pathName, imageSearchParams)}
                  scroll={false}
                  className="h-full w-full"
                >
                  <GridTileImage
                    alt={image}
                    src={image}
                    width={80}
                    height={80}
                    active={isActive}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      ) : null}
    </>
  );
}

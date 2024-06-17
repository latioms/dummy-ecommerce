"use client";
import React from "react";
import { Suspense } from "react";
import MobileMenu from "./ui/mobile-menu";
import { Menu } from "@/types/menu";
import Link from "next/link";
import Search, { SearchSkeleton } from "./ui/search";

const Navbar = () => {
  const menu: Menu[] = [
    {
      title: "All",
      path: "/search",
    },
    {
      title: "Shirts",
      path: "/search/shirts",
    },
    {
      title: "Stickers",
      path: "/search/stickers",
    },
  ];

  return (
    <nav className="relative flex items-center justify-between p-4 lg:px-6">
      <div className="block flex-none md:hidden">
        <Suspense fallback={null}>
          <MobileMenu menu={menu} />
        </Suspense>
      </div>
      <div className="flex w-full items-center">
        <div className="flex w-full md:w-1/3">
          <a
            className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6"
            href="/"
            spellCheck="false"
          >
            <div className="flex flex-none items-center justify-center border border-neutral-200 bg-white dark:border-neutral-700 dark:bg-black h-[40px] w-[40px] rounded-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Acme Store logo"
                viewBox="0 0 32 28"
                className="h-[16px] w-[16px] fill-black dark:fill-white"
              >
                <path d="M21.5758 9.75769L16 0L0 28H11.6255L21.5758 9.75769Z" />
                <path d="M26.2381 17.9167L20.7382 28H32L26.2381 17.9167Z" />
              </svg>
            </div>
            <div className="ml-2 flex-none text-sm font-medium uppercase md:hidden lg:block">
              Acme Store
            </div>
          </a>
          {menu.length ? (
            <ul className="hidden gap-6 text-sm md:flex md:items-center">
              {menu.map((item: Menu) => (
                <li key={item.title}>
                  <Link
                    href={item.path}
                    className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
        <div className="hidden justify-center md:flex md:w-1/3">
          <Suspense fallback={<SearchSkeleton />}>
            <Search />
          </Suspense>
        </div>
        <div className="flex justify-end md:w-1/3">
          <button aria-label="Open cart">
            <div className="relative flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700 dark:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="h-4 transition-all ease-in-out hover:scale-110"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
              <div className="absolute right-0 top-0 -mr-2 -mt-2 h-4 w-4 rounded bg-blue-600 text-[11px] font-medium text-white">
                1
              </div>
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

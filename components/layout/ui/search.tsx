'use client';

import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';


function Search() {
  return (
    <form onSubmit={() => {}} className="w-max-[550px] relative w-full lg:w-80 xl:w-full">
    <input
      key={1}
      type="text"
      name="search"
      placeholder="Search for products..."
      autoComplete="off"
      defaultValue={''}
      className="w-full rounded-lg border bg-white px-4 py-2 text-sm text-black placeholder:text-neutral-500 dark:border-neutral-800 dark:bg-transparent dark:text-white dark:placeholder:text-neutral-400"
    />
    <div className="absolute right-0 top-0 mr-3 flex h-full items-center">
      <MagnifyingGlassIcon className="h-4" />
    </div>
  </form>
  )
}
export default Search


export function SearchSkeleton() {
    return (
      <form className="w-max-[550px] relative w-full lg:w-80 xl:w-full">
        <input
          placeholder="Search for products..."
          className="w-full rounded-lg border bg-white px-4 py-2 text-sm text-black placeholder:text-neutral-500 dark:border-neutral-800 dark:bg-transparent dark:text-white dark:placeholder:text-neutral-400"
        />
        <div className="absolute right-0 top-0 mr-3 flex h-full items-center">
          <MagnifyingGlassIcon className="h-4" />
        </div>
      </form>
    );
  }
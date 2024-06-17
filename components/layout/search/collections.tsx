import clsx from 'clsx';
import { Suspense } from 'react';
import Link from 'next/link';
 
const FilterList = ({ list, title }: { list: { title: string; path: string }[]; title: string }) => (
    <>
        <h3 className="hidden text-xs text-neutral-500 md:block dark:text-neutral-400">{title}</h3>
        <ul className="hidden md:block">
        {list.map((item) => (
            <li className="mt-2 flex text-black dark:text-white" key={item.title}>
            <Link href={item.path} className="w-full text-sm underline-offset-4 hover:underline dark:hover:text-neutral-100">
                {item.title}
            </Link>
            </li>
        ))}
        </ul>
    </>
);


// get product categories from https://dummyJSON.com
export const getCollections = async () => {
  const res = await fetch('https://dummyjson.com/products/category-list');
  const data = await res.json();
  
    // associate each category with a title and a link :[a,b,c] => [{ title: a; path: "/a" }
    const list = data.map((category : string) => ({ title: category, path: `/search/${category}` }));

  return list;
};

async function CollectionList() {
  const collections = await getCollections();
  return <FilterList list={collections} title="Dummy Collections" />;
}

const skeleton = 'mb-3 h-4 w-5/6 animate-pulse rounded';
const activeAndTitles = 'bg-neutral-800 dark:bg-neutral-300';
const items = 'bg-neutral-400 dark:bg-neutral-700';

export default function Collections() {
  return (
    <Suspense
      fallback={
        <div className="col-span-2 hidden h-[400px] w-full flex-none py-4 lg:block">
          <div className={clsx(skeleton, activeAndTitles)} />
          <div className={clsx(skeleton, activeAndTitles)} />
          <div className={clsx(skeleton, items)} />
          <div className={clsx(skeleton, items)} />
          <div className={clsx(skeleton, items)} />
          <div className={clsx(skeleton, items)} />
          <div className={clsx(skeleton, items)} />
          <div className={clsx(skeleton, items)} />
          <div className={clsx(skeleton, items)} />
          <div className={clsx(skeleton, items)} />
        </div>
      }
    >
      <CollectionList />
    </Suspense>
  );
}
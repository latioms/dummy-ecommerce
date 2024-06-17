import Collections from '@/components/layout/search/collections';
import Link from 'next/link';

export const Footer = () => (
    <footer className="text-center text-sm text-gray-500 dark:text-gray-400">
        <p>&copy; 2021 Next.js E-commerce</p>
    </footer>
);

const sorting = [
    { title: 'Newest', path: '/search/newest' },
    { title: 'Price: Low to High', path: '/search/price-low' },
    { title: 'Price: High to Low', path: '/search/price-high' },
];

export const FilterList = ({ list, title }: { list: { title: string; path: string }[]; title: string }) => (
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

export default function SearchLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="mx-auto flex max-w-screen-2xl flex-col gap-8 px-4 pb-4 text-black md:flex-row dark:text-white">
        <div className="order-first w-full flex-none md:max-w-[125px]">
          <Collections />
        </div>
        <div className="order-last min-h-screen w-full md:order-none">{children}</div>
        <div className="order-none flex-none md:order-last md:w-[125px]">
          <FilterList list={sorting} title="Sort by" />
        </div>
      </div>
      <Footer />
    </>
  );
}
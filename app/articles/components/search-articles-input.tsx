'use client';

import { useDebouncedCallback } from 'use-debounce';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

import { Input } from "@/components/ui/input"

export default function Search() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term) => {
    console.log(`Searching... ${term}`);
   
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`, {scroll: false});
  }, 300);

  return (
    <>
      <Input
        className='rounded-xl'
        placeholder="Search article"
        type='search'
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get('query')?.toString()}
      />
    </>
  )
}
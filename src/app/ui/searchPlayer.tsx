'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export default function SearchPlayer() {
    const searchParams = useSearchParams()
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleSearch= useDebouncedCallback((query:string) => {
        const params = new URLSearchParams(searchParams);
        if (query) {
            params.set('query', query);
        } else {
            params.delete('query');
        }
        replace(`${pathname}?${params.toString()}`);
    }, 300)

    return (
        <>
            <input 
                type="text" 
                placeholder="search" 
                className="relative rounded max-sm:w-[180px]" 
                onChange={(e) => handleSearch(e.target.value)}
                defaultValue={searchParams.get('query')?.toString()}
            />
        </>
    );
}
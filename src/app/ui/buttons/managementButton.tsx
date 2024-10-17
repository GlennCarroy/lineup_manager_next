'use client'

import clsx from "clsx";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function ManagementButton({ label }: { label :string }) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const params = new URLSearchParams(searchParams);
    const { replace } = useRouter();


    const handleManagementMode = () => {
        const hasParam = searchParams.get('management')
        if (!hasParam) params.set('management', 'true');
        else params.delete('management');
        replace(`${pathname}?${params.toString()}`);
    }

    return (
        <button 
            onClick={handleManagementMode}
            className={clsx("rounded-md border-2 border-gray-900  text-gray-900 p-2 hover:text-white hover:bg-gray-900", {
                'border-slate-500 text-white bg-slate-500': params.get("management") === "true",
            })}
            >
            {label}
        </button>
    )
}
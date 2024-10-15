'use client'
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function MainNav() {
    const [revealMobileNav, setRevealMobileNav] = useState(false);
    const pathname = usePathname()

    const links = [{
        name: "Players",
        href: "/players",
    }, {
        name: "Game",
        href:"/game"
    }]

    return (
        <nav className="bg-gray-800">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button 
                            type="button" 
                            className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" 
                            aria-controls="mobile-menu" 
                            aria-expanded={revealMobileNav}
                            onClick={() => setRevealMobileNav(!revealMobileNav)}>
                        <span className="absolute -inset-0.5"></span>
                        <span className="sr-only">Open main menu</span>
                        <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                        <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                        </button>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                {links.map((link, index) => (
                                    <Link 
                                        href={link.href} 
                                        className={clsx("rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white", {
                                            'bg-sky-100 text-blue-600': pathname === link.href,
                                        })} 
                                        aria-current="page"
                                        key={index}
                                        >
                                            {link.name}
                                    </Link>   
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {revealMobileNav && <div className="sm:hidden" id="mobile-menu">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    {links.map((link, index) => (
                        <Link 
                            href={link.href} 
                            className={clsx("block rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white", {
                                'bg-sky-100 text-blue-600': pathname === link.href,
                            })} 
                            aria-current="page"
                            key={index}
                            >
                                {link.name}
                        </Link>   
                    ))}
                </div>
            </div>}
        </nav>
    )
}
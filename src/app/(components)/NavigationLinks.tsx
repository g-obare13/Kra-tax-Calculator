'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAVIGATION_LINKS = [
    { href: '/', label: 'Calculator' },
    { href: '/vehicles', label: 'Motor Vehicles' },
    { href: '/cycles', label: 'Motor Cycles' },
    { href: '/tractors', label: 'Tractors & Graders' }
];

const NavigationLinks = () => {
    const pathname = usePathname();

    return (
        <div className='flex grid grid-cols-2 items-center gap-3 md:grid-cols-3 lg:grid-cols-4'>
            {NAVIGATION_LINKS.map((link) => {
                const active = link.href === '/' ? pathname === link.href : pathname.includes(link.href);

                return (
                    <Link
                        href={link.href}
                        key={link.href}
                        className={`relative rounded-xl px-3 py-2 font-sans ${active ? 'text-neutral-900 dark:text-neutral-200' : 'text-neutral-700 dark:text-neutral-400'} before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:origin-left before:scale-x-0 before:bg-neutral-700 before:transition-transform before:duration-300 hover:before:scale-x-100 ${active ? 'before:scale-x-100' : ''}`}>
                        {link.label}
                    </Link>
                );
            })}
        </div>
    );
};

export default NavigationLinks;

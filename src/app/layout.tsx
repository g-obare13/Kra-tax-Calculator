import type { ReactNode } from 'react';

import type { Metadata } from 'next';
import localFont from 'next/font/local';

import { ThemeProvider } from 'next-themes';

import NavigationBar from '@/app/(components)/NavigationBar';
import '@/app/globals.css';
import { Toaster } from '@/registry/new-york-v4/ui/sonner';

import { SiteFooter } from './(components)/site-footer';

const geistSans = localFont({
    src: './fonts/GeistVF.woff',
    variable: '--font-geist-sans',
    weight: '100 900'
});
const geistMono = localFont({
    src: './fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono',
    weight: '100 900'
});

export const metadata: Metadata = {
    metadataBase: new URL('https://kra-tax-calculator.vercel.app'),
    title: {
        template: '%s',
        default: 'A simple tax calculator for KRA car imports by Obare Geoffrey.'
    },
    description: 'A simple tax calculator for KRA car imports by Obare Geoffrey.',
    creator: 'Obare Geoffrey',
    authors: [
        {
            name: 'Codedruid13',
            url: 'https://www.linkedin.com/in/obare13'
        }
    ],
    openGraph: {
        type: 'website',
        locale: 'en_US',
        siteName: 'kra-tax-calculator',
        url: 'https://kra-tax-calculator.vercel.app',
        title: {
            template: '%s | A simple tax calculator for KRA car imports',
            default: 'A simple tax calculator for KRA car imports'
        },
        description: 'A simple tax calculator for KRA car imports by Obare Geoffrey',
        images: [
            {
                url: 'https://kra-tax-calculator.vercel.app/OG-kra.png', // Replace with a properly sized image
                width: 1200,
                height: 630,
                alt: 'A simple tax calculator for KRA car imports'
            }
        ]
    }
};

const Layout = ({ children }: Readonly<{ children: ReactNode }>) => {
    return (
        // ? https://github.com/pacocoursey/next-themes?tab=readme-ov-file#with-app
        // ? https://react.dev/reference/react-dom/client/hydrateRoot#suppressing-unavoidable-hydration-mismatch-errors
        <html suppressHydrationWarning lang='en'>
            <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes' />
            <body
                className={`container items-center justify-center ${geistSans.variable} ${geistMono.variable} bg-background text-foreground overscroll-none antialiased`}>
                <ThemeProvider attribute='class'>
                    <NavigationBar />
                    {children}
                    <Toaster />
                    <SiteFooter />
                </ThemeProvider>
            </body>
        </html>
    );
};

export default Layout;

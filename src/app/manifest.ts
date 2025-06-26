import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'KRA tax Calculator',
        short_name: 'kra-tax-calculator',
        description: 'A simple tax calculator for KRA car imports by Obare Geoffrey.',
        start_url: '/',
        display: 'standalone',
        background_color: '#fff',
        theme_color: '#fff',
        icons: [
            { src: './favicon.ico', sizes: 'any', type: 'image/x-icon' },
            {
                type: 'image/png',
                sizes: '32x32',
                src: './assets/images/apple-touch-icon.png'
            },
            {
                type: 'image/png',
                sizes: '32x32',
                src: './assets/images/android-chrome-192x192.png'
            },
            {
                type: 'image/png',
                sizes: '32x32',
                src: './assets/images/android-chrome-512x512.png'
            },
            {
                type: 'image/png',
                sizes: '32x32',
                src: './assets/images/favicon-32x32.png'
            },
            {
                type: 'image/png',
                sizes: '16x16',
                src: './assets/images/favicon-16x16.png'
            },
            {
                sizes: '180x180',
                src: './assets/images/apple-touch-icon.png'
            }
        ]
    };
}

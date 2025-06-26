import { MetadataRoute } from 'next';

// IMPORTANT --> CONFIGURE TO BE DYNAMIC
const siteUrl = 'https://kra-tax-calculator.vercel.app';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const home = ['/'].map((route) => ({
        url: `${siteUrl}${route}`,
        lastModified: new Date().toISOString()
    }));

    const vehicles = ['/vehicles'].map((route) => ({
        url: `${siteUrl}${route}`,
        lastModified: new Date().toISOString()
    }));

    const cycles = ['/cycles'].map((route) => ({
        url: `${siteUrl}${route}`,
        lastModified: new Date().toISOString()
    }));

    const tractors = ['/tractors'].map((route) => ({
        url: `${siteUrl}${route}`,
        lastModified: new Date().toISOString()
    }));

    return [...home, ...vehicles, ...cycles, ...tractors];
}

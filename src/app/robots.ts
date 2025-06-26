import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    const siteUrl = 'https://kra-tax-calculator.vercel.app';

    return {
        rules: {
            userAgent: '*',
            allow: '/'
            // disallow: ["/policies"],
        },
        sitemap: `${siteUrl}/sitemap.xml`
    };
}

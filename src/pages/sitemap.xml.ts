import { getCollection } from 'astro:content';
import { SITE_TITLE, MEDICAL_SPECIALTIES } from '../consts';

function formatDate(date: Date): string {
    return date.toISOString().split('T')[0];
}

function generateUrlEntry(url: string, lastmod: Date, priority: number, changefreq: string) {
    return `
        <url>
            <loc>${url}</loc>
            <lastmod>${formatDate(lastmod)}</lastmod>
            <changefreq>${changefreq}</changefreq>
            <priority>${priority}</priority>
        </url>`;
}

export async function GET({ site }) {
    if (!site) {
        return new Response('Site configuration is required');
    }

    const posts = await getCollection('blog');
    const now = new Date();

    // Start building the sitemap
    let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">`;

    // Add homepage
    sitemap += generateUrlEntry(site.toString(), now, 1.0, 'daily');

    // Add main sections
    const mainSections = [
        { url: 'treatments', priority: 0.9 },
        { url: 'hospitals', priority: 0.9 },
        { url: 'doctors', priority: 0.8 },
        { url: 'testimonials', priority: 0.8 },
        { url: 'blog', priority: 0.8 },
        { url: 'about', priority: 0.7 },
        { url: 'contact', priority: 0.7 }
    ];

    for (const section of mainSections) {
        sitemap += generateUrlEntry(
            new URL(section.url, site).toString(),
            now,
            section.priority,
            'weekly'
        );
    }

    // Add medical specialty pages
    for (const specialty of MEDICAL_SPECIALTIES) {
        sitemap += generateUrlEntry(
            new URL(`treatments/${specialty.toLowerCase().replace(/\s+/g, '-')}`, site).toString(),
            now,
            0.8,
            'weekly'
        );
    }

    // Add blog posts
    for (const post of posts) {
        const url = new URL(`blog/${post.id}`, site).toString();
        const lastmod = post.data.updatedDate || post.data.pubDate;
        sitemap += generateUrlEntry(url, lastmod, 0.7, 'monthly');
    }

    sitemap += '\n</urlset>';

    return new Response(sitemap, {
        headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 'public, max-age=3600'
        }
    });
}

import { getCollection } from 'astro:content';
import { SITE_TITLE, MEDICAL_SPECIALTIES, BRAND_VARIATIONS, SITE_KEYWORDS } from '../consts';

function formatDate(date: Date): string {
    return date.toISOString().split('T')[0];
}

function escapeXml(unsafe: string): string {
    return unsafe
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');
}

function generateUrlEntry(url: string, lastmod: Date, priority: number, changefreq: string) {
    return `<url><loc>${escapeXml(url)}</loc><lastmod>${formatDate(lastmod)}</lastmod><changefreq>${changefreq}</changefreq><priority>${priority}</priority></url>\n`;
}

interface APIContext {
    site: URL;
}

export async function GET({ site }: APIContext) {
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
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
<!-- ${SITE_TITLE} - Medical Tourism Facilitator -->
<!-- Also known as: ${BRAND_VARIATIONS.join(', ')} -->
<!-- Keywords: ${SITE_KEYWORDS.join(', ')} -->`;

    // Add homepage with all brand variations in metadata
    sitemap += `<url>
        <loc>${site.toString()}</loc>
        <lastmod>${formatDate(now)}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
        <news:news>
            <news:publication>
                <news:name>${escapeXml(SITE_TITLE)}</news:name>
                <news:language>en</news:language>
            </news:publication>
            <news:title>${escapeXml(SITE_TITLE)}</news:title>
        </news:news>
        ${BRAND_VARIATIONS.map(name => 
            `<xhtml:link rel="alternate" media="alternate name" title="${escapeXml(name)}" href="${site.toString()}"/>`
        ).join('\n        ')}
    </url>`;

    // Add main sections with high priority
    const mainSections = [
        { url: 'treatments', priority: 0.9, changefreq: 'daily' },
        { url: 'hospitals', priority: 0.9, changefreq: 'weekly' },
        { url: 'doctors', priority: 0.8, changefreq: 'weekly' },
        { url: 'testimonials', priority: 0.8, changefreq: 'weekly' },
        { url: 'blog', priority: 0.8, changefreq: 'daily' },
        { url: 'about', priority: 0.7, changefreq: 'monthly' },
        { url: 'contact', priority: 0.7, changefreq: 'monthly' }
    ];

    for (const section of mainSections) {
        sitemap += generateUrlEntry(
            new URL(section.url, site).toString(),
            now,
            section.priority,
            section.changefreq
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

    // Add privacy policy page
    sitemap += generateUrlEntry(
        new URL('privacy-policy', site).toString(),
        now,
        0.5,
        'yearly'
    );

    // Add blog posts
    for (const post of posts) {
        const url = new URL(`blog/${post.id}`, site).toString();
        const lastmod = post.data.updatedDate || post.data.pubDate;
        sitemap += generateUrlEntry(url, lastmod, 0.7, 'monthly');
    }

    sitemap += '</urlset>';

    return new Response(sitemap, {
        headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 'public, max-age=3600'
        }
    });
}

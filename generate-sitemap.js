const fs = require('fs');
const { execSync } = require('child_process');

const BASE_URL = 'https://therapygeorgia.ge';

function getLastMod(filepath) {
  try {
    const date = execSync(`git log -1 --format=%ci "${filepath}"`, { encoding: 'utf8' }).trim();
    return date ? date.split(' ')[0] : new Date().toISOString().split('T')[0];
  } catch {
    return new Date().toISOString().split('T')[0];
  }
}

// Discover published blog posts from blog/index.html (commented-out links are ignored)
const blogIndex = fs.readFileSync('blog/index.html', 'utf8');
const blogIndexNoComments = blogIndex.replace(/<!--[\s\S]*?-->/g, '');
const blogLinks = [...blogIndexNoComments.matchAll(/href="\/blog\/([^"]+\.html)"/g)]
  .map(m => `blog/${m[1]}`);

const pages = [
  { path: 'index.html',      url: '/',       priority: '1.0', changefreq: 'weekly'  },
  { path: 'blog/index.html', url: '/blog/',  priority: '0.9', changefreq: 'weekly'  },
  ...blogLinks.map(p => ({ path: p, url: `/${p}`, priority: '0.8', changefreq: 'monthly' }))
];

const urls = pages.map(({ path, url, priority, changefreq }) => {
  const lastmod = getLastMod(path);
  return `  <url>\n    <loc>${BASE_URL}${url}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
}).join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

fs.writeFileSync('sitemap.xml', sitemap);
console.log(`sitemap.xml generated — ${pages.length} URLs`);
pages.forEach(p => console.log(' ', p.url));

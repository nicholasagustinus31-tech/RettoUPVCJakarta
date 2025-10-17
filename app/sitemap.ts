import type { MetadataRoute } from 'next';

const baseUrl = 'https://www.rettoupvcjakarta.com';

const routes = ['', '/about', '/products', '/projects', '/contact'];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8
  }));
}

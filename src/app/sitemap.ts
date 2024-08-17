export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const homeStaticAnchorLinks = [
    `/`,
    `/#vision`,
    `/#values`,
    `/#work`,
    `/#services`,
    `/#company`,
    `/#contact`,
  ];

  const urls = homeStaticAnchorLinks.map((link) => ({
    url: `${baseUrl}${link}`,
    changefreq: 'daily',
  }));

  return [...urls];
}

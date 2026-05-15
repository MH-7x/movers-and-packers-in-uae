export function generateBreadcrumb({
  list = [],
}: {
  list?: { title: string; url: string }[];
}) {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://moversandpackersinuae.com",
      },
      ...list.map((item, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: item.title,
        item: `${process.env.APP_URL}${item.url}`,
      })),
    ],
  };

  return JSON.stringify(breadcrumb, null, 2);
}

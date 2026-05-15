export const generateBlogSchema = ({
  headline,
  datePublished,
  dateModified,
}: {
  headline: string;
  datePublished: string;
  dateModified: string;
}) => {
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: headline,
    author: {
      "@type": "Organization",
      name: "Movers and Packers in UAE",
      url: "https://moversandpackersinuae.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Movers and Packers in UAE",
      logo: {
        "@type": "ImageObject",
        url: "https://moversandpackersinuae.com/square-logo.jpg",
      },
    },
    datePublished: datePublished,
    dateModified: dateModified,
  };
  return JSON.stringify(blogSchema, null, 2);
};

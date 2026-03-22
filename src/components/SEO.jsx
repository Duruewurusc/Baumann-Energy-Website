import { Helmet,  HelmetProvider } from "react-helmet-async";

export default function SEO({ seo }) {
  if (!seo) return null;

  return (
    <HelmetProvider>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
    </HelmetProvider>
  );
}
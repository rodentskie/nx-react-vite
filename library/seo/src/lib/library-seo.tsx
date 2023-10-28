import { Helmet } from 'react-helmet';

export interface SEOProps {
  title: string;
  description: string;
  image: string;
  url: string;
  lang: string;
  keywords: string;
}

export function SEO(props: SEOProps) {
  const { title, description, image, url, keywords, lang } = props;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="lang" content={lang} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <link rel="canonical" href={url} />
    </Helmet>
  );
}

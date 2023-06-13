import Head from "next/head";

interface metaProps {
  url: string;
  pageTitle: string;
  description: string;
  previewImage: string;
}

const MetaData = ({ url, pageTitle, description, previewImage }: metaProps) => {
  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      {/* Google's meta */}
      <meta itemProp="name" content={pageTitle} />
      <meta itemProp="description" content={pageTitle} />
      <meta itemProp="image" content={previewImage} />
      {/* Facebook's meta */}
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageTitle} />
      <meta property="og:image" content={previewImage} />
      {/* Twitter's meta */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:site" content={url} />
      <meta name="twitter:image" content={previewImage} />
    </Head>
  );
};

export default MetaData;

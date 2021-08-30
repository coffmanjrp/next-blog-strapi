import { useContext } from 'react';
import Head from 'next/head';
import { GlobalContext } from '../pages/_app';
import { getStrapiMedia } from '../lib/media';

const Seo = ({ seo }) => {
  const { defaultSeo, siteName } = useContext(GlobalContext);
  const seoWithDefaults = { ...defaultSeo, ...seo };
  const fullSeo = {
    ...seoWithDefaults,
    metaTitle: `${seoWithDefaults.metaTitle} | ${siteName}`,
    shareImage: getStrapiMedia(seoWithDefaults.shareImage),
  };

  return (
    <Head>
      {fullSeo.metaTitle && (
        <>
          <title>{fullSeo.metaTitle}</title>
          <meta property="og:title" content={fullSeo.metaTitle} />
          <meta property="twitter:title" content={fullSeo.metaTitle} />
        </>
      )}
      {fullSeo.metaDescription && (
        <>
          <meta name="description" content={fullSeo.metaDescription} />
          <meta property="og:description" content={fullSeo.metaDescription} />
          <meta
            property="twitter:description"
            content={fullSeo.metaDescription}
          />
        </>
      )}
      {fullSeo.shareImage && (
        <>
          <meta name="og:image" content={fullSeo.shareImage} />
          <meta property="twitter:image" content={fullSeo.shareImage} />
          <meta property="image" content={fullSeo.shareImage} />
        </>
      )}
      {fullSeo.article && <meta property="og:type" content="article" />}
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default Seo;

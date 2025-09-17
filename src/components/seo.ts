import { Metadata } from 'next';
import { sanityFetch } from "@/lib/client/live";
import { siteTitleAndDescriptionQuery } from "@/lib/queries";

export const formatMetaData = async (seo: any): Promise<Metadata> => { 

  const { data: seoData } = await sanityFetch({
    query: siteTitleAndDescriptionQuery,
  });

  let robots = 'index, follow';
  if (seo?.disallowIndexing) {
    robots = 'noindex, nofollow';
  }

  const metaDescription = seo?.metaDescription || seoData?.siteDescription || '';

  return {
    title: seo?.metaTitle + ' | ' +seoData?.siteTitle || '',
    description: metaDescription,
    keywords: seo?.keywords || [],
    robots: robots,
    openGraph: {
      title: seo?.openGraphTitle || seo?.metaTitle || '',
      description: seo?.openGraphDescription || metaDescription || '',
      url: seo?.openGraphUrl || '',
      type: seo?.openGraphType || 'website',
      images: seo?.openGraphImages || [],
    },
  };
};
import type { Metadata } from 'next';
import { sanityFetch } from "@/lib/client/live";
import { homePageQuery, getPageBySlugQuery } from "@/lib/queries";
import { formatMetaData } from '@/components/seo';
import PageSections from '@/components/layout/pageSections';
import NotFound404 from '@/components/layout/NotFound404';

export async function generateMetadata(): Promise<Metadata> {
  const { data: homePage } = await sanityFetch({
    query: homePageQuery,
  });

  const slug = homePage?.homePage?.slug;

  if (!slug) {
    return {
      title: 'Page not found',
    };
  }

  const { data: pageContent } = await sanityFetch({
    query: getPageBySlugQuery(slug),
  });

  if (!pageContent) {
    return {
      title: 'Page not found',
    };
  }

  if (!pageContent?.seo) {

    return formatMetaData({
        metaTitle: pageContent?.title,
        metaDescription: pageContent?.excerpt,
        keywords: ["page"],
    });
  }

  if(!pageContent.seo.metaTitle) {
    pageContent.seo.metaTitle = pageContent?.title;
  }

  if(!pageContent.seo.metaDescription) {
    pageContent.seo.metaDescription = pageContent?.excerpt;
  }

  return formatMetaData(pageContent.seo);
}

export default async function Page() {
  const { data: homePage } = await sanityFetch({
    query: homePageQuery,
  });

  const slug = homePage?.homePage?.slug;

  if (!slug) {
    return <NotFound404/>;
  }

  const { data: pageContent } = await sanityFetch({
    query: getPageBySlugQuery(slug),
  });

  if (!pageContent) {
    return <NotFound404/>;
  }

  if (!pageContent?.bodyContent) {
    return <NotFound404/>;
  }

  return (<PageSections sections={pageContent.bodyContent} />);
}

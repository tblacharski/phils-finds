import { sanityFetch } from "@/lib/client/live";
import { getTagBySlugQuery,  } from "@/lib/queries";
import { formatMetaData } from '@/components/seo';
import NotFound404 from '@/components/layout/NotFound404';
import BlogLists from "@/components/layout/BlogLists";
import SubscribeSection from '@/components/sections/SubscribeSection';

export async function generateMetadata({ params }: any) {
  const { slug } = await params;

  if (!slug) {
    return {
      title: 'Page not found',
    };
  }

  const { data: tagData } = await sanityFetch({
    query: getTagBySlugQuery(slug),
  });

  if (!tagData) {
    return {
      title: 'Page not found',
    };
  }

  if (!tagData?.seo) {

    return formatMetaData({
        metaTitle: tagData?.title,
        metaDescription: tagData?.description,
        keywords: ["category", tagData?.slug || ''],
    });
  }

  if(!tagData.seo.metaTitle) {
    tagData.seo.metaTitle = tagData?.title;
  }

  if(!tagData.seo.metaDescription) {
    tagData.seo.metaDescription = tagData?.description;
  }

  return formatMetaData(tagData.seo);
}

export default async function Page({ params }: any) {
  const { slug } = await params;

  if (!slug) {
    return <NotFound404 />;
  }

  const { data: tagData } = await sanityFetch({
    query: getTagBySlugQuery(slug),
  });

  if (!tagData) {
      return <NotFound404 />;
  }

  return (
    <>
      <div className='container'>
        <div className='mt-20 my-10'>
          <h1 className='font-bold text-dark mb-3.5 text-center'>{tagData?.title}</h1>
          <p className='text-dark mb-3.5 text-center'>{tagData?.description}</p>
        </div>
        <BlogLists tagSlug={slug} />
      </div>
      <SubscribeSection />
    </>
  );
}

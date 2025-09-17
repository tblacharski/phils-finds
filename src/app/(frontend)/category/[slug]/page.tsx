import { sanityFetch } from "@/lib/client/live";
import { getCategoryBySlugQuery,  } from "@/lib/queries";
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

  const { data: categoryData } = await sanityFetch({
    query: getCategoryBySlugQuery(slug),
  });

  if (!categoryData) {
    return {
      title: 'Page not found',
    };
  }

  if (!categoryData?.seo) {

    return formatMetaData({
        metaTitle: categoryData?.title,
        metaDescription: categoryData?.description,
        keywords: ["category", categoryData?.slug || ''],
    });
  }

  if(!categoryData.seo.metaTitle) {
    categoryData.seo.metaTitle = categoryData?.title;
  }

  if(!categoryData.seo.metaDescription) {
    categoryData.seo.metaDescription = categoryData?.description;
  }

  return formatMetaData(categoryData.seo);
}

export default async function Page({ params }: any) {
  const { slug } = await params;

  if (!slug) {
    return <NotFound404 />;
  }

  const { data: categoryData } = await sanityFetch({
    query: getCategoryBySlugQuery(slug),
  });

  if (!categoryData) {
    return <NotFound404 />;
  }

  return (
    <>
      <div className='container'>
        <div className='mt-20 my-10'>
          <h1 className='font-bold text-dark mb-3.5 text-center'>{categoryData?.title}</h1>
          <p className='text-dark mb-3.5 text-center'>{categoryData?.description}</p>
        </div>
        <BlogLists categorySlug={slug} />
      </div>
      <SubscribeSection />
    </>
  );
}

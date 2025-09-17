import Image from "next/image";
import Link from "next/link";
import { sanityFetch } from "@/lib/client/live";
import { getBlogBySlugQuery,  } from "@/lib/queries";
import { formatMetaData } from '@/components/seo';
import PageSections from '@/components/layout/pageSections';
import NotFound404 from '@/components/layout/NotFound404';
import SubscribeSection from '@/components/sections/SubscribeSection';
import DateFormat from "@/components/modules/DateFormat";
import ReadBlogTime from "@/components/modules/ReadBlogTime";

export async function generateMetadata({ params }: any) {
  const { slug } = await params;

  if (!slug) {
    return {
      title: 'Page not found',
    };
  }

  const { data: blogData } = await sanityFetch({
    query: getBlogBySlugQuery(slug),
  });

  if (!blogData) {
    return {
      title: 'Page not found',
    };
  }

  if (!blogData?.seo) {

    return formatMetaData({
        metaTitle: blogData?.title,
        metaDescription: blogData?.excerpt,
        keywords: ["blog", "blog details"],
    });
  }

  if(!blogData.seo.metaTitle) {
    blogData.seo.metaTitle = blogData?.title;
  }

  if(!blogData.seo.metaDescription) {
    blogData.seo.metaDescription = blogData?.excerpt;
  }

  return formatMetaData(blogData.seo);
}

export default async function Page({ params }: any) {
  const { slug } = await params;

  if (!slug) {
    return <NotFound404 />;
  }

  const { data: blogData } = await sanityFetch({
    query: getBlogBySlugQuery(slug),
  });

  if (!blogData) {
      return <NotFound404 />;
  }

  return (
    <div className='main-content pt-10'>
      <div className='container'>
        <div className='entry-content'>
            <h1 className='font-bold text-2xl sm:text-4xl lg:text-custom-2 text-dark mb-5 text-center'>{blogData.title}</h1>
            <div className='flex justify-center items-center mb-5'>
              <Image src={blogData?.featuredImage?.url || "/placeholder-1280-750.png"} alt={blogData?.title} width={1200} height={1080} className="w-full object-cover max-h-[650px] rounded-xl" />
            </div>
             <div className="flex items-center gap-5 justify-center mb-5">
                <div className="flex gap-2.5 justify-center items-center">
                    <Link href={`/author/${blogData?.author?.slug}`} aria-label={blogData?.author?.name} className="flex gap-1.5 justify-center items-center">
                        {blogData?.author?.image ? (
                            <Image src={blogData?.author?.image?.url || "/placeholder.svg"} width={300} height={300} alt={blogData?.author?.name} className="w-13 h-13 object-cover rounded-full" />
                        ) : (
                            <span className="text-xs font-medium text-gray-600 flex justify-center items-center w-13 h-13 bg-gray-300 rounded-full overflow-hidden">{blogData?.author?.name.split(" ").map((n: any) => n[0]).join("")}</span>
                        )}
                        <p className="text-xl font-bold text-gray-600 leading-none">{blogData?.author?.name}</p>
                    </Link>
                </div>
                <span className="flex w-2 h-2 rounded-full bg-gray-300"></span>
                <div className='flex gap-3 justify-center items-center'>
                  {blogData?.categories?.length > 0 ? (
                      blogData?.categories?.map((category: any, index: number) => (
                          <Link key={index} href={`/category/${category?.slug}`} aria-label={category?.title} className="inline-flex px-3 py-2 text-sm font-medium bg-blue-100 text-blue-600 rounded-md">{category?.title}</Link>
                      ))
                  ) : ''}
                </div>
                <span className="flex w-2 h-2 rounded-full bg-gray-300"></span>
                <p className="text-xl text-gray-600"><DateFormat date={blogData?.publishedAt} /></p>
                <span className="flex w-2 h-2 rounded-full bg-gray-300"></span>
                <ReadBlogTime blogContent={blogData?.bodyContent} className="text-xl text-gray-600" />
            </div>
            <PageSections sections={blogData?.bodyContent} />
            
            {blogData?.tags?.length > 0 && (
              <div className="flex gap-0 mb-5 items-center border-t border-b border-gray-200 py-3">
                <span className="mr-3 text-lg font-bold">Tags:</span>
                {blogData.tags.map((tag: any, index: number) => (
                  <span key={index} className="flex items-center text-lg">
                  <Link href={`/tag/${tag?.slug}`} aria-label={tag?.title} className="inline-flex text-lg font-medium" >{tag?.title}</Link>
                  {index !== blogData.tags.length - 1 && (
                    <span className="mx-3 text-lg text-gray-400">|</span>
                  )}
                  </span>
                ))}
              </div>
            )}
        </div>
      </div>
      <SubscribeSection />
    </div>
  );
}

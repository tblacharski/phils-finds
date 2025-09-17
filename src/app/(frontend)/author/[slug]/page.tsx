import { sanityFetch } from '@/lib/client/live';
import { getAuthorBySlugQuery } from '@/lib/queries';
import BlogLists from "@/components/layout/BlogLists";
import SubscribeSection from '@/components/sections/SubscribeSection';
import RichTextSection from '@/components/sections/RichTextSection';
import Image from "next/image";
import Link from "next/link";
import NotFound404 from '@/components/layout/NotFound404';

export default async function Page({ params }: any) {
    const { slug } = await params;

    if (!slug) {
        return <NotFound404 />;
    }

    const { data: authorData } = await sanityFetch({
        query: getAuthorBySlugQuery(slug),
    });

    if (!authorData) {
        return <NotFound404 />;
    }

    console.log("authorData", authorData?.socialLinks);

    return (
        <>
            <div className='container'>
            <div className='mt-20 my-10'>
                <div className='flex justify-center items-center mb-5'>
                    {authorData?.image?.url ? (
                        <Image src={authorData?.image?.url || "/placeholder.svg"} alt={authorData?.name} width={500} height={500} className="object-cover w-50 h-50 rounded-full" />
                    ) : (
                        <span className="text-5xl font-bold text-gray-600 flex justify-center items-center w-50 h-50 bg-gray-300 rounded-full overflow-hidden">{authorData?.name.split(" ").map((n: any) => n[0]).join("")}</span>
                    )}
                </div>
                <h1 className='font-bold text-dark mb-5 text-center'>{authorData?.name}</h1>
                <div className='flex justify-center items-center text-center mb-5 gap-4'>
                    {authorData?.designation ? ( <p className='inline-flex px-3 py-4 text-sm font-medium bg-blue-100 text-blue-600 rounded-md leading-none'>{authorData?.designation}</p>): ''}
                    {authorData?.socialLinks?.length
                    ? authorData.socialLinks.map((link: any, index: number) => (
                        <Link key={index} href={`${link?.url}`} target="_blank" aria-label={link?.title} title={link?.title} className="inline-flex py-3 px-3 rounded-md bg-gray-200">
                            {link?.icon?.url ? (
                                <Image src={link?.icon?.url} alt={link?.icon?.alt || link?.title} width={50} height={50} className="object-cover w-5 h-5" />
                            ) : (
                                <span className="text-sm font-bold text-gray-600 flex justify-center items-center w-5 h-5 rounded-full overflow-hidden">{link?.title.split(" ").map((n: any) => n[0]).join("")}</span>
                            )}
                        </Link>
                    ))
                    : null}

                </div>
                <div className='flex justify-center items-center text-center mb-5'>
                    <RichTextSection key={authorData?._key} section={authorData} isContainer={false}></RichTextSection>
                </div>
            </div>
            <BlogLists  authorSlug={slug} />
            </div>
            <SubscribeSection />
        </>
    );
}

"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import BlogCard from "@/components/sections/BlogCard";
import Pagination from "@/components/sections/Pagination";

export default function BlogLists({categorySlug = '', tagSlug='', authorSlug = ''}) {

    const searchParams = useSearchParams();
    const search = searchParams?.get("s") || "";

    const perPage = 9;
    const [currentPage, setCurrentPage] = useState(1);
    const [blogLists, setBlogLists] = useState<any[]>([]);
    const [totalPosts, setTotalPosts] = useState(0);

    useEffect(() => {
        const fetchBlogs = async () => {
            const res = await fetch(`/api/blogs?perPage=${perPage}&page=${currentPage}&search=${search}&categorySlug=${categorySlug}&authorSlug=${authorSlug}&tagSlug=${tagSlug}`);
            const data = await res.json();
            setBlogLists(data?.blogs || []);
            setTotalPosts(data?.total || 0);
        };

        fetchBlogs();
    }, [perPage, currentPage, search, categorySlug, tagSlug ,authorSlug]);

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-11 gap-x-7.5 mb-10">
                {blogLists.length > 0 ? (
                    blogLists.map((blog: any, index: number) => (
                        <BlogCard key={index} blog={blog} />
                    ))
                ) : ''}
            </div>
            <div className="w-full mt-5 mb-5 text-center">
                <Pagination
                totalPosts={totalPosts}
                perPage={perPage}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
                />
            </div>
        </>
    );
}
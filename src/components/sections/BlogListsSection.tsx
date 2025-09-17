"use client";

import { useEffect, useState } from "react";
import ButtonSection from "./ButtonSection";
import BlogCard from "./BlogCard";
import Pagination from "./Pagination";

export default function BlogListsSection({ section }: { section: any }) {
  const perPage = section?.numberOfBlogs || 3;
  const [currentPage, setCurrentPage] = useState(1);
  const [blogLists, setBlogLists] = useState<any[]>([]);
  const [totalPosts, setTotalPosts] = useState(0);

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await fetch(`/api/blogs?perPage=${perPage}&page=${currentPage}`);
      const data = await res.json();
      setBlogLists(data?.blogs || []);
      setTotalPosts(data?.total || 0);
    };

    fetchBlogs();
  }, [perPage, currentPage]);

  const cardButton = {
    textAlign: "center",
    url: section?.buttonLink || "#",
    label: section?.buttonLabel || "Learn More",
    type: "primary",
  };

  return (
    <div className="latest-blogs py-12 lg:py-20">
      <div className="container">
        {/* Heading Section */}
        {section?.heading && (
          <div className="mb-10 text-center">
            <h2 className="text-4xl leading-[1.2] font-bold mb-4">
              {section.heading}
            </h2>
          </div>
        )}

        {/* Blog Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-11 gap-x-7.5 mb-12">
          {blogLists.length > 0 ? (
            blogLists.map((blog: any, index: number) => (
              <BlogCard key={index} blog={blog}/>
            ))
          ) : ''}
        </div>

        {/* Pagination / Button */}
        {section?.enablePagination && (
          <div className="w-full mt-5 text-center">
            {section?.displayButtons ? (
              <ButtonSection section={cardButton} isContainer={false} />
            ) : (
              <Pagination
                totalPosts={totalPosts}
                perPage={perPage}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}

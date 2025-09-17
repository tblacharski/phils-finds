"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import BlogCard from "@/components/sections/BlogCard";
import Pagination from "@/components/sections/Pagination";

interface SearchPageSectionProps {
  categorySlug?: string;
}

export default function SearchPageSection({ categorySlug = "" }: SearchPageSectionProps) {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  const perPage = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const [blogLists, setBlogLists] = useState<any[]>([]);
  const [totalPosts, setTotalPosts] = useState(0);

  // Only access window on client side
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const s = params.get("s") || "";
      setSearch(s);
      setQuery(s);
      setCurrentPage(1);
    }
  }, [typeof window !== "undefined" ? window.location.search : ""]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await fetch(
        `/api/blogs?perPage=${perPage}&page=${currentPage}&search=${encodeURIComponent(
          search
        )}&categorySlug=${categorySlug}`
      );
      const data = await res.json();
      setBlogLists(data?.blogs || []);
      setTotalPosts(data?.total || 0);
    };

    fetchBlogs();
  }, [perPage, currentPage, search, categorySlug]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/search?s=${encodeURIComponent(query)}`);
  };

  return (
    <div className="search-lists py-12 lg:py-20">
      <div className="w-full py-10 bg-gradient-to-t from-slate-100 to-slate-50 mb-10">
        <div className="container py-10">
          <div className="flex items-center justify-center flex-col mb-5">
            <h1 className="text-5xl font-semibold text-center">
              Search results for: "{search}"
            </h1>
          </div>
          <form onSubmit={handleSearch} className="flex gap-2 justify-center">
            <input
              type="text"
              name="s"
              placeholder="Search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 md:flex-none px-4 py-3 w-[100%] rounded-sm max-w-[350px] border border-slate-300 outline-none shadow-none bg-white"
            />
            <button type="submit" className="button button-primary cursor-pointer">
              Search
            </button>
          </form>
        </div>
      </div>

      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-11 gap-x-7.5 mb-10">
          {blogLists.length > 0 ? (
            blogLists.map((blog: any, index: number) => <BlogCard key={index} blog={blog} />)
          ) : (
            <div className="col-span-3 text-center text-xl">No results found</div>
          )}
        </div>
        <div className="w-full mt-5 text-center">
          <Pagination
            totalPosts={totalPosts}
            perPage={perPage}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
}

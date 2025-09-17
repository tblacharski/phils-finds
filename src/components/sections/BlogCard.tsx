import Image from "next/image";
import Link from "next/link";
import DateFormat from "@/components/modules/DateFormat";
import ReadBlogTime from "@/components/modules/ReadBlogTime";

export default function BlogCard({ blog }: { blog: any }) {

    return(
        <div className="group">
            <div className="mb-6 overflow-hidden rounded-[10px] transition-all group-hover:scale-105">
                <Link href={`/blog/${blog?.slug}`} aria-label={blog?.title}>
                    <Image src={blog?.featuredImage?.url || "/placeholder-400-370.png"} alt={blog?.title} width={600} height={400} className="object-cover" />
                </Link>
            </div>
            <h3 className="min-h-[80px]">
                <Link href={`/blog/${blog?.slug ?? ""}`} aria-label={blog?.title ?? "Blog Post"} title={blog?.title ?? ""} className="block text-dark font-bold text-xl" >
                    <span className="bg-gradient-to-r from-purple-500/70 to-indigo-400/50 bg-[length:0%_3px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px]">{blog?.title ? blog.title.length > 70 ? `${blog.title.substring(0, 70)}...` : blog.title : "Untitled"}</span>
                </Link>
            </h3>

            <p className="text-gray-900">{blog?.excerpt && blog.excerpt.length > 120 ? `${blog.excerpt.substring(0, 120)}...` : blog?.excerpt}</p>
            <div className="flex flex-wrap gap-3 items-center justify-between mt-4.5">
                <div className="flex items-center gap-3">
                    <div className="flex gap-2.5 justify-center items-center">
                        <Link href={`/author/${blog?.author?.slug}`} aria-label={blog?.author?.name} className="flex gap-1.5 justify-center items-center">
                            {blog?.author?.image ? (
                                <Image src={blog?.author?.image?.url || "/placeholder.svg"} width={300} height={300} alt={blog?.author?.name} className="w-8 h-8 object-cover rounded-full" />
                            ) : (
                                <span className="text-xs font-medium text-gray-600 flex justify-center items-center w-8 h-8 bg-gray-300 rounded-full overflow-hidden">{blog?.author?.name.split(" ").map((n: any) => n[0]).join("")}</span>
                            )}
                            <p className="text-sm text-gray-600 leading-none">{blog?.author?.name}</p>
                        </Link>
                    </div>
                    <span className="flex w-1 h-1 rounded-full bg-gray-300"></span>
                    <p className="text-sm text-gray-600"><DateFormat date={blog?.publishedAt} /></p>
                    <span className="flex w-1 h-1 rounded-full bg-gray-300"></span>
                    <ReadBlogTime blogContent={blog?.bodyContent} className="text-sm text-gray-600" />
                </div>
                <Link href={`/category/${blog?.categories[0]?.slug}`} aria-label={blog?.categories[0]?.title} className="inline-flex px-3 py-2 text-sm font-medium bg-blue-100 text-blue-600 rounded-md">{blog?.categories[0]?.title}</Link>
            </div>
        </div>
    );
}
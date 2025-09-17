import { NextResponse } from "next/server";
import { sanityFetch } from "@/lib/client/live";
import { blogQuery } from "@/lib/queries";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const perPage = Number(searchParams.get("perPage") || 3);
  const currentPage = Number(searchParams.get("page") || 1);
  const search = searchParams.get("search") || "";
  const categorySlug = searchParams.get("categorySlug") || "";
  const tagSlug = searchParams.get("tagSlug") || "";
  const authorSlug = searchParams.get("authorSlug") || "";

  const { data } = await sanityFetch({
    query: blogQuery(perPage, currentPage, search, categorySlug, tagSlug, authorSlug),
  });

  return NextResponse.json(data);
}

import { formatMetaData } from '@/components/seo';
import SearchPageSection from "@/components/layout/SearchPageSection";

export async function generateMetadata() {
 
    return formatMetaData({
        metaTitle: 'Search Results',
        metaDescription: 'Find the most relevant results for your query. Explore blogs, articles, and resources tailored to your interests.',
        keywords: ["search", "results"],
    });
}

export default function SearchPage() {

    return <SearchPageSection />
}
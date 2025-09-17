import { sanityFetch } from "@/lib/client/live"
import { headerQuery } from "@/lib/queries"
import HeaderHtml from "../modules/HeaderHtml"
export default async function Header() {
    
    const { data: settings } = await sanityFetch({
        query: headerQuery,
    });

    return(
        <HeaderHtml settings={settings} />
    )
}
import { sanityFetch } from "@/lib/client/live"
import { footerQuery } from "@/lib/queries"
import FooterHtml from '@/components/modules/FooterHtml';
export default async function Footer() {

    const { data: settings } = await sanityFetch({
        query: footerQuery,
    });

    return (
       <FooterHtml settings={settings}/>
    )
}
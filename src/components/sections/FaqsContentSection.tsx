import { sanityFetch } from "@/lib/client/live";
import { faqsQuery } from "@/lib/queries";
import ButtonSection from './ButtonSection';
import FaqsAccordion from "./FaqsAccordion";

export default async function FaqsContentSection({section}: {section: any}) {

    const faqsIds = section?.faqs?.map((item: any) => item?._ref).filter(Boolean);
    let faqsData = [];
    if (faqsIds && faqsIds.length > 0) {
        const { data } = await sanityFetch({
            query: faqsQuery,
            params: { ids: faqsIds },
        });

        faqsData = data;
    }

    return (
        <div className="faqs-wrap w-full py-12">
            <div className={`container`}>
                <h2 className="font-bold mb-6 text-center">{section?.heading}</h2>
                <p className="text-lg mb-4 text-center">{section?.subheading}</p>
                <FaqsAccordion faqs={faqsData} />
                <div className={`flex flex-wrap gap-4 items-center justify-center mt-4`}>
                    {section?.buttons?.map((item: any) => (
                        <ButtonSection section={item} isContainer={false} key={item._key} />
                    ))}
                </div>
            </div>
        </div>
    )
}
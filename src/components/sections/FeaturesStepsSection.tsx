import Image from "next/image";
import { urlFor } from "@/lib/sanityImageUrl";

export default function FeaturesStepsSection({section}: {section: any}) {

    return (
        <div className={`features-section py-12 lg:py-20 bg-gradient-to-t from-slate-100 to-slate-50 ${section?.class || ""}`} >
            <div className="container">
                <div className="mb-10 text-center">
                    {section?.subHeading && (<p className="text-lg mb-3 font-bold">{section.subHeading}</p>)}
                    {section?.heading && (<h2 className="text-4xl leading-[1.2] font-bold mb-4">{section.heading}</h2>)}
                    {section?.content && <p className="text-base mb-0">{section.content}</p>}
                </div>
                <div className="features-items grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {section?.features && section.features.map((feature: any, index: number) => {
                        const imageUrl = feature?.image?.asset?._ref ? urlFor(feature.image).url() : "";
                        return  (
                            <div key={index} className={`feature-item flex flex-col items-center justify-center ${feature?.class || ""}`}>
                                {imageUrl && (
                                    <div className="p-5 bg-white mb-4 rounded-2xl shadow-sm">
                                        <Image
                                        src={imageUrl}
                                        alt={feature?.image?.alt || "Logo"}
                                        width={feature?.image?.width || 100}
                                        height={feature?.image?.height || 100}
                                        className="object-contain h-auto"
                                        />
                                    </div>
                                )}
                                <h3 className="text-4xl font-bold mb-3">{feature.heading}</h3>
                                <p className="text-xl">{feature.content}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
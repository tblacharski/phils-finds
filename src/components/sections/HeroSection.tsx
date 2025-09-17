import HeroSectionLayoutDefault from "./HeroSectionLayoutDefault";
import HeroSectionLayoutTwo from "./HeroSectionLayoutTwo";

export default function HeroSection({section}: {section: any}) {

    if( "layout2" === section?.layout ) {
        return (
            <HeroSectionLayoutTwo section={section} />
        )
    }
    return (
        <HeroSectionLayoutDefault section={section} />
    )
}
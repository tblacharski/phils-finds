import Link from 'next/link';
export default function ButtonSection({section, isContainer = true}: {section: any, isContainer?: boolean}) {
    const alignmentClass = section.textAlign === 'center' ? 'text-center' : section.textAlign === 'right' ? 'text-right' : 'text-left';
    const buttonType = section?.type || 'primary';

    if( !isContainer ) {
        return(<Link href={section?.url} className={`button button-${buttonType} ${alignmentClass} ${section?.class}`}>{section?.label}</Link>);
    }

    return (
        <div className='w-full'>
            <div className={`container`}>
                <Link href={section?.url} className={`button button-${buttonType} ${alignmentClass} ${section?.class}`}>{section?.label}</Link>
            </div>
        </div>
    )
}
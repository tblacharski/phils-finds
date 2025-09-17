export default function ParagraphSection({section}: {section: any}) {
    const alignmentClass = section.textAlign === 'center' ? 'text-center' : section.textAlign === 'right' ? 'text-right' : 'text-left';
    return (
        <div className="container">
            <p className={`w-full mt-4 mb-4 ${alignmentClass}`}>{section?.paragraph}</p>
        </div>
    )
}
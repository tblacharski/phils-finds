import React from 'react';

type SectionType = {
    level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    textAlign?: 'left' | 'center' | 'right';
    text: string;
};

export default function HeadingSection({section}: {section: SectionType}) {
    const alignmentClass = section?.textAlign === 'center' ? 'text-center' : section?.textAlign === 'right' ? 'text-right' : 'text-left';
  
    return (
        <div className='container mt-4 mb-4 '>
            {React.createElement( section?.level || 'h2', {
                className: `font-bold text-dark ${alignmentClass}`,
            },
            section?.text
            )}
        </div>
    );
}
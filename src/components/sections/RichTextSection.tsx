'use client';

import Image from 'next/image';
import { urlFor } from '@/lib/sanityImageUrl';  
import { PortableText, PortableTextComponents } from '@portabletext/react';

const components: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) return null;

      const imageUrl = urlFor(value).url();

      if (!imageUrl) return null;

      return (
        <div className="my-6">
          <Image
            src={imageUrl}
            alt={value.alt || 'Image'}
            width={600}
            height={400}
            className="rounded-md object-contain"
          />
        </div>
      );
    },
  },
  block: {
    normal: ({ children }) => <p className="font-normal text-[16px] leading-[24px] md:text-[18px] md:leading-[28px] mb-4">{children}</p>,
    h1: ({ children }) => <h1 className="font-bold text-[48px] leading-[58px] md:text-[60px] md:leading-[72px] mb-4">{children}</h1>,
    h2: ({ children }) => <h2 className="font-bold text-[40px] leading-[48px] md:text-[48px] md:leading-[58px] mb-4">{children}</h2>,
    h3: ({ children }) => <h3 className="font-bold text-[32px] leading-[40px] md:text-[40px] md:leading-[48px] mb-4">{children}</h3>,
    h4: ({ children }) => <h4 className="font-bold text-[24px] leading-[32px] md:text-[30px] md:leading-[38px] mb-4">{children}</h4>,
    h5: ({ children }) => <h5 className="font-bold text-[22px] leading-[32px] md:text-[28px] md:leading-[40px] mb-4">{children}</h5>,
    h6: ({ children }) => <h6 className="font-bold text-[20px] leading-[28px] md:text-[24px] md:leading-[30px] mb-4">{children}</h6>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gray-400 bg-gray-50 p-4 my-4">
        <p className="text-xl italic font-medium leading-relaxed text-gray-900 dark:text-white font-normal text-[16px] leading-[24px] md:text-[18px] md:leading-[28px] text-gray-600">{children}</p>
      </blockquote>
    ),
  },
  marks: {
    em: ({ children }) => <em className="italic">{children}</em>,
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    code: ({ children }) => (
      <code className="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono">{children}</code>
    ),
    link: ({ value, children }) => {
      const target = value?.href?.startsWith('http') ? '_blank' : undefined;
      return (
        <a
          href={value?.href}
          target={target}
          rel={target === '_blank' ? 'noopener noreferrer' : undefined}
          className="underline text-blue-600 hover:text-blue-800"
        >
          {children}
        </a>
      );
    },
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc pl-6">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal pl-6">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="mb-1">{children}</li>,
    number: ({ children }) => <li className="mb-1">{children}</li>,
  },
};

export default function RichTextSection({ section, isContainer = true }: { section: any, isContainer?: boolean }) {
  
  if( !isContainer) {
    return(
      Array.isArray(section?.content) && section.content.length > 0 ? (
          <PortableText value={section.content} components={components} />
        ) : ''
    )
  }

  return (
    <div className="w-full py-5">
      <div className="container">
        {Array.isArray(section?.content) && section.content.length > 0 ? (
          <PortableText value={section.content} components={components} />
        ) : ''}
      </div>
    </div>
  );
}

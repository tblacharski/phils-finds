'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type NavigationItem = {
  title: string;
  url: string;
  children?: NavigationItem[];
};

type SocialItem = {
  title: string;
  url: string;
  icon: {
    alt: string;
    asset: {
      url: string;
    };
  }
};

type SettingsType = {
  siteTitle: string;
  copyrightText: string;
  socialLinks: SocialItem[];
  footerNavigation: NavigationItem[];
};

export default function FooterHtml({ settings }: { settings: SettingsType } ) {

    const currentYear = new Date().getFullYear();

    const siteTitle = ( settings?.siteTitle ) ? settings?.siteTitle : '';
    const copyrightText =  `Copyright © ${currentYear} ${siteTitle}, All Rights Reserved.`;

    return(
         <footer className="border-t border-gray-200 text-gray-600 text-sm py-6">
            <div className="container flex flex-wrap items-center gap-4 justify-center sm:justify-between">
                <div className="text-center lg:text-left text-[color:var(--color-dark-4)]">{(settings?.copyrightText) ? settings?.copyrightText : copyrightText}</div>
                <div className="flex flex-wrap items-center justify-center gap-x-3 text-center text-base text-[color:var(--color-dark-4)]">
                  {settings?.footerNavigation?.map((item, index) => (
                    <React.Fragment key={index || item.url}>
                      <Link href={item.url} className="hover:text-[var(--primary)] transition text-sm hover:text-black">
                        {item.title}
                      </Link>
                      {index < settings.footerNavigation.length - 1 && (
                        <span className="text-gray-400 hidden sm:inline">·</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
                <div className="flex items-center justify-center gap-3 min-w-[220px]">
                    <span className="font-medium hidden sm:inline text-black font-bold">Follow Us:</span>
                    {settings?.socialLinks?.map((item, index) => (
                        (item?.icon?.asset?.url) ? (
                          <Link key={index} href={item.url} className="flex items-center justify-center w-5 h-5 rounded-full hover:bg-gray-2 lg:transition-all lg:duration-200 hover:text-dark">
                            <Image src={item?.icon?.asset?.url} alt={(item?.icon?.alt) ? item?.icon?.alt : 'social Icon'+index} width={20} height={20} />
                          </Link>
                        ) : ""
                    ))}
                </div>
            </div>
        </footer>
    )
}
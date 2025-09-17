'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HamburgerMenu from '../sections/HamburgerMenu';
import MobileNavigation from '../sections/MobileNavigation';
import SubscribeModal from '../sections/SubscribeModal';
import SearchModal from '../sections/SearchModal';

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
  siteLogo: {
    asset: {
      url: string;
    };
  };
  headerNavigation: NavigationItem[];
  socialLinks: SocialItem[];
};

export default function HeaderHtml({ settings }: { settings: SettingsType } ) {
  const [stickyMenu, setStickyMenu] = useState(false);
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isSubscribe, setIsSubscribe] = useState(false);
  const [isSearch, setIsSearch] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setStickyMenu(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setNavigationOpen(true);
      } else {
        setIsOpen(false);
        setNavigationOpen(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header
      className={`left-0 top-0 w-full z-[9999] py-7 lg:py-0 transition-all ease-in-out duration-300 bg-white ${
        stickyMenu ? 'fixed shadow-sm py-4! lg:py-0!' : ''
      }`}
    >
      <div className='container lg:flex items-center justify-between relative'>
        <div className='w-full lg:w-3/12 flex items-center justify-between'>
          <Link href="/">
              {
                ( settings?.siteLogo?.asset?.url ) ? (
                  <Image src={settings?.siteLogo?.asset?.url} alt={(settings?.siteTitle) ? settings?.siteTitle : 'Header Logo'} width={150} height={50} />
                ) : (
                  <span>{settings?.siteTitle}</span>
                )
              }
          </Link>
          <div className='flex items-center justify-end lg:hidden block'>
            <button 
              onClick={() => setIsSearch(true)}
              aria-label="Open Search modal" 
              className="flex items-center justify-center w-11 h-11 rounded-full bg-gray transition-all ease-linear duration-200 hover:bg-gray-2 hover:text-dark cursor-pointer"
              >
              <svg className="fill-current" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" >
                <path d="M19.1875 17.4063L14.0313 13.2188C16.1563 10.3125 15.9375 6.15625 13.2812 3.53125C11.875 2.125 10 1.34375 8 1.34375C6 1.34375 4.125 2.125 2.71875 3.53125C-0.1875 6.4375 -0.1875 11.1875 2.71875 14.0938C4.125 15.5 6 16.2813 8 16.2813C9.90625 16.2813 11.6875 15.5625 13.0938 14.2813L18.3125 18.5C18.4375 18.5938 18.5938 18.6563 18.75 18.6563C18.9688 18.6563 19.1562 18.5625 19.2812 18.4063C19.5312 18.0938 19.5 17.6563 19.1875 17.4063ZM8 14.875C6.375 14.875 4.875 14.25 3.71875 13.0938C1.34375 10.7188 1.34375 6.875 3.71875 4.53125C4.875 3.375 6.375 2.75 8 2.75C9.625 2.75 11.125 3.375 12.2812 4.53125C14.6562 6.90625 14.6562 10.75 12.2812 13.0938C11.1562 14.25 9.625 14.875 8 14.875Z" fill="currentColor"/>
              </svg>
            </button>
            {navigationOpen ? (
              <HamburgerMenu 
                isOpen={isOpen}
                setIsOpen={setIsOpen}
              />
            ) : ''}   
          </div> 
        </div>
        <div className='w-full lg:w-9/12 h-0 lg:h-auto invisible lg:visible lg:flex items-center justify-between'>
            {( settings?.headerNavigation ) ? (
              <nav>
                <ul className="flex lg:items-center flex-col lg:flex-row gap-5 lg:gap-10">
                  {settings?.headerNavigation?.map((item: any, index: number) => (
                    <li key={index} className={`group relative lg:py-6.5 ${stickyMenu ? 'lg:py-4!' : ''}`}>
                      <Link href={item.url}>{item.title}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ) : ''}
            
            <div className='flex flex-wrap items-center gap-8.5 mt-7 lg:mt-0'>
              <div className='flex items-center gap-0'>
                {( settings?.socialLinks ) ? (
                  <nav className="flex lg:items-center flex-col lg:flex-row gap-1.5">
                      {settings?.socialLinks?.map((item, index) => (
                        (item?.icon?.asset?.url) ? (
                          <Link 
                          key={index} 
                          href={item.url} 
                          className="flex items-center justify-center w-7.5 h-7.5 rounded-full hover:bg-gray-2 lg:transition-all lg:duration-200 hover:text-dark">
                          <Image src={item?.icon?.asset?.url} alt={(item?.icon?.alt) ? item?.icon?.alt : 'social Icon'+index} width={20} height={20} />
                          </Link>
                        ) : ""
                    ))}
                  </nav>
                ) : ''}
              </div>
              <div className="flex items-center gap-4.5">
                <button 
                  onClick={() => setIsSearch(true)}
                  aria-label="Open Search modal" 
                  className="flex items-center justify-center w-11 h-11 rounded-full bg-gray transition-all ease-linear duration-200 hover:bg-gray-2 hover:text-dark cursor-pointer"
                  >
                  <svg className="fill-current" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" >
                    <path d="M19.1875 17.4063L14.0313 13.2188C16.1563 10.3125 15.9375 6.15625 13.2812 3.53125C11.875 2.125 10 1.34375 8 1.34375C6 1.34375 4.125 2.125 2.71875 3.53125C-0.1875 6.4375 -0.1875 11.1875 2.71875 14.0938C4.125 15.5 6 16.2813 8 16.2813C9.90625 16.2813 11.6875 15.5625 13.0938 14.2813L18.3125 18.5C18.4375 18.5938 18.5938 18.6563 18.75 18.6563C18.9688 18.6563 19.1562 18.5625 19.2812 18.4063C19.5312 18.0938 19.5 17.6563 19.1875 17.4063ZM8 14.875C6.375 14.875 4.875 14.25 3.71875 13.0938C1.34375 10.7188 1.34375 6.875 3.71875 4.53125C4.875 3.375 6.375 2.75 8 2.75C9.625 2.75 11.125 3.375 12.2812 4.53125C14.6562 6.90625 14.6562 10.75 12.2812 13.0938C11.1562 14.25 9.625 14.875 8 14.875Z" fill="currentColor"/>
                  </svg>
                </button>
                <button 
                    onClick={() => setIsSubscribe(true)} 
                    className="rounded-md text-white font-medium flex justify-center py-2.5 px-5.5 bg-black transition-all ease-linear duration-200 hover:opacity-90 cursor-pointer"
                >Subscribe</button>
                </div>
              </div>
        </div>
      </div>
      <MobileNavigation
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          isSubscribe={isSubscribe}
          setIsSubscribe={setIsSubscribe}
          settings={settings}
      />
      <SubscribeModal
          isSubscribe={isSubscribe}
          setIsSubscribe={setIsSubscribe}
        />
      <SearchModal
          isSearch={isSearch}
          setIsSearch={setIsSearch}
        />
    </header>
  );
}

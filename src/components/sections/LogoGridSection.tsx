"use client";

import Image from "next/image";
import { urlFor } from "@/lib/sanityImageUrl";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules"; // ✅ import modules
import "swiper/css";
import "swiper/css/navigation";

export default function LogoGridSection({ section }: { section: any }) {
  const logos = section?.logos || [];
  const layout = section?.layout || "grid";

  if (layout === "slider") {
    return (
      <div className={`logo-grid logo-${layout}-layout py-12`}>
        <div className="container">
          <div className={`logo-items relative md:rounded-[40px] py-8 px-8 sm:px-10 md:py-[40px] md:px-[50px] xl:py-[50px] xl:px-14 2xl:px-[70px] 2xl:py-[70px] relative z-10 bg-gradient-to-t from-slate-100 to-slate-50`}>
            {logos.length > 5 && (
                <>
                    <div className="swiper-button-prev !left-5 after:!text-3xl after:!font-bold !text-slate-600"></div>
                    <div className="swiper-button-next !right-5 after:!text-3xl after:!font-bold !text-slate-600"></div>
                </>
            )}
            <Swiper
              modules={[Autoplay, Navigation]}
              spaceBetween={30}
              slidesPerView={5}
              slidesPerGroup={1}
              loop={false}
              autoplay={{
                delay: 1000000,
                disableOnInteraction: false,
              }}
              navigation={{
                prevEl: ".swiper-button-prev",
                nextEl: ".swiper-button-next",
              }}
              breakpoints={{
                0:{
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                },
                640:{
                    slidesPerView: 2,
                    slidesPerGroup: 1,
                },
                768:{
                    slidesPerView: 3,
                    slidesPerGroup: 1,
                },
                1024:{
                    slidesPerView: 4,
                    slidesPerGroup: 1,
                },
                1280:{
                    slidesPerView: 5,
                    slidesPerGroup: 1,
                }
              }}
            >
              {logos.map((logo: any) => {
                const imageUrl = logo?.image?.asset?._ref
                  ? urlFor(logo.image).url()
                  : "";

                return (
                  <SwiperSlide key={logo?._key}>
                    <div className="flex items-center justify-center w-full cursor-pointer py-[15px]  transition">
                      {imageUrl && (
                        <Image
                          src={imageUrl}
                          alt={logo.alt || "Logo"}
                          width={logo.width || 200}
                          height={logo.height || 200}
                          className="object-contain w-[calc(100%-5rem)] sm:w-[calc(100%-3rem)] md:w-[calc(100%-2rem)] lg:w-[calc(100%-1rem)] h-auto"
                        />
                      )}
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    );
  }

  // --- Default GRID layout ---
  return (
    <div className={`logo-grid logo-${layout}-layout py-12`}>
      <div className="container">
        <div
          className={`logo-items md:rounded-[40px] py-8 px-8 sm:px-10 md:py-[40px] md:px-[50px] xl:py-[50px] xl:px-14 2xl:px-[70px] 2xl:py-[70px] relative z-10 flex flex-wrap items-center justify-center gap-10 bg-gradient-to-t from-slate-100 to-slate-50`}
        >
          {logos.length > 0 &&
            logos.map((logo: any) => {
              const imageUrl = logo?.image?.asset?._ref
                ? urlFor(logo.image).url()
                : "";

              return (
                <div
                  key={logo?._key}
                  className="flex items-center justify-center cursor-pointer max-w-[160px] lg:max-w-[130px] xl:max-w-[150px] 2xl:max-w-[180px] py-[15px] grayscale hover:grayscale-0 transition"
                >
                  {imageUrl && (
                    <Image
                      src={imageUrl}
                      alt={logo.alt || "Logo"}
                      width={logo.width || 200}
                      height={logo.height || 200}
                      className="object-contain w-full h-auto"
                    />
                  )}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

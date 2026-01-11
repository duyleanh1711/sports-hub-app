'use client';

import Image from 'next/image';
import { useEffect, useState, useCallback } from 'react';

import { CalendarCheck, Clock, HeartIcon, MapPin } from 'lucide-react';

import { cn } from '@/lib/utils';

import {
  Carousel,
  CarouselApi,
  CarouselItem,
  CarouselButton,
  CarouselContent,
} from '@/components/ui/carousel-v2';
import { Button } from '@/components/ui/button';
import SlideIndicators from '../global/slide-indicators';

// Lightbox
import 'yet-another-react-lightbox/styles.css';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';

const IMAGES = [
  '/posts/football/post-3-1.jpg',
  '/posts/football/post-3-2.jpg',
  '/posts/football/post-3-3.jpg',
  '/posts/football/post-3-4.jpg',
  '/posts/football/post-3-5.jpg',
];

const THUMBNAIL_HEIGHT = 432;

const FieldInfo = () => {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState(1);
  const [count, setCount] = useState(0);

  // Lightbox state
  const [openLightbox, setOpenLightbox] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Sync carousel state
  useEffect(() => {
    if (!api) return;

    const syncState = () => {
      setCurrent(api.selectedScrollSnap() + 1);
      setCount(api.scrollSnapList().length);
    };

    syncState();
    api.on('select', syncState);

    return () => {
      api.off('select', syncState);
    };
  }, [api]);

  const handleSelect = useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api]
  );

  return (
    <div className="rounded-lg bg-white p-4 md:p-6">
      {/* ================= FIELD GALLERY ================= */}
      <div className="flex gap-6">
        {/* Vertical thumbnails */}
        <div
          className="hidden md:block w-18 max-h-100 shrink-0 space-y-2 overflow-y-auto p-1 min-h-0"
          style={{ height: THUMBNAIL_HEIGHT }}
        >
          {IMAGES.map((src, index) => {
            const isActive = current === index + 1;

            return (
              <button
                key={index}
                onClick={() => handleSelect(index)}
                aria-label={`Chọn ảnh ${index + 1}`}
                className={cn(
                  'relative aspect-3/4 w-full overflow-hidden rounded border transition duration-500 cursor-pointer',
                  isActive
                    ? 'border-primary ring-2 ring-primary/50'
                    : 'opacity-50 hover:opacity-100 hover:border-primary hover:ring-2 hover:ring-primary/50'
                )}
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  className="object-contain bg-muted"
                  sizes="48px"
                />
              </button>
            );
          })}
        </div>

        {/* Main carousel */}
        <Carousel
          setApi={setApi}
          opts={{ align: 'start', loop: true }}
          className="w-full"
        >
          <CarouselContent className="xl:px-2">
            {IMAGES.map((src, index) => (
              <CarouselItem key={index} className="basis-full py-2">
                <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-muted">
                  {/* Clickable image for lightbox */}
                  <Image
                    src={src}
                    alt={`Ảnh sân ${index + 1}`}
                    fill
                    className="object-contain cursor-zoom-in"
                    sizes="100vw"
                    priority={index === 0}
                    onClick={() => {
                      setLightboxIndex(index);
                      setOpenLightbox(true);
                    }}
                  />

                  {/* Save / favorite button */}
                  <button
                    aria-label="Lưu tin"
                    className="absolute right-3 top-3 z-10 rounded-full bg-black/30 p-1.5 backdrop-blur transition duration-500 hover:bg-black/50 cursor-pointer"
                  >
                    <HeartIcon className="size-5 text-white" />
                  </button>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Slide indicators & navigation */}
          <div className="mt-4 flex items-center justify-between px-2">
            <SlideIndicators
              count={count}
              current={current}
              onSelect={handleSelect}
            />
            <div className="flex items-center gap-2">
              <CarouselButton
                size="xl"
                segment="previous"
                aria-label="Slide trước"
              />
              <CarouselButton
                size="xl"
                segment="next"
                aria-label="Slide tiếp theo"
              />
            </div>
          </div>
        </Carousel>
      </div>

      {/* ================= LIGHTBOX ================= */}
      <Lightbox
        open={openLightbox}
        close={() => setOpenLightbox(false)}
        index={lightboxIndex}
        slides={IMAGES.map((src) => ({ src }))}
        plugins={[Zoom]}
      />

      {/* ================= FIELD DETAILS ================= */}
      <div className="mt-6 space-y-5">
        <div className="space-y-3">
          <div className="space-y-1">
            <h1 className="text-lg md:text-xl font-bold">
              Sân bóng mini 5 người cỏ nhân tạo – khu nghỉ dưỡng Đà Lạt
            </h1>
            <p className="text-sm text-muted-foreground">
              Sân 5 người / Cỏ nhân tạo
            </p>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-lg md:text-xl font-bold text-[#f0325e]">
              300.000đ / giờ
            </span>
            <span className="text-[15px] font-medium">1.200 m²</span>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <MapPin className="w-6 size-4.5 shrink-0" />
            <p className="text-sm">
              26 Xô Viết Nghệ Tĩnh, Phường 7, Đà Lạt, Lâm Đồng.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-6 size-4 shrink-0" />
            <p className="text-sm">Cập nhật 2 giờ trước</p>
          </div>
        </div>

        {/* Booking CTA for mobile */}
        <Button size="lg" className="w-full flex md:hidden gap-2">
          <CalendarCheck className="size-4" />
          Đặt sân ngay
        </Button>
      </div>
    </div>
  );
};

export default FieldInfo;

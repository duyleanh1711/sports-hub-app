'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';
import { ChevronRightIcon } from 'lucide-react';

import { Post } from '@/types/post';

import {
  Carousel,
  CarouselApi,
  CarouselItem,
  CarouselButton,
  CarouselContent,
} from '@/components/ui/carousel-v2';

import PostCard from '../global/post-card';
import SlideIndicators from '../global/slide-indicators';

type LatestPostsCarouselProps = {
  title: string;
  posts: Post[];
  viewAllHref?: string;
  className?: string;
};

const LatestPostsCarousel = ({
  title,
  posts,
  viewAllHref = '/',
  className,
}: LatestPostsCarouselProps) => {
  const [count, setCount] = useState(0);
  const [current, setCurrent] = useState(1);
  const [api, setApi] = useState<CarouselApi | null>(null);

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

  const handleSelect = (index: number) => {
    api?.scrollTo(index);
  };

  // Fallback when no posts
  if (!posts.length) {
    return null;
  }

  return (
    <section
      className={cn(
        'w-full xl:w-300 2xl:w-350 space-y-3 p-6 mx-auto bg-white',
        className
      )}
    >
      {/* ===== Header ===== */}
      <div className="flex flex-col items-center justify-between gap-2 sm:flex-row px-2">
        <h2 className="text-2xl font-bold">{title}</h2>

        <Link
          href={viewAllHref}
          aria-label="Xem tất cả bài đăng"
          className="group flex items-center gap-1 text-[15px] font-medium text-primary hover:underline"
        >
          Xem tất cả
          <ChevronRightIcon
            className="size-4 transition-transform group-hover:translate-x-1"
            aria-hidden
          />
        </Link>
      </div>

      {/* ===== Carousel ===== */}
      <Carousel
        setApi={setApi}
        opts={{ align: 'start', loop: true }}
        className="w-full"
      >
        <CarouselContent className="xl:px-2">
          {posts.map((post) => (
            <CarouselItem
              key={post.id}
              className="basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/5 py-2"
            >
              <PostCard post={post} />
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* ===== Controls ===== */}
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
    </section>
  );
};

export default LatestPostsCarousel;

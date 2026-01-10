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

import PostCard from './post-card';
import SlideIndicators from '../global/slide-indicators';

interface LatestPostsCarouselProps {
  title: string;
  posts: Post[];
  viewAllHref?: string;
  className?: string;
}

const LatestPostsCarousel = ({
  title,
  posts,
  viewAllHref = '/',
  className = '',
}: LatestPostsCarouselProps) => {
  const [current, setCurrent] = useState(1);
  const [api, setApi] = useState<CarouselApi>();
  const [count, setCount] = useState(posts.length);

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
    setCurrent(index + 1);
  };

  return (
    <section
      className={cn(
        'w-full xl:w-300 2xl:w-350 space-y-3 p-6 mx-auto bg-white',
        className
      )}
    >
      <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
        <h2 className="text-2xl font-bold xl:px-2">{title}</h2>
        <Link
          href={viewAllHref}
          className="group flex items-center gap-1 text-[15px] font-medium text-primary hover:underline"
        >
          Xem tất cả
          <ChevronRightIcon className="size-4 group-hover:translate-x-1" />
        </Link>
      </div>

      <Carousel
        setApi={setApi}
        opts={{ align: 'center', loop: true }}
        className="w-full"
      >
        <CarouselContent className="xl:p-2">
          {posts.map((post) => (
            <CarouselItem
              key={post.id}
              className="basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/5"
            >
              <PostCard post={post} />
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="flex items-center justify-between mt-4 px-2">
          <SlideIndicators
            count={count}
            current={current}
            onSelect={handleSelect}
          />

          <div className="space-x-2">
            <CarouselButton size="xl" segment="previous" />
            <CarouselButton size="xl" segment="next" />
          </div>
        </div>
      </Carousel>
    </section>
  );
};

export default LatestPostsCarousel;

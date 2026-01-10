'use client';

import Link from 'next/link';
import Image from 'next/image';

import { HeartIcon, ImageIcon } from 'lucide-react';
import { MapPinIcon } from 'lucide-react';

import { Post } from '@/types/post';

import {
  Carousel,
  CarouselItem,
  CarouselButton,
  CarouselContent,
  CarouselHandler,
} from '@/components/ui/carousel-v2';

const PostCard = ({ post }: { post: Post }) => {
  const stopLink = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <Link
      href={`/posts/${post.id}`}
      aria-label={post.title}
      className="block group focus:outline-none"
    >
      <article className="rounded-xl overflow-hidden hover:shadow-[0_4px_8px_rgba(0,0,0,0.20)] bg-white transition-all duration-500">
        <div className="relative">
          <Carousel>
            <CarouselContent>
              {post.images.map((img, i) => (
                <CarouselItem key={i}>
                  <div className="relative pt-[90%] overflow-hidden">
                    <Image
                      src={img}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="absolute bottom-0 inset-x-0 flex items-center justify-between px-2 py-1.5 bg-black/50">
              <p className="text-xs font-semibold text-white">
                {post.postedAgo}
              </p>
              <div className="flex items-center gap-1 text-white">
                <ImageIcon className="size-4" />
                <span className="text-xs font-semibold">
                  {post.images.length} ảnh
                </span>
              </div>
            </div>

            <button
              onClick={stopLink}
              aria-label="Lưu tin"
              className="absolute top-3 right-3 z-10"
            >
              <HeartIcon className="size-6 text-white" />
            </button>

            {post.images.length > 1 && (
              <CarouselHandler className="absolute top-3 left-3 mt-0">
                <CarouselButton segment="previous" onClick={stopLink} />
                <CarouselButton segment="next" onClick={stopLink} />
              </CarouselHandler>
            )}
          </Carousel>
        </div>

        <div className="space-y-2 p-3 text-start">
          <h3 className="font-semibold line-clamp-2">{post.title}</h3>

          <p className="text-xs text-muted-fg">{post.zone}</p>

          <div className="flex flex-wrap items-center gap-3">
            <p className="text-[17px] font-bold text-[#f0325e]">{post.price}</p>
            <p className="text-sm font-medium">{post.pricePerM2}</p>
            <p className="text-sm font-medium">{post.area}</p>
          </div>

          <div className="flex items-center gap-1">
            <MapPinIcon className="size-5 shrink-0 text-primary" />
            <p className="text-[13px] leading-normal line-clamp-2">
              {post.location}
            </p>
          </div>

          {post.news && (
            <button
              onClick={stopLink}
              className="font-medium underline hover:text-primary"
            >
              Xem {post.news}+ tin dự án
            </button>
          )}
        </div>
      </article>
    </Link>
  );
};

export default PostCard;

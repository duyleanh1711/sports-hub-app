'use client';

import Link from 'next/link';
import Image from 'next/image';

import slugify from 'slugify';
import { HeartIcon, ImageIcon, MapPinIcon } from 'lucide-react';

import { Post } from '@/types/post';

import {
  Carousel,
  CarouselItem,
  CarouselButton,
  CarouselContent,
  CarouselHandler,
} from '@/components/ui/carousel-v2';

type PostCardProps = {
  post: Post;
};

const PostCard = ({ post }: PostCardProps) => {
  const stopLink = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <Link
      href={`/posts/${slugify(post.title, {
        lower: true,
        locale: 'vi',
      })}`}
      aria-label={post.title}
      title={post.title}
      className="block group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl"
    >
      <article className="overflow-hidden rounded-xl bg-white transition-shadow duration-500 hover:shadow-[0_4px_8px_rgba(0,0,0,0.20)]">
        {/* ===== Images ===== */}
        <div className="relative">
          <Carousel>
            <CarouselContent>
              {post.images.map((img) => (
                <CarouselItem key={img}>
                  <div className="relative pt-[90%] overflow-hidden">
                    <Image
                      src={img}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                      priority={false}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Overlay info */}
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-black/50 px-2 py-1.5">
              <p className="text-xs font-semibold text-white">
                {post.postedAgo}
              </p>

              <div className="flex items-center gap-1 text-white">
                <ImageIcon className="size-4" aria-hidden />
                <span className="text-xs font-semibold">
                  {post.images.length} ảnh
                </span>
              </div>
            </div>

            {/* Save button */}
            <button
              onClick={stopLink}
              aria-label="Lưu tin"
              className="absolute right-3 top-3 z-10 rounded-full bg-black/30 p-1.5 backdrop-blur transition hover:bg-black/50 cursor-pointer"
            >
              <HeartIcon className="size-5 text-white" aria-hidden />
            </button>

            {/* Carousel controls */}
            {post.images.length > 1 && (
              <CarouselHandler className="absolute left-3 top-3 mt-0">
                <CarouselButton segment="previous" onClick={stopLink} />
                <CarouselButton segment="next" onClick={stopLink} />
              </CarouselHandler>
            )}
          </Carousel>
        </div>

        {/* ===== Content ===== */}
        <div className="space-y-2 p-3 text-start">
          <h3 className="line-clamp-2 font-semibold">{post.title}</h3>

          <p className="text-xs text-muted-fg">{post.zone}</p>

          <div className="flex flex-wrap items-center gap-3">
            <p className="text-[17px] font-bold text-[#f0325e]">{post.price}</p>
            <p className="text-sm font-medium">{post.pricePerM2}</p>
            <p className="text-sm font-medium">{post.area}</p>
          </div>

          <div className="flex items-start gap-1">
            <MapPinIcon className="size-5 shrink-0 text-primary" aria-hidden />
            <p className="line-clamp-2 text-[13px] leading-normal">
              {post.location}
            </p>
          </div>

          {post.news && (
            <button
              onClick={stopLink}
              className="text-sm font-medium underline transition-colors hover:text-primary"
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

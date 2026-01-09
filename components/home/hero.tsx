'use client';

import Link from 'next/link';
import Image from 'next/image';

import { ArrowRight } from 'lucide-react';

import Header from '../global/header';

import { Button } from '@/components/ui/button';

import { TextEffect } from '@/components/motion-primitives/text-effect';
import { AnimatedGroup } from '@/components/motion-primitives/animated-group';

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: 'blur(12px)',
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: {
        type: 'spring',
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

const Hero = () => {
  return (
    <>
      <Header />

      <Image
        src="/hero-bg.jpg"
        alt="Sân thể thao"
        fill
        priority
        className="object-cover"
      />

      <div
        aria-hidden
        className="absolute inset-0 bg-linear-to-b from-black/10 via-black/70 to-black"
      />

      <div
        aria-hidden
        className="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block"
      >
        <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
        <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
        <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
      </div>

      <div className="relative pt-24 md:pt-36">
        <AnimatedGroup
          variants={{
            container: {
              visible: {
                transition: {
                  delayChildren: 1,
                },
              },
            },
            item: {
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  type: 'spring',
                  bounce: 0.3,
                  duration: 2,
                },
              },
            },
          }}
          className="mask-b-from-35% mask-b-to-90% absolute inset-0 top-56 -z-20 lg:top-32"
        >
          <Image
            src="https://ik.imagekit.io/lrigu76hy/tailark/night-background.jpg?updatedAt=1745733451120"
            alt="background"
            className="hidden size-full dark:block"
            width={3276}
            height={4095}
          />
        </AnimatedGroup>

        <div
          aria-hidden
          className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"
        />

        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center sm:mx-auto lg:mr-auto">
            <AnimatedGroup variants={transitionVariants}>
              <Link
                href="/"
                className="hover:bg-background dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-zinc-950/5 transition-colors duration-500 dark:border-t-white/5 dark:shadow-zinc-950"
              >
                <span className="text-foreground text-sm font-medium">
                  Nền tảng đặt lịch sân thể thao thông minh
                </span>
                <span className="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700" />
                <div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500">
                  <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                    <span className="flex size-6">
                      <ArrowRight className="m-auto size-3" />
                    </span>
                    <span className="flex size-6">
                      <ArrowRight className="m-auto size-3" />
                    </span>
                  </div>
                </div>
              </Link>
            </AnimatedGroup>

            <TextEffect
              preset="fade-in-blur"
              speedSegment={0.3}
              as="h1"
              className="mx-auto mt-8 max-w-6xl text-white text-balance text-5xl font-semibold md:text-7xl lg:mt-16 xl:text-[5.25rem] leading-tight"
            >
              Ứng dụng đặt sân tập thể thao hàng đầu tại Việt Nam
            </TextEffect>

            <TextEffect
              per="line"
              preset="fade-in-blur"
              speedSegment={0.3}
              delay={0.5}
              as="p"
              className="mx-auto mt-8 max-w-2xl text-white text-balance text-lg"
            >
              Mang đến trải nghiệm đặt sân trực tuyến thuận tiện và linh hoạt
              cho người chơi.
            </TextEffect>

            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    staggerChildren: 0.05,
                    delayChildren: 0.75,
                  },
                },
                ...transitionVariants,
              }}
              className="mt-12 flex items-center justify-center gap-2"
            >
              <Button asChild size="lg" className="px-5 text-base">
                <Link href="/">
                  <span className="text-nowrap">Đặt sân ngay</span>
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="ghost"
                className="px-5 text-base text-white"
              >
                <Link href="/">
                  <span className="text-nowrap">Xem sân trống</span>
                </Link>
              </Button>
            </AnimatedGroup>
          </div>
        </div>

        <AnimatedGroup
          variants={{
            container: {
              visible: {
                staggerChildren: 0.05,
                delayChildren: 0.75,
              },
            },
            ...transitionVariants,
          }}
        >
          <div className="relative mt-8 overflow-hidden px-4 sm:mr-0 sm:mt-12 md:mt-20">
            <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl border p-4 shadow-lg shadow-zinc-950/15 ring-1">
              <div className="h-120">Ảnh minh họa giao diện ứng dụng</div>
            </div>
          </div>
        </AnimatedGroup>
      </div>
    </>
  );
};

export default Hero;

'use client';

import Link from 'next/link';
import Image from 'next/image';

import { Variants } from 'motion/react';
import { ArrowRight } from 'lucide-react';

import Header from '../global/header';
import { Button } from '@/components/ui/button';
import { TextEffect } from '@/components/motion-primitives/text-effect';
import { AnimatedGroup } from '@/components/motion-primitives/animated-group';

/* -------------------------------------------------------------------------- */
/*                                   VARIANTS                                  */
/* -------------------------------------------------------------------------- */

const itemVariant: Variants = {
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
};

const staggerContainer: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.75,
    },
  },
};

const backgroundContainer: Variants = {
  visible: {
    transition: {
      delayChildren: 1,
    },
  },
};

/* -------------------------------------------------------------------------- */
/*                                    HERO                                    */
/* -------------------------------------------------------------------------- */

const Hero = () => {
  return (
    <>
      <Header />

      {/* Background image */}
      <Image
        src="/hero-bg.jpg"
        alt="Sân thể thao"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Overlay */}
      <div
        aria-hidden
        className="absolute inset-0 bg-linear-to-b from-black/10 via-black/70 to-black"
      />

      {/* Decorative gradients */}
      <div
        aria-hidden
        className="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block"
      >
        <div className="absolute left-0 top-0 h-320 w-140 -translate-y-87.5 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,transparent_80%)]" />
        <div className="absolute left-0 top-0 h-320 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
        <div className="absolute left-0 top-0 h-320 w-60 -translate-y-87.5 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
      </div>

      <div className="relative pt-24 md:pt-36">
        {/* Animated background */}
        <AnimatedGroup
          variants={{
            container: backgroundContainer,
            item: itemVariant,
          }}
          className="absolute inset-0 top-56 -z-20 mask-b-from-35% mask-b-to-90% lg:top-32"
        >
          <Image
            src="https://ik.imagekit.io/lrigu76hy/tailark/night-background.jpg?updatedAt=1745733451120"
            alt="background"
            width={3276}
            height={4095}
            className="hidden size-full dark:block"
          />
        </AnimatedGroup>

        {/* Radial fade */}
        <div
          aria-hidden
          className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"
        />

        {/* Content */}
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center sm:mx-auto lg:mr-auto">
            {/* Badge */}
            <AnimatedGroup
              variants={{
                container: staggerContainer,
                item: itemVariant,
              }}
            >
              <Link
                href="/"
                className="group mx-auto flex w-fit items-center gap-4 rounded-full border bg-muted p-1 pl-4 shadow-md shadow-zinc-950/5 transition-colors duration-500 hover:bg-background dark:border-t-white/5 dark:shadow-zinc-950"
              >
                <span className="text-sm font-medium text-foreground">
                  Nền tảng đặt lịch sân thể thao thông minh
                </span>

                <span className="block h-4 w-0.5 bg-white dark:bg-zinc-700" />

                <div className="size-6 overflow-hidden rounded-full bg-background duration-500 group-hover:bg-muted">
                  <div className="flex w-12 -translate-x-1/2 duration-500 group-hover:translate-x-0">
                    {[0, 1].map((i) => (
                      <span key={i} className="flex size-6">
                        <ArrowRight className="m-auto size-3" />
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </AnimatedGroup>

            {/* Heading */}
            <TextEffect
              as="h1"
              preset="fade-in-blur"
              speedSegment={0.3}
              className="mx-auto mt-8 max-w-6xl text-balance text-5xl font-semibold leading-tight text-white md:text-7xl lg:mt-16 xl:text-[5.25rem]"
            >
              Ứng dụng đặt sân tập thể thao hàng đầu tại Việt Nam
            </TextEffect>

            {/* Description */}
            <TextEffect
              as="p"
              per="line"
              preset="fade-in-blur"
              speedSegment={0.3}
              delay={0.5}
              className="mx-auto mt-8 max-w-2xl text-balance text-lg text-white"
            >
              Mang đến trải nghiệm đặt sân trực tuyến thuận tiện và linh hoạt
              cho người chơi.
            </TextEffect>

            {/* CTA */}
            <AnimatedGroup
              variants={{
                container: staggerContainer,
                item: itemVariant,
              }}
              className="mt-12 flex items-center justify-center gap-2"
            >
              <Button asChild size="lg" className="px-5 text-base">
                <Link href="/">Đặt sân ngay</Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="ghost"
                className="px-5 text-base text-white"
              >
                <Link href="/">Xem sân trống</Link>
              </Button>
            </AnimatedGroup>
          </div>
        </div>

        {/* App preview */}
        <AnimatedGroup
          variants={{
            container: staggerContainer,
            item: itemVariant,
          }}
        >
          <div className="relative mt-8 overflow-hidden px-4 sm:mt-12 md:mt-20">
            <div className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl border bg-background p-4 shadow-lg shadow-zinc-950/15 ring-1 ring-background">
              <div className="h-120">Ảnh minh họa giao diện ứng dụng</div>
            </div>
          </div>
        </AnimatedGroup>
      </div>
    </>
  );
};

export default Hero;

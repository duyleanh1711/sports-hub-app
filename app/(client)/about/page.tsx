import Link from 'next/link';
import Image from 'next/image';

import { ChevronRight } from 'lucide-react';

import { FEATURES } from '@/constants/features';

import { Button } from '@/components/ui/button';

import Header from '@/components/global/header';
import CallToAction from '@/components/global/call-to-action';

const Page = () => {
  return (
    <>
      {/* Global header in dark mode */}
      <Header mode="dark" />

      {/* Introduction / Hero section */}
      <section className="py-16 md:py-32 pt-24">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          {/* Main headline */}
          <h2 className="relative z-10 max-w-xl text-4xl font-bold leading-tight lg:text-5xl text-center md:text-start">
            <span className="text-primary">SportsHub</span> kết nối người chơi
            với các địa điểm thể thao một cách dễ dàng
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            {/* Illustration image */}
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
                <Image
                  src="/about/illustration-1.png"
                  alt="minh họa SportsHub"
                  width={1207}
                  height={929}
                  className="rounded-[15px] shadow"
                  priority
                />
              </div>
            </div>

            {/* Description & testimonial */}
            <div className="relative space-y-4">
              <p className="text-muted-foreground">
                SportsHub không chỉ là một nền tảng đặt sân.{` `}
                <span className="font-bold text-accent-foreground">
                  Chúng tôi kết nối người chơi, địa điểm và các sự kiện
                </span>{' '}
                để thể thao trở nên dễ tiếp cận và thú vị hơn cho mọi người.
              </p>

              <p className="text-muted-foreground">
                Từ việc tìm sân trống đến tham gia các giải đấu địa phương,
                SportsHub giúp bạn duy trì năng động và kết nối với cộng đồng.
              </p>

              {/* User testimonial */}
              <blockquote className="border-l-4 pl-4 pt-6">
                <p>
                  “SportsHub giúp tôi đặt sân và tổ chức các trận đấu với bạn bè
                  dễ dàng hơn bao giờ hết. Nền tảng trực quan, nhanh chóng và
                  mang đến trải nghiệm thể thao thú vị, tiện lợi và đầy năng
                  lượng.”
                </p>

                <div className="mt-6 space-y-3">
                  <cite className="block font-medium">
                    Nguyễn Thị Lan, Chuyên viên Thể thao & Fitness
                  </cite>
                  <Image
                    src="https://html.tailus.io/blocks/customers/nike.svg"
                    alt="Logo Nike"
                    width={60}
                    height={10}
                    className="dark:invert"
                  />
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Feature highlights section */}
      <section className="pb-16 md:pb-32">
        <div className="mx-auto max-w-5xl space-y-12 px-6">
          {/* Section heading */}
          <div className="mx-auto max-w-xl space-y-6 text-center">
            <h2 className="text-balance text-4xl font-bold lg:text-5xl">
              <span className="text-primary">SportsHub</span> kết nối người chơi
              với các địa điểm và sự kiện thể thao
            </h2>
            <p className="text-muted-foreground">
              SportsHub không chỉ là nền tảng đặt sân. Chúng tôi tạo ra một hệ
              sinh thái thể thao hoàn chỉnh — từ tìm sân trống, tham gia giải
              đấu đến kết nối với cộng đồng và các sự kiện địa phương.
            </p>
          </div>

          {/* Feature illustration */}
          <Image
            src="/about/illustration-2.png"
            alt="Minh họa SportsHub"
            width={1207}
            height={929}
            className="rounded-2xl shadow"
          />

          {/* Feature list */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:gap-10 lg:grid-cols-4">
            {FEATURES.map(({ icon: Icon, title, description }) => (
              <div key={title} className="space-y-3">
                <div className="flex items-center gap-3">
                  {/* Bigger icon */}
                  <Icon className="size-6 text-primary" />

                  {/* Bigger title */}
                  <h3 className="text-base font-semibold">{title}</h3>
                </div>

                {/* Bigger description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-action section */}
      <section className="pb-16 md:pb-32">
        <div className="mx-auto max-w-5xl space-y-12 px-6">
          {/* Visual illustration supporting the CTA */}
          <Image
            src="/about/illustration-3.png"
            alt="Minh họa SportsHub"
            width={1207}
            height={929}
            className="w-full rounded-2xl"
          />

          <div className="grid items-center gap-6 md:grid-cols-2 md:gap-12 text-center md:text-start">
            {/* CTA headline */}
            <h2 className="text-4xl font-bold leading-snug">
              <span className="text-primary">SportsHub</span> kết nối người chơi
              với các địa điểm và sự kiện thể thao
            </h2>

            {/* CTA description and action button */}
            <div className="flex flex-col items-center md:items-start gap-6">
              <p className="text-muted-foreground">
                SportsHub không chỉ là nền tảng đặt sân. Chúng tôi giúp bạn tìm
                sân trống, tham gia giải đấu, kết nối cộng đồng và trải nghiệm
                thể thao dễ dàng hơn bao giờ hết.
              </p>

              {/* Primary CTA button */}
              <Button asChild size="lg" className="gap-1 pr-1.5">
                <Link href="/">
                  <span>Đặt sân ngay</span>
                  <ChevronRight className="size-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Email subscription / secondary CTA */}
      <CallToAction />
    </>
  );
};

export default Page;

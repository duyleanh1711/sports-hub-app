'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

import {
  PhoneCall,
  UserRoundPen,
  CalendarCheck,
  MessageCircleMore,
} from 'lucide-react';

import { Badge } from '../ui/badge';
import { Button } from '../ui/button';

const FieldOwnerInfo = () => {
  // Phone number (mock data for now)
  const phone = '0937128075';

  // Toggle full phone number display
  const [showFullPhone, setShowFullPhone] = useState(false);

  // Mask phone number for privacy
  const maskedPhone = phone.replace(/(\d{4})\d{3}(\d{3})/, '$1***$2');

  // Quick chat suggestions
  const quickChats = [
    'Sân này còn không ạ?',
    'Giá thuê bao nhiêu ạ?',
    'Có phòng thay đồ không?',
    'Đặt sân hôm nay được không?',
  ];

  return (
    <div className="space-y-8 rounded-lg bg-white p-4 md:p-6">
      {/* ================= Owner Info ================= */}
      <div className="flex items-center justify-center md:justify-between">
        <div className="flex items-center gap-3">
          <div className="relative size-16">
            <Image
              src="/avatar-default.jpg"
              alt="Avatar Default"
              fill
              className="rounded-full object-cover"
            />

            {/* Partner badge */}
            <Image
              src="/partner.svg"
              alt="Partner"
              width={60}
              height={60}
              className="absolute -bottom-2 left-1/2 -translate-x-1/2"
            />
          </div>

          <div>
            <h2 className="text-lg font-semibold">Nguyễn Nhân Hòa</h2>
            <p className="text-sm text-muted-foreground">
              nhanhoang812@gmail.com
            </p>
          </div>
        </div>

        {/* View profile */}
        <Button className="hidden md:block">
          <Link href="/" className="flex items-center gap-2 hover:underline">
            <UserRoundPen className="size-4" />
            Xem hồ sơ
          </Link>
        </Button>
      </div>

      {/* ================= Statistics ================= */}
      <div className="grid gap-12 *:text-center md:grid-cols-3 md:gap-2 md:divide-x md:divide-y-0">
        <div className="space-y-2">
          <div className="text-2xl font-bold">5</div>
          <p className="text-sm text-muted-foreground">Năm hoạt động</p>
        </div>

        <div className="space-y-2">
          <div className="text-2xl font-bold">12</div>
          <p className="text-sm text-muted-foreground">Tin thể thao đã đăng</p>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-center gap-2 text-2xl font-bold">
            <p>4.8</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="1em"
              height="1em"
              fill="#f7bd40"
            >
              <path d="M12 2.5l2.9 5.88 6.5.94-4.7 4.58 1.1 6.47L12 17.77 6.2 20.37l1.1-6.47-4.7-4.58 6.5-.94L12 2.5z" />
            </svg>
          </div>
          <p className="text-sm text-muted-foreground">Đánh giá người dùng</p>
        </div>
      </div>

      {/* ================= Contact Actions ================= */}
      <div className="grid grid-cols-2 gap-2">
        <Button size="lg" variant="secondary">
          Zalo
        </Button>

        <Button size="lg" variant="secondary">
          Facebook
        </Button>

        <Button size="lg" variant="secondary">
          <MessageCircleMore className="size-5" />
          Nhắn tin
        </Button>

        {/* Phone button with mask / unmask */}
        <Button size="lg" onClick={() => setShowFullPhone(true)}>
          <PhoneCall className="size-4" />
          {showFullPhone ? phone : maskedPhone}
        </Button>
      </div>

      {/* ================= Quick Chat ================= */}
      <div className="flex flex-wrap items-center gap-3">
        <p className="text-[15px] font-semibold">Chat nhanh:</p>

        {quickChats.map((text) => (
          <Badge
            key={text}
            variant="secondary"
            className="cursor-pointer py-1.5 px-3 text-sm"
          >
            {text}
          </Badge>
        ))}
      </div>

      {/* ================= Booking CTA ================= */}
      <Button size="lg" className="w-full flex md:hidden gap-2">
        <CalendarCheck className="size-4" />
        Đặt sân ngay
      </Button>
      <Button size="xl" className="w-full hidden md:flex gap-2">
        <CalendarCheck className="size-5" />
        Đặt sân ngay
      </Button>
    </div>
  );
};

export default FieldOwnerInfo;

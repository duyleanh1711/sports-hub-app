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
        <Button size="lg" variant="secondary" className="[&_svg]:size-6!">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 48 48"
          >
            <path
              fill="#2962ff"
              d="M15,36V6.827l-1.211-0.811C8.64,8.083,5,13.112,5,19v10c0,7.732,6.268,14,14,14h10	c4.722,0,8.883-2.348,11.417-5.931V36H15z"
            ></path>
            <path
              fill="#eee"
              d="M29,5H19c-1.845,0-3.601,0.366-5.214,1.014C10.453,9.25,8,14.528,8,19	c0,6.771,0.936,10.735,3.712,14.607c0.216,0.301,0.357,0.653,0.376,1.022c0.043,0.835-0.129,2.365-1.634,3.742	c-0.162,0.148-0.059,0.419,0.16,0.428c0.942,0.041,2.843-0.014,4.797-0.877c0.557-0.246,1.191-0.203,1.729,0.083	C20.453,39.764,24.333,40,28,40c4.676,0,9.339-1.04,12.417-2.916C42.038,34.799,43,32.014,43,29V19C43,11.268,36.732,5,29,5z"
            ></path>
            <path
              fill="#2962ff"
              d="M36.75,27C34.683,27,33,25.317,33,23.25s1.683-3.75,3.75-3.75s3.75,1.683,3.75,3.75	S38.817,27,36.75,27z M36.75,21c-1.24,0-2.25,1.01-2.25,2.25s1.01,2.25,2.25,2.25S39,24.49,39,23.25S37.99,21,36.75,21z"
            ></path>
            <path
              fill="#2962ff"
              d="M31.5,27h-1c-0.276,0-0.5-0.224-0.5-0.5V18h1.5V27z"
            ></path>
            <path
              fill="#2962ff"
              d="M27,19.75v0.519c-0.629-0.476-1.403-0.769-2.25-0.769c-2.067,0-3.75,1.683-3.75,3.75	S22.683,27,24.75,27c0.847,0,1.621-0.293,2.25-0.769V26.5c0,0.276,0.224,0.5,0.5,0.5h1v-7.25H27z M24.75,25.5	c-1.24,0-2.25-1.01-2.25-2.25S23.51,21,24.75,21S27,22.01,27,23.25S25.99,25.5,24.75,25.5z"
            ></path>
            <path
              fill="#2962ff"
              d="M21.25,18h-8v1.5h5.321L13,26h0.026c-0.163,0.211-0.276,0.463-0.276,0.75V27h7.5	c0.276,0,0.5-0.224,0.5-0.5v-1h-5.321L21,19h-0.026c0.163-0.211,0.276-0.463,0.276-0.75V18z"
            ></path>
          </svg>
          Zalo
        </Button>

        <Button size="lg" variant="secondary" className="[&_svg]:size-6.5!">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 48 48"
          >
            <path
              fill="#039be5"
              d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
            ></path>
            <path
              fill="#fff"
              d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
            ></path>
          </svg>
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

'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

import { Menu, X } from 'lucide-react';

import { cn } from '@/lib/utils';

import Logo from './logo';
import { Button } from '@/components/ui/button';

const menuItems = [
  { name: 'Trang chủ', href: '/' },
  { name: 'Giới thiệu', href: '/about' },
  { name: 'Đặt sân', href: '/booking' },
  { name: 'Tính năng', href: '/features' },
  { name: 'Liên hệ', href: '/contact' },
];

const Header = () => {
  const [menuState, setMenuState] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header>
      <nav
        data-state={menuState && 'active'}
        className={cn(
          'fixed z-20 w-full transition-all duration-500',
          isScrolled && 'px-4'
        )}
      >
        <div
          className={cn(
            'mx-auto mt-2 max-w-6xl px-6 transition-all duration-500 lg:px-12',
            isScrolled &&
              'bg-background/50 max-w-4xl rounded-2xl backdrop-blur-lg lg:px-5'
          )}
        >
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            <div className="flex w-full justify-between lg:w-auto">
              <Link
                href="/"
                aria-label="Trang chủ"
                className="flex items-center space-x-2"
              >
                <Logo />
              </Link>

              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState ? 'Đóng menu' : 'Mở menu'}
                className="relative text-white z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
              >
                <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
              </button>
            </div>

            <div className="absolute inset-0 m-auto hidden size-fit lg:block">
              <ul className="flex gap-8 text-[15px]">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className={cn(
                        'hover:text-primary font-medium block duration-150',
                        isScrolled ? 'text-black' : 'text-white'
                      )}
                    >
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
              <div className="lg:hidden">
                <ul className="space-y-6 text-[15px] font-medium">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="text-black hover:text-primary block duration-150"
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className={cn(isScrolled && 'lg:hidden')}
                >
                  <Link href="/sign-in" className="w-full md:w-fit">
                    <span>Đăng nhập</span>
                  </Link>
                </Button>

                <Button asChild className={cn(isScrolled && 'lg:hidden')}>
                  <Link href="/sign-up" className="w-full md:w-fit">
                    <span>Đăng ký</span>
                  </Link>
                </Button>

                <Button
                  asChild
                  className={cn(isScrolled ? 'lg:inline-flex' : 'hidden')}
                >
                  <Link href="/">
                    <span>Bắt đầu ngay</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

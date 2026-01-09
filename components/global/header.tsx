'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import { Menu, X } from 'lucide-react';

import { cn } from '@/lib/utils';
import { MENU_ITEMS } from '@/constants/menu-items';

import { Button } from '@/components/ui/button';

const Header = () => {
  const [menuState, setMenuState] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  /* ================= Scroll handler (optimized) ================= */
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuState(false);

  return (
    <header>
      <nav
        data-state={menuState ? 'active' : undefined}
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
            {/* ================= Left: Logo + Mobile Toggle ================= */}
            <div className="flex w-full justify-between lg:w-auto">
              <Link
                href="/"
                aria-label="Trang chủ"
                className="flex items-center space-x-2"
                onClick={closeMenu}
              >
                <Image
                  src="/logo.svg"
                  alt="Logo"
                  width={242}
                  height={43}
                  className="h-8 w-auto"
                  priority
                />
              </Link>

              <button
                onClick={() => setMenuState((prev) => !prev)}
                aria-label={menuState ? 'Đóng menu' : 'Mở menu'}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 text-white lg:hidden"
              >
                <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
              </button>
            </div>

            {/* ================= Center: Desktop Menu ================= */}
            <div className="absolute inset-0 m-auto hidden size-fit lg:block">
              <ul className="flex gap-8 text-[15px]">
                {MENU_ITEMS.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        'hover:text-primary font-medium block duration-150',
                        isScrolled ? 'text-black' : 'text-white'
                      )}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* ================= Right: Actions + Mobile Menu ================= */}
            <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
              {/* Mobile menu links */}
              <div className="lg:hidden">
                <ul className="space-y-6 text-[15px] font-medium">
                  {MENU_ITEMS.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={closeMenu}
                        className="text-black hover:text-primary block duration-150"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action buttons */}
              <div className="flex w-full flex-col items-center space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className={cn(isScrolled && 'lg:hidden')}
                >
                  <Link href="/sign-in" className="w-full md:w-fit">
                    Đăng nhập
                  </Link>
                </Button>

                <Button asChild className={cn(isScrolled && 'lg:hidden')}>
                  <Link href="/sign-up" className="w-full md:w-fit">
                    Đăng ký
                  </Link>
                </Button>

                <Button
                  asChild
                  className={cn(isScrolled ? 'lg:inline-flex' : 'hidden')}
                >
                  <Link href="/" onClick={closeMenu}>
                    Bắt đầu ngay
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

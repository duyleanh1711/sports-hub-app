'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import { Menu, X } from 'lucide-react';

import { cn } from '@/lib/utils';
import { ThemeMode } from '@/types/global';
import { MENU_ITEMS } from '@/constants/menu-items';

import LanguageSelect from './language-select';
import { Button } from '@/components/ui/button';

const Header = ({ mode }: { mode?: ThemeMode }) => {
  const [menuState, setMenuState] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  /* ================= Scroll handler (optimized) ================= */
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      // Only update state if different to prevent unnecessary re-renders
      setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuState(false); // Close mobile menu

  return (
    <header>
      {/* ================= Main Navbar ================= */}
      <nav
        data-state={menuState ? 'active' : undefined}
        className={cn(
          'fixed z-20 w-full transition-all duration-500',
          isScrolled && 'px-4' // Add horizontal padding when scrolled
        )}
      >
        {/* Container for navbar content */}
        <div
          className={cn(
            'mx-auto mt-2 max-w-360 px-6 transition-all duration-500 lg:px-12',
            isScrolled &&
              'bg-background/50 max-w-7xl rounded-xl backdrop-blur-lg lg:px-5' // Rounded and blurred background on scroll
          )}
        >
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0">
            <div className="w-full xl:w-auto flex items-center gap-12">
              {/* ================= Left: Logo + Mobile Toggle ================= */}
              <div className="flex w-full justify-between xl:w-auto">
                {/* Logo */}
                <Link
                  href="/"
                  aria-label="Trang chủ"
                  className="flex items-center space-x-2"
                  onClick={closeMenu} // Close menu on link click
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

                {/* Mobile menu buttons: Sign in / Sign up / Language */}
                <div className="flex items-center gap-2">
                  {/* Sign-in button (mobile) */}
                  <Button
                    asChild
                    variant="outline"
                    size={'lg'}
                    className={cn(
                      'hidden md:flex xl:hidden',
                      isScrolled && 'lg:hidden'
                    )}
                  >
                    <Link href="/sign-in">Đăng nhập</Link>
                  </Button>

                  {/* Sign-up button (mobile) */}
                  <Button
                    asChild
                    size={'lg'}
                    className={cn(
                      'hidden md:flex xl:hidden',
                      isScrolled && 'lg:hidden'
                    )}
                  >
                    <Link href="/sign-up">Đăng ký</Link>
                  </Button>

                  {/* Language selector (mobile) */}
                  <div className="block xl:hidden shrink-0">
                    <LanguageSelect isScrolled={isScrolled} mode={mode} />
                  </div>

                  {/* Hamburger menu toggle */}
                  <button
                    onClick={() => setMenuState((prev) => !prev)}
                    aria-label={menuState ? 'Đóng menu' : 'Mở menu'}
                    className={cn(
                      'relative z-20 block cursor-pointer xl:hidden',
                      isScrolled || mode === 'dark'
                        ? 'text-black'
                        : 'text-white'
                    )}
                  >
                    {/* Hamburger / Close icon transitions */}
                    <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-500" />
                    <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-500" />
                  </button>
                </div>
              </div>

              {/* ================= Center: Desktop Menu ================= */}
              <ul className="hidden xl:flex gap-12 text-[15px]">
                {MENU_ITEMS.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        'hover:text-primary font-medium block duration-500',
                        isScrolled || mode === 'dark'
                          ? 'text-black'
                          : 'text-white'
                      )}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* ================= Right: Actions + Mobile Menu ================= */}
            <div
              className={cn(
                'bg-background w-full flex-wrap items-center justify-end rounded-lg border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap xl:flex xl:w-fit xl:gap-6 lg:mt-6 xl:mt-0 xl:space-y-0 xl:border-transparent xl:bg-transparent xl:p-0 xl:shadow-none dark:shadow-none dark:xl:bg-transparent',
                menuState ? 'block' : 'hidden',
                'xl:flex'
              )}
            >
              {/* Mobile menu links */}
              <ul className="xl:hidden space-y-6 text-[15px] font-medium">
                {MENU_ITEMS.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={closeMenu} // Close menu when link clicked
                      className="text-black hover:text-primary block duration-500"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Action buttons for mobile/desktop */}
              <div className="flex md:hidden xl:flex w-full flex-col items-center space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 mt-6 md:mt-0">
                {/* Sign-in button */}
                <Button
                  asChild
                  variant="outline"
                  size={'lg'}
                  className={cn(isScrolled && 'lg:hidden')}
                >
                  <Link href="/sign-in" className="w-full xl:w-fit">
                    Đăng nhập
                  </Link>
                </Button>

                {/* Sign-up button */}
                <Button
                  asChild
                  size={'lg'}
                  className={cn(isScrolled && 'lg:hidden')}
                >
                  <Link href="/sign-up" className="w-full xl:w-fit">
                    Đăng ký
                  </Link>
                </Button>

                {/* Call-to-action button */}
                <Button
                  asChild
                  className={cn(
                    isScrolled ? 'hidden lg:inline-flex' : 'hidden'
                  )}
                >
                  <Link href="/" onClick={closeMenu}>
                    Đặt sân ngay
                  </Link>
                </Button>
              </div>

              {/* Language switcher for desktop */}
              <div className="hidden xl:block shrink-0">
                <LanguageSelect isScrolled={isScrolled} mode={mode} />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

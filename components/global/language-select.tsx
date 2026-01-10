'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

import { ChevronDownIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { ThemeMode } from '@/types/global';
import { Language, LANGUAGES } from '@/constants/languages';

type LanguageSelectProps = {
  className?: string;
  isScrolled?: boolean;
  mode?: ThemeMode;
};

const LanguageSelect = ({
  className,
  isScrolled,
  mode,
}: LanguageSelectProps) => {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState<Language>(LANGUAGES[0]);

  const toggle = () => setOpen((prev) => !prev);

  const handleSelect = (lang: Language) => {
    setCurrent(lang);
    setOpen(false);

    // changeLanguage(lang.code)
  };

  // Close when click outside
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div
      ref={ref}
      className={cn('relative flex items-center gap-3', className)}
    >
      {/* ===== Trigger ===== */}
      <button
        type="button"
        onClick={toggle}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex cursor-pointer items-center gap-3 rounded-md p-1 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
        <Image src={current.flag} alt={current.label} width={30} height={30} />

        <div
          className={cn(
            isScrolled || mode === 'dark' ? 'text-black' : 'text-white'
          )}
        >
          <p className="text-[11px] opacity-80">Ngôn ngữ</p>
          <div className="flex items-center gap-1">
            <p className="text-xs font-semibold">{current.label}</p>
            <ChevronDownIcon
              className={cn(
                'size-3 transition-transform duration-500',
                open && 'rotate-180'
              )}
              aria-hidden
            />
          </div>
        </div>
      </button>

      {/* ===== Dropdown (smooth) ===== */}
      <ul
        role="listbox"
        className={cn(
          'absolute right-0 top-full z-50 mt-2 w-44 overflow-hidden rounded-lg bg-white shadow-lg',
          'origin-top-right transform transition-all duration-500 ease-out',
          open
            ? 'pointer-events-auto translate-y-0 scale-100 opacity-100'
            : 'pointer-events-none -translate-y-2 scale-95 opacity-0'
        )}
      >
        {LANGUAGES.map((lang) => (
          <li
            key={lang.code}
            role="option"
            aria-selected={lang.code === current.code}
            onClick={() => handleSelect(lang)}
            className={cn(
              'flex cursor-pointer items-center gap-3 px-3 py-2 text-sm font-medium transition-all duration-500',
              lang.code === current.code
                ? 'bg-primary/10 text-primary'
                : 'hover:bg-primary/10 hover:text-primary'
            )}
          >
            <Image src={lang.flag} alt={lang.label} width={22} height={22} />
            {lang.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguageSelect;

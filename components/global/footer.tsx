import Link from 'next/link';
import Image from 'next/image';

import { FOOTER_LINKS } from '@/constants/footer-links';
import { SOCIAL_LINKS } from '@/constants/social-links';

const Footer = () => {
  return (
    <footer className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl px-6 text-center">
        {/* Logo */}
        <Link href="/" aria-label="Trang chủ" className="inline-block">
          <Image
            src="/logo.svg"
            alt="SportsHub"
            width={242}
            height={43}
            className="h-8 w-auto"
            priority
          />
        </Link>

        {/* Menu */}
        <nav className="my-8 flex flex-wrap justify-center gap-6 text-sm">
          {FOOTER_LINKS.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="text-muted-foreground transition-colors duration-300 hover:text-primary"
            >
              {link.title}
            </Link>
          ))}
        </nav>

        {/* Social */}
        <div className="my-8 flex justify-center gap-6">
          {SOCIAL_LINKS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              aria-label={item.label}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-all duration-300 hover:text-primary hover:scale-110"
            >
              <svg
                className="size-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                {item.icon}
              </svg>
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()}{' '}
          <span className="font-medium">SportsHub</span>. Bảo lưu mọi quyền.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

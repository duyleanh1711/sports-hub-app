import Link from 'next/link';
import Image from 'next/image';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

const Page = () => {
  return (
    <section className="flex min-h-screen bg-zinc-50 px-4 py-16 md:py-32 dark:bg-transparent">
      {/* Form container centered vertically and horizontally */}
      <form
        action=""
        className="bg-muted m-auto h-fit w-full max-w-md overflow-hidden rounded-[calc(var(--radius)+.125rem)] border shadow-md shadow-zinc-950/5 dark:[--color-muted:var(--color-zinc-900)]"
      >
        {/* Card background and padding */}
        <div className="bg-card -m-px rounded-[calc(var(--radius)+.125rem)] border p-5 md:p-8 pb-6">
          {/* Logo and heading */}
          <div>
            <Link href="/" aria-label="Go to home page">
              <Image
                src="/logo.svg"
                alt="Logo SportsHub"
                width={242}
                height={43}
                className="h-8 w-auto"
                priority
              />
            </Link>
            <h1 className="mb-1 mt-4 text-xl font-semibold">
              Khôi phục mật khẩu
            </h1>
            <p className="text-xs md:text-sm text-muted-foreground">
              Nhập email hoặc số điện thoại của bạn để nhận liên kết đặt lại mật
              khẩu
            </p>
          </div>

          {/* Input and submit button section */}
          <div className="mt-6 space-y-6">
            {/* Email or Phone input */}
            <div className="space-y-2">
              <Label htmlFor="account" className="block text-sm">
                Email hoặc Số điện thoại
              </Label>
              <Input
                type="text"
                required
                name="account"
                id="account"
                placeholder="Nhập email hoặc số điện thoại"
              />
            </div>

            {/* Submit button */}
            <Button size={'lg'} className="w-full">
              Gửi liên kết đặt lại
            </Button>
          </div>

          {/* Info text below the button */}
          <div className="mt-6 text-center">
            <p className="text-muted-foreground text-xs md:text-sm">
              Chúng tôi sẽ gửi cho bạn một liên kết để đặt lại mật khẩu.{' '}
            </p>
          </div>
        </div>

        {/* Footer: Link to sign-in page */}
        <div className="p-3">
          <p className="text-accent-foreground text-center text-sm">
            Bạn đã nhớ mật khẩu?
            <Button asChild variant="link" className="px-1">
              <Link href="/sign-in">Đăng nhập</Link>
            </Button>
          </p>
        </div>
      </form>
    </section>
  );
};

export default Page;

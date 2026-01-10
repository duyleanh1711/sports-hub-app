import Link from 'next/link';
import Image from 'next/image';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

import SocialLoginButtons from '@/components/global/social-login-buttons';

const Page = () => {
  return (
    <section className="flex min-h-screen items-center justify-center bg-zinc-50 px-4 py-16 md:py-32 dark:bg-transparent">
      {/* Form container */}
      <form className="bg-card w-full max-w-md rounded-[calc(var(--radius)+0.125rem)] border p-0.5 shadow-md dark:[--color-muted:var(--color-zinc-900)]">
        <div className="p-5 md:p-8 pb-6">
          {/* Logo and heading */}
          <div className="mb-6">
            <Link href="/" aria-label="Go to home">
              <Image
                src="/logo.svg"
                alt="Logo SportsHub"
                width={242}
                height={43}
                className="h-8 w-auto"
                priority
              />
            </Link>
            <h1 className="mt-4 text-xl font-bold">Tạo tài khoản SportsHub</h1>
            <p className="text-xs md:text-sm text-muted-foreground">
              Chào mừng! Tạo tài khoản để bắt đầu
            </p>
          </div>

          {/* Social login buttons */}
          <SocialLoginButtons />

          <hr className="my-4 border-dashed" />

          {/* Form inputs */}
          <div className="space-y-5">
            {/* Firstname & Lastname */}
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label htmlFor="firstname" className="block text-sm">
                  Họ
                </Label>
                <Input
                  type="text"
                  required
                  name="firstname"
                  id="firstname"
                  placeholder="Nhập họ"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastname" className="block text-sm">
                  Tên
                </Label>
                <Input
                  type="text"
                  required
                  name="lastname"
                  id="lastname"
                  placeholder="Nhập tên"
                />
              </div>
            </div>

            {/* Email or phone */}
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

            {/* Password */}
            <div className="space-y-2">
              <Label htmlFor="pwd" className="text-sm">
                Mật khẩu
              </Label>
              <Input
                type="password"
                required
                name="pwd"
                id="pwd"
                placeholder="Nhập mật khẩu"
              />
            </div>

            {/* Submit button */}
            <Button size={'lg'} className="w-full">
              Tiếp tục
            </Button>
          </div>
        </div>

        {/* Footer: Sign-in link */}
        <div className="bg-muted rounded-[calc(var(--radius))] border p-3">
          <p className="text-accent-foreground text-center text-sm">
            Đã có tài khoản?
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

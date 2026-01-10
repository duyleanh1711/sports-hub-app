import Header from '@/components/global/header';

// UI components
import {
  Select,
  SelectItem,
  SelectValue,
  SelectContent,
  SelectTrigger,
} from '@/components/ui/select';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

const Page = () => {
  return (
    <>
      {/* Global header (dark mode) */}
      <Header mode="dark" />

      {/* Main section */}
      <section className="pt-24 md:pt-32">
        <div className="mx-auto max-w-3xl px-8 lg:px-0">
          {/* Page title */}
          <h1 className="text-center text-4xl font-bold lg:text-5xl">
            Liên hệ tư vấn
          </h1>

          {/* Page description */}
          <p className="text-sm md:text-base mt-4 text-center text-muted-foreground">
            Để lại thông tin, chúng tôi sẽ liên hệ lại sớm nhất.
          </p>

          {/* Contact form card */}
          <Card className="mx-auto mt-8 max-w-lg md:p-8 border-0 md:border shadow-none md:shadow-md">
            {/* Form introduction */}
            <div>
              <h2 className="text-xl font-semibold">Thông tin liên hệ</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Dành cho chủ sân, đơn vị tổ chức giải đấu và đối tác.
              </p>
            </div>

            {/* Contact form */}
            <form className="space-y-6">
              {/* Full name */}
              <div className="space-y-2">
                <Label htmlFor="name">Họ và tên</Label>
                <Input id="name" placeholder="Nhập họ và tên" required />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Nhập email"
                  required
                />
              </div>

              {/* Website */}
              <div className="space-y-2">
                <Label htmlFor="website">Website (nếu có)</Label>
                <Input id="website" type="url" placeholder="Nhập website" />
              </div>

              {/* Role selection */}
              <div className="space-y-2">
                <Label htmlFor="job">Vai trò</Label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Chọn vai trò của bạn" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="owner">Chủ sân</SelectItem>
                    <SelectItem value="organizer">Tổ chức giải đấu</SelectItem>
                    <SelectItem value="business">
                      Đối tác / Doanh nghiệp
                    </SelectItem>
                    <SelectItem value="other">Khác</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="msg">Nội dung</Label>
                <Textarea
                  id="msg"
                  rows={3}
                  placeholder="Ví dụ: Tôi muốn đăng ký quản lý sân bóng trên SportsHub..."
                />
              </div>

              {/* Submit button */}
              <Button size="lg" className="w-full">
                Gửi liên hệ
              </Button>
            </form>
          </Card>
        </div>
      </section>
    </>
  );
};

export default Page;

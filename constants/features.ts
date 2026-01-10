import { Cpu, Lock, LucideIcon, Sparkles, Zap } from 'lucide-react';

export type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const FEATURES: Feature[] = [
  {
    icon: Zap,
    title: 'Nhanh chóng',
    description: 'Đặt sân và tham gia trận đấu chỉ trong vài bước đơn giản.',
  },
  {
    icon: Cpu,
    title: 'Hiệu quả',
    description:
      'Quản lý lịch sử đặt sân và sự kiện dễ dàng, thuận tiện cho mọi người chơi.',
  },
  {
    icon: Lock,
    title: 'An toàn',
    description:
      'Thông tin người dùng và giao dịch luôn được bảo mật tuyệt đối.',
  },
  {
    icon: Sparkles,
    title: 'Thông minh',
    description:
      'Gợi ý sân trống, giải đấu phù hợp và sự kiện thú vị dựa trên nhu cầu người chơi.',
  },
];

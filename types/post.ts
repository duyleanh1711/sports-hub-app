export type Post = {
  id: number;
  title: string;
  zone?: string;
  location: string;
  price: string;
  pricePerM2?: string;
  area?: string;
  news?: number;
  images: string[];
  postedAgo: string;
};

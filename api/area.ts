import { District, Province, Ward } from '@/types/area';

export const getProvinces = async (): Promise<Province[]> => {
  const res = await fetch('https://provinces.open-api.vn/api/p/');
  if (!res.ok) throw new Error('Fetch provinces failed');
  return res.json();
};

export const getWards = async (districtCode: number): Promise<Ward[]> => {
  const res = await fetch(
    `https://provinces.open-api.vn/api/d/${districtCode}?depth=2`
  );
  if (!res.ok) throw new Error('Fetch wards failed');

  const data = await res.json();
  return data.wards ?? [];
};

export const getDistricts = async (
  provinceCode: number
): Promise<District[]> => {
  const res = await fetch(
    `https://provinces.open-api.vn/api/p/${provinceCode}?depth=2`
  );

  if (!res.ok) throw new Error('Fetch districts failed');

  const data = await res.json();
  return data.districts ?? [];
};

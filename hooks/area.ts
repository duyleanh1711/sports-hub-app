import { useQuery } from '@tanstack/react-query';

import { District, Province, Ward } from '@/types/area';
import { getDistricts, getProvinces, getWards } from '@/api/area';

export const useProvinces = () => {
  return useQuery<Province[]>({
    queryKey: ['area', 'provinces'],
    queryFn: getProvinces,
  });
};

export const useDistricts = (provinceCode: number | null) => {
  return useQuery<District[]>({
    queryKey: ['area', 'districts', provinceCode],
    queryFn: () => getDistricts(provinceCode as number),
    enabled: !!provinceCode,
    staleTime: 1000 * 60 * 60,
  });
};

export const useWards = (districtCode: number | null) => {
  return useQuery<Ward[]>({
    queryKey: ['area', 'wards', districtCode],
    queryFn: () => getWards(districtCode as number),
    enabled: !!districtCode,
    staleTime: 1000 * 60 * 60,
  });
};

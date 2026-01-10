'use client';

import { useState } from 'react';

import { Search } from 'lucide-react';

import { LocationItem } from '@/types/area';

import SportSelect from './sport-select';
import ProvinceSelect from './province-select';
import DistrictSelect from './district-select';

import { Button } from '@/components/ui/button';

const SportsFieldSearch = () => {
  // State for selected province and district
  const [selectedProvince, setSelectedProvince] = useState<LocationItem | null>(
    null
  );
  const [selectedDistrict, setSelectedDistrict] = useState<LocationItem | null>(
    null
  );

  return (
    <div className="mx-auto w-full space-y-3 p-5 md:p-6 xl:w-300 2xl:w-350">
      <div className="space-y-6 rounded-2xl bg-white px-6 py-10 shadow-xl">
        <div className="flex flex-col items-center md:items-start gap-2">
          <h2 className="text-2xl md:text-3xl font-bold">
            Đặt sân thể thao ngay
          </h2>
          <p className="text-xs md:text-sm text-muted-foreground">
            Tìm kiếm sân chơi thể thao, thi đấu khắp cả nước
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-3">
          {/* Sport select dropdown */}
          <SportSelect />

          {/* Province select dropdown */}
          <ProvinceSelect
            value={selectedProvince}
            onValueChange={(val) => {
              setSelectedProvince(val);
              setSelectedDistrict(null); // Reset district when province changes
            }}
          />

          {/* District select dropdown depends on selected province */}
          <DistrictSelect
            provinceCode={
              selectedProvince ? Number(selectedProvince.value) : null
            }
            value={selectedDistrict}
            onValueChange={setSelectedDistrict}
          />

          {/* Search button */}
          <Button size="lg" className="w-full lg:w-fit flex items-center gap-2">
            <Search className="w-5 h-5" />
            Tìm kiếm ngay
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SportsFieldSearch;

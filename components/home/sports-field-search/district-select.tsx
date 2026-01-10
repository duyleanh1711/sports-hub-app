import { useState, useMemo, ChangeEvent, useEffect } from 'react';

import { MapPinIcon } from 'lucide-react';

import { useDistricts } from '@/hooks/area';
import { LocationItem } from '@/types/area';

import {
  Combobox,
  ComboboxItem,
  ComboboxList,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxPopup,
} from '@/components/ui/combobox-v2';
import LoadingSpinner from '../../global/loading-spinner';

type DistrictSelectProps = {
  provinceCode: number | null;
  value: LocationItem | null;
  onValueChange: (val: LocationItem | null) => void;
};

const DistrictSelect = ({
  provinceCode,
  value,
  onValueChange,
}: DistrictSelectProps) => {
  const [search, setSearch] = useState('');
  const { data: districts, isFetching } = useDistricts(provinceCode);

  // Reset search and selected value when province changes
  useEffect(() => {
    const timer = setTimeout(() => {
      setSearch('');
      onValueChange(null);
    }, 0);
    return () => clearTimeout(timer);
  }, [provinceCode, onValueChange]);

  // Transform districts into combobox items
  const items: LocationItem[] = useMemo(() => {
    if (!districts) return [];
    return districts.map((d) => ({
      label: d.name,
      value: d.code.toString(),
      icon: <MapPinIcon />,
    }));
  }, [districts]);

  // Filter items based on search input
  const filteredItems = useMemo(() => {
    if (!search) return items;
    return items.filter((item) =>
      item.label.toLowerCase().includes(search.toLowerCase())
    );
  }, [items, search]);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
  };

  return (
    <Combobox<LocationItem>
      items={filteredItems}
      value={value}
      onValueChange={onValueChange}
      disabled={!provinceCode} // Disable if no province selected
    >
      <ComboboxInput
        size="xl"
        aria-label="Chọn quận/huyện"
        placeholder="Chọn quận/huyện…"
        startAddon={
          <span className="[&_svg]:size-4">
            {value?.icon ?? <MapPinIcon />}
          </span>
        }
        onChange={handleSearchChange}
      />

      <ComboboxPopup>
        {isFetching ? (
          <div className="flex justify-center py-4">
            <LoadingSpinner /> {/* Show loader while fetching */}
          </div>
        ) : (
          <>
            <ComboboxEmpty>Không tìm thấy quận/huyện</ComboboxEmpty>
            <ComboboxList>
              {filteredItems.map((district) => (
                <ComboboxItem key={district.value} value={district}>
                  {district.label}
                </ComboboxItem>
              ))}
            </ComboboxList>
          </>
        )}
      </ComboboxPopup>
    </Combobox>
  );
};

export default DistrictSelect;

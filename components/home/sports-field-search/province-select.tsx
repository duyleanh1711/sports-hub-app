import { useState, useMemo, ChangeEvent } from 'react';

import { MapPinIcon } from 'lucide-react';

import { useProvinces } from '@/hooks/area';
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

type ProvinceSelectProps = {
  value: LocationItem | null;
  onValueChange: (val: LocationItem | null) => void;
};

const ProvinceSelect = ({ value, onValueChange }: ProvinceSelectProps) => {
  const { data: provinces, isFetching } = useProvinces();

  const [search, setSearch] = useState('');

  // Transform API data to combobox items
  const items: LocationItem[] = useMemo(() => {
    if (!provinces) return [];
    return provinces.map((p) => ({
      label: p.name,
      value: p.code.toString(),
      icon: <MapPinIcon />,
    }));
  }, [provinces]);

  // Filter items based on search
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
    >
      <ComboboxInput
        size="xl"
        aria-label="Chọn tỉnh/thành phố"
        placeholder="Chọn tỉnh/thành phố…"
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
            <ComboboxEmpty>Không tìm thấy tỉnh/thành phố</ComboboxEmpty>
            <ComboboxList>
              {filteredItems.map((location) => (
                <ComboboxItem key={location.value} value={location}>
                  {location.label}
                </ComboboxItem>
              ))}
            </ComboboxList>
          </>
        )}
      </ComboboxPopup>
    </Combobox>
  );
};

export default ProvinceSelect;

'use client';

import { useState } from 'react';

import { Volleyball } from 'lucide-react';

import { SportItem, SPORTS } from '@/constants/sports';

import {
  Combobox,
  ComboboxItem,
  ComboboxList,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxPopup,
} from '@/components/ui/combobox-v2';

const SportSelect = () => {
  const [selectedSport, setSelectedSport] = useState<SportItem | null>(null);

  return (
    <Combobox<SportItem>
      items={SPORTS} // Static list of sports
      value={selectedSport}
      onValueChange={setSelectedSport} // Update selected sport
    >
      <ComboboxInput
        size="xl"
        aria-label="Chọn môn thể thao"
        placeholder="Chọn môn thể thao…"
        startAddon={
          <span className="[&_svg]:size-4">
            <Volleyball />
          </span>
        }
      />

      <ComboboxPopup>
        <ComboboxEmpty>Không tìm thấy môn thể thao</ComboboxEmpty>{' '}
        {/* Show when list is empty */}
        <ComboboxList>
          {(sport) => (
            <ComboboxItem key={sport.value} value={sport}>
              {sport.label}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxPopup>
    </Combobox>
  );
};

export default SportSelect;

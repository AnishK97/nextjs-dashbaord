import React from 'react';
import { Countries } from '@/app/lib/definitions';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function Countrie({ countries }: { countries: Countries[] }) {
  return (
    <div>
      <Select>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Countries</SelectLabel>
            {countries.map((country) => (
              <SelectItem value={country.country}>{country.country}</SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}

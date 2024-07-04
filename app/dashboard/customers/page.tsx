'use client';

// Import the fetchCountries function
import { fetchCountries } from '@/app/lib/data';
import { useState, useEffect } from 'react';

// Dynamically import the Select components
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Countries } from '@/app/lib/definitions';

export default function Page() {
  const [countries, setCountries] = useState<Countries[]>([]);
  const [country, setInputCountry] = useState('worldwide');
  const [countryInfo, setCountryInfo] = useState({});
  const [mapCountries, setMapCountries] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [casesType, setCasesType] = useState('cases');
  const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -40.4796 });
  const [mapZoom, setMapZoom] = useState(3);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const countriesData = await fetchCountries();
        setCountries(countriesData);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchData();
  }, []);

  const handleCountryChange = async (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const countryCode = event.target.value;

    const url =
      countryCode === 'worldwide'
        ? 'https://disease.sh/v3/covid-19/all'
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;
    await fetch(url).then((response) => console.log(response.json()));
  };

  return (
    // <Select>
    //   <SelectTrigger className="w-[180px]">

    //     {/* Adjusted the component name */}
    //     <SelectValue placeholder="Select a fruit" />
    //   </SelectTrigger>{' '}
    //   {/* Adjusted the component name */}
    //   <SelectContent>
    //     <SelectGroup>
    //       <SelectLabel>Fruits</SelectLabel>
    //       {countries.map((country) => (
    //         <SelectItem key={country.country} value={country.country}>
    //           {country.country}
    //         </SelectItem>
    //       ))}
    //       <SelectItem value="apple">Apple</SelectItem>
    //     </SelectGroup>
    //   </SelectContent>
    // </Select>
    <div>
      <select name="Countries" id="Country" onChange={handleCountryChange}>
        <option value={'worldwide'}>worldwide</option>
        {countries.map((country) => (
          <option value={country.countryInfo.iso2}>{country.country}</option>
        ))}
      </select>
    </div>
  );
}

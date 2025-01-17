import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import paytriotLogo from '@/app/ui/img-logo.svg';
import Image from 'next/image';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <Image src={paytriotLogo} alt="Paytriot Logo" />
    </div>
  );
}

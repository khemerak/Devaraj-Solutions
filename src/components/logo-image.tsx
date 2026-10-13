import Image from 'next/image';

export default function LogoImage() {
  return <span className="logo-frame"><Image className="logo-image" src="/logos/devaraj-solutions.png" alt="" width={1254} height={1254} priority /></span>;
}

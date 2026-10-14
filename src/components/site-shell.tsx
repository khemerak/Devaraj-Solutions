 'use client';
import { usePathname } from 'next/navigation';
import Header from './header';
import Footer from './footer';
export default function SiteShell({ children, isTimeHost }: { children: React.ReactNode; isTimeHost: boolean }) {
  const isTime = usePathname() === '/time' || isTimeHost;
  return <>{!isTime && <Header/>}<main id="main">{children}</main>{!isTime && <Footer/>}</>;
}

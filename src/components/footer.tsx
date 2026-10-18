import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Brand } from './header';
import { navigation } from '@/data/navigation';
import { products } from '@/data/products';

export default function Footer() {
  return <footer className="company-footer">
    <div className="container footer-invitation">
      <span className="eyebrow">PRACTICAL IDEAS. REAL POSSIBILITIES.</span>
      <Link href="/contact">Let’s build a better everyday.<ArrowUpRight aria-hidden="true" /></Link>
    </div>
    <div className="container footer-grid">
      <div><Brand /><p>Building smarter digital solutions.<br />Thoughtful software for everyday work.</p><span className="footer-stamp">BUILT WITH PURPOSE ✳</span></div>
      <div><h3>Company</h3>{navigation.map(n => <Link key={n.href} href={n.href}>{n.label}</Link>)}</div>
      <div><h3>Products</h3>{products.map(p => <Link key={p.id} href={p.externalUrl || '/products/' + p.slug}>{p.name}</Link>)}</div>
      <div><h3>Legal</h3><Link href="/privacy">Privacy policy</Link><Link href="/terms">Terms of use</Link></div>
    </div>
    <div className="container footer-bottom"><span>© {new Date().getFullYear()} Devaraj Solutions. All rights reserved.</span><span>Simple by design. Practical by purpose.</span></div>
  </footer>;
}

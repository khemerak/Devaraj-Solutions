import Link from 'next/link';
import { ArrowUpRight, Check, Clock3, PackageCheck } from 'lucide-react';
import { Product, statusLabel } from '@/data/products';
import Preview from './preview';
import OrdersPreview from './orders-preview';

export default function ProductCard({ product: p }: { product: Product }) {
  const Icon = p.id === 'orders' ? PackageCheck : Clock3;
  return <article className="product-card"><div className="product-info"><div className="product-kicker"><span className="product-icon"><Icon /></span><span className="status"><span className="dot" />{statusLabel[p.status]}</span></div><span className="eyebrow">{p.category}</span><h3>{p.name}</h3><p>{p.description}</p><div className="feature-list">{p.features.map(f => <span key={f}><Check size={14} />{f}</span>)}</div><Link className="text-link" href={p.id === 'orders' ? '/products/' + p.slug : p.externalUrl || '/products/' + p.slug}>{p.id === 'orders' ? 'Learn more' : 'View product'}<ArrowUpRight size={18} /></Link>{p.sourceUrl && <a className="external-link" href={p.sourceUrl} target="_blank" rel="noopener noreferrer">Source code · {p.license} license ↗</a>}{p.externalUrl && <a className="external-link" href={p.externalUrl} target="_blank" rel="noopener noreferrer">{p.id === 'orders' ? 'Get started' : 'Visit product website'} ↗</a>}{p.id === 'orders' && !p.externalUrl && <Link className="external-link" href="/contact?product=orders">Get started · request a demo ↗</Link>}</div><div className="product-visual">{p.id === 'time' ? <Preview /> : p.id === 'orders' ? <OrdersPreview /> : <div className="future-symbol">{p.name}</div>}</div></article>;
}

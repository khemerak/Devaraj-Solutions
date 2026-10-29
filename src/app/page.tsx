import Link from 'next/link';
import { ArrowDown, ArrowUpRight, QrCode, ShoppingBag, FolderCheck, Sparkles } from 'lucide-react';
import Preview from '@/components/preview';
import AttendanceStory from '@/components/attendance-story';
import OrdersPreview from '@/components/orders-preview';
import { products, statusLabel } from '@/data/products';
import { metadata as makeMetadata } from '@/lib/metadata';
import './landing.css';

export const metadata = makeMetadata('Devaraj Solutions | Building Smarter Digital Solutions', 'Two focused products for everyday work: Devaraj Time for open-source attendance, and Devaraj Den for orders, customers, and payment records.', '/');
const principles = [
  ['01', 'Less friction.', 'Clear interfaces. Fewer steps. Software that helps people get on with their work.'],
  ['02', 'More clarity.', 'Useful records and considered workflows, built around the people who use them.'],
  ['03', 'Room to grow.', 'Focused products that evolve as the needs of their users change.'],
];
export default function Home() {
  return <div className="playful-home">
    <section className="play-hero">
      <div className="container">
        <span className="play-sticker hero-kicker"><Sparkles size={15} aria-hidden="true" /> INDEPENDENT SOFTWARE. EVERYDAY IMPACT.</span>
        <h1>BIG IDEAS.<br />LESS <em>busywork.</em><br /><span>BETTER DAYS.</span></h1>
        <p>Practical digital products for the work that happens every day.<br className="desktop-break" /> Built by Devaraj Solutions. Made for people.</p>
        <div className="play-actions"><Link className="play-button" href="/products">Explore our products <ArrowDown size={20} /></Link><Link className="play-link" href="/about">Meet Devaraj <ArrowUpRight size={18} /></Link></div>
        <div className="play-card-fan" aria-label="Explore Devaraj Solutions products">
          <a className="play-mini-card scan-card" href="#attendance-story"><span className="play-mini-label">01 / A SIMPLER START</span><QrCode aria-hidden="true" /><strong>Scan.<br />Get on with your day.</strong><span className="play-card-arrow">↗</span></a>
          <a className="play-mini-card schedule-card" href="#product-orders"><span className="play-mini-label">02 / DEVARAJ DEN</span><ShoppingBag aria-hidden="true" /><strong>More orders.<br />Less chaos.</strong><span className="play-card-arrow">↗</span></a>
          <a className="play-mini-card records-card" href="#our-products"><span className="play-mini-label">ONE BRAND / TWO PRODUCTS</span><FolderCheck aria-hidden="true" /><strong>Less guesswork.<br />Better records.</strong><span className="play-card-arrow">↗</span></a>
        </div>
      </div>
    </section>
    <div className="play-ribbon" aria-label="Simple by design. Practical by purpose. Built to evolve."><span>SIMPLE BY DESIGN <i>✳</i> PRACTICAL BY PURPOSE <i>✳</i> BUILT TO EVOLVE <i>✳</i></span></div>
    <section className="play-products container" id="our-products">
      <div className="play-section-heading"><span className="play-sticker">MEET OUR PRODUCTS</span><h2>SMALLER TASKS.<br /><em>Bigger possibilities.</em></h2></div>
      {products.filter(product => product.featured).map(product => <article className={`play-product${product.id === 'orders' ? ' play-product-orders' : ''}`} id={'product-' + product.id} key={product.id}>
        <div className="play-product-copy"><span className="play-product-tab">{product.category}</span><span className="play-product-status">↗ {statusLabel[product.status]}{product.license && ` / ${product.license}`}</span><h3>{product.name}</h3><p className="play-product-lead">{product.summary}</p><p>{product.description}</p><div className="play-feature-chips">{product.features.map(feature => <span key={feature}>{feature}</span>)}</div><Link className="play-button" href={'/products/' + product.slug}>Explore {product.name} <ArrowUpRight size={20} /></Link></div>
        <div className="play-product-art">{product.id === 'time' ? <><span className="play-art-stamp">A SIMPLE SCAN.<br />A BETTER WORKDAY.</span><Preview /><span className="play-example-note">ILLUSTRATIVE PREVIEW · EXAMPLE DATA</span></> : <><span className="play-art-stamp">PRODUCT 02.<br />NOW AVAILABLE.</span><OrdersPreview />{product.externalUrl && <a className="play-button play-product-launch" href={product.externalUrl} target="_blank" rel="noopener noreferrer">Open Devaraj Den <ArrowUpRight size={20} /></a>}</>}</div>
      </article>)}
    </section>
    <AttendanceStory />
    <section className="play-principles container"><div className="play-section-heading"><span className="play-sticker">WHY WE BUILD</span><h2>USEFUL SOFTWARE.<br /><em>Nothing in the way.</em></h2></div><div className="play-principle-grid">{principles.map(([number,title,text]) => <article key={number}><span>{number} /</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
    <section className="play-services"><div className="container"><span className="play-sticker">DEVARAJ TIME · YOUR HOSTING. YOUR CHOICE.</span><h2>TAKE THE SOURCE.<br /><em>Or bring us along.</em></h2><div className="play-service-grid">{products.find(product => product.id === 'time')?.services?.map((service,index) => <article key={service.title}><span>0{index+1}</span><h3>{service.title}</h3><p>{service.text}</p><Link className="play-link" href={service.href}>{service.action}<ArrowUpRight size={18} /></Link></article>)}</div><p className="play-service-note">Time setup and hosting are arranged individually. Scope, costs, and responsibilities are agreed before work starts. Devaraj Den is available separately as a hosted application.</p></div></section>
    <section className="play-next container"><span className="play-sticker">ONE BRAND. ROOM FOR MORE.</span><h2>THE NEXT IDEA<br />STARTS WITH <em>you.</em></h2><p>Have an everyday challenge worth solving? Let’s talk about it.</p><Link className="play-button" href="/contact">Start a conversation <ArrowUpRight size={22} /></Link><Link className="play-link" href="/products">See what we’re building <ArrowUpRight size={18} /></Link></section>
  </div>;
}

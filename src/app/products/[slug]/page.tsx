import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowUpRight } from 'lucide-react';
import { products, statusLabel } from '@/data/products';
import { metadata as m } from '@/lib/metadata';
import { Button } from '@/components/ui';
import Preview from '@/components/preview';
import OrdersLanding from '@/components/orders-landing';

export function generateStaticParams() { return products.map(product => ({ slug: product.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find(product => product.slug === slug);
  return product ? m(product.name + ' | ' + product.category, product.description, '/products/' + product.slug) : {};
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find(product => product.slug === slug);
  if (!product) notFound();
  if (product.id === 'orders') return <OrdersLanding product={product} />;
  return <div className="product-landing">
    <section className="container section product-hero">
      <div><Link className="back-link" href="/products">← All products</Link><span className="eyebrow">{product.name.toUpperCase()} · {statusLabel[product.status]}</span><h1>{product.headline}</h1><p>{product.description}</p>
        <div className="actions">{product.sourceUrl && <a className="button" href={product.sourceUrl} target="_blank" rel="noopener noreferrer">Get source code <ArrowUpRight size={18}/></a>}{product.externalUrl ? <a className="button" href={product.externalUrl} target="_blank" rel="noopener noreferrer">Visit {product.name} <ArrowUpRight size={18} /></a> : <Button href="#hosting-options" secondary>Setup & hosting options</Button>}<Button href="#features" secondary>Explore features</Button></div>
        <p className="ownership">A product by <Link href="/">Devaraj Solutions.</Link></p>
      </div>{product.id === 'time' && <Preview />}
    </section>
    {product.releaseNote && <div className="container"><p className="notice">Source release: {product.releaseNote}</p></div>}
    {product.services && <section id="hosting-options" className="soft-section"><div className="container section"><span className="eyebrow">{product.license}-LICENSED SOFTWARE / OPTIONAL PAID SERVICES</span><h2>Run it your way.</h2><p className="service-intro">The software is free to use under its open-source license. Choose to self-host, pay for setup on your infrastructure, or arrange hosting with us.</p><div className="service-options">{product.services.map(service => <article key={service.title}><h3>{service.title}</h3><p>{service.text}</p>{service.href.startsWith('https://') ? <a className="text-link" href={service.href} target="_blank" rel="noopener noreferrer">{service.action}<ArrowUpRight size={18}/></a> : <Link className="text-link" href={service.href}>{service.action}<ArrowUpRight size={18}/></Link>}</article>)}</div><p className="service-pricing">Setup, hosting, and support are paid services quoted separately. Pricing depends on your infrastructure, deployment scope, and support needs. No fixed prices or service-level guarantees are published.</p></div></section>}
    {product.audience && <section className="container section landing-audience" id="who-its-for"><div className="landing-section-heading"><span className="eyebrow">WHO IT’S FOR</span><h2>One workday.<br />Different responsibilities.</h2></div><div className="landing-rows">{product.audience.map((item, index) => <article key={item.title}><span className="home-index">0{index + 1}</span><div><h3>{item.title}</h3><p>{item.text}</p></div></article>)}</div></section>}
    {product.benefits && <section className="soft-section"><div className="container section"><div className="landing-section-heading"><span className="eyebrow">WHY USE {product.name.toUpperCase()}?</span><h2>Spend less time piecing<br />the workday together.</h2></div><div className="landing-benefits">{product.benefits.map((item, index) => <article key={item.title}><span className="home-index">0{index + 1}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></div></section>}
    {product.id === 'time' && <section className="container section landing-screens"><span className="eyebrow">INSIDE THE APPLICATION</span><h2>See the workflow.</h2><p>Application screenshots from the documented development environment. Example account and workplace information is shown; these are not live customer records.</p><div className="landing-screen-grid"><figure><Image src="/images/devaraj-time/qr-management.png" alt="Devaraj Time QR code management screen with a configured workplace attendance point" width={1025} height={871} sizes="(max-width: 760px) 90vw, 65vw"/><figcaption>Administrators create and manage workplace QR points.</figcaption></figure><figure><Image src="/images/devaraj-time/mobile-scanner.png" alt="Mobile attendance screen showing QR scanning, location verification, and action confirmation" width={374} height={1400} sizes="(max-width: 760px) 85vw, 25vw"/><figcaption>Employees scan, verify their location, and confirm attendance.</figcaption></figure></div></section>}
    <section id="features" className="container section"><div className="landing-section-heading"><span className="eyebrow">WHAT IT SUPPORTS</span><h2>The core attendance workflow.</h2></div><div className="landing-feature-rows">{product.details.map(item => <article key={item.title}><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></section>
    <section className="soft-section"><div className="container section"><span className="eyebrow">HOW IT WORKS</span><h2>From setup to a clearer record.</h2><div className="steps three">{product.steps.map((step, index) => <article key={step.title}><span>0{index + 1}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}</div></div></section>
    {product.limitations && <section className="container section landing-scope"><div><span className="eyebrow">BEFORE YOU GET STARTED</span><h2>Know the current scope.</h2><p>Choose a product with a clear understanding of what it supports today.</p></div><ul>{product.limitations.map(item => <li key={item}>{item}</li>)}</ul></section>}
    <section className="home-contact"><div className="container"><span className="eyebrow">THE NEXT STEP</span><h2>Bring your attendance<br />workflow into focus.</h2><div className="actions">{product.externalUrl && <a className="button" href={product.externalUrl} target="_blank" rel="noopener noreferrer">Visit {product.name} <ArrowUpRight size={18} /></a>}<Button href={'/contact?product=' + product.id} secondary>Discuss your requirements</Button></div><p className="landing-access-note">Self-hosted access is configured by your administrator. Paid setup and hosting are arranged after a quote; public instant signup is not available.</p></div></section>
  </div>;
}

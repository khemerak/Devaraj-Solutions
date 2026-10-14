import Link from 'next/link';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui';
import Preview from '@/components/preview';
import { products, statusLabel } from '@/data/products';
import { metadata as makeMetadata } from '@/lib/metadata';

export const metadata = makeMetadata(
  'Devaraj Solutions | Building Smarter Digital Solutions',
  'Explore a growing software brand creating practical digital products for businesses and organizations, including Devaraj Time.',
  '/',
);

const principles = [
  { title: 'Keep it simple.', text: 'Clear interfaces. Fewer steps. Software that helps people get on with their work.' },
  { title: 'Make it dependable.', text: 'Maintainable foundations and considered engineering, from the first release onward.' },
  { title: 'Leave room to grow.', text: 'Focused products that can evolve as the needs of their users change.' },
];
const approach = [
  { title: 'Understand the problem', text: 'Start with the people doing the work. Understand where their time goes and what gets in the way.' },
  { title: 'Design for simplicity', text: 'Find the clearest path through the task. Make each screen and interaction earn its place.' },
  { title: 'Build for reliability', text: 'Choose dependable foundations. Keep the code and the product easy to maintain.' },
  { title: 'Improve continuously', text: 'Listen to feedback, revisit assumptions, and improve the details that matter.' },
];

export default function Home() {
  return (
    <div className="home-page">
      <section className="home-hero container">
        <div className="home-label-row">
          <span className="eyebrow">DEVARAJ SOLUTIONS / INDEPENDENT SOFTWARE</span>
          <span className="home-tagline">Building Smarter Digital Solutions.</span>
        </div>
        <h1>Thoughtful technology.<br /><span>Practical solutions.</span></h1>
        <div className="home-hero-bottom">
          <a className="home-scroll" href="#our-products"><ArrowDown size={20} /> Explore what we’re building</a>
          <div className="home-hero-summary">
            <p>Software for the work that happens every day. We build focused digital products that help people and organizations get things done.</p>
            <div className="actions"><Button href="/products">Explore our products</Button><Link className="text-link" href="/about">Meet Devaraj Solutions <ArrowUpRight size={18} /></Link></div>
          </div>
        </div>
      </section>

      <section id="our-products" className="home-products">
        <div className="container home-section-label"><span className="eyebrow">01 / WHAT WE’RE BUILDING</span><Link className="text-link" href="/products">All products <ArrowUpRight size={18} /></Link></div>
        {products.filter(product => product.featured).map(product => (
          <article className="home-product" key={product.id}>
            <div className="home-product-copy">
              <span className="home-product-category">{product.category}</span>
              <h2>{product.name}</h2>
              <p className="home-product-summary">{product.summary}</p>
              <p>{product.description}</p>
              <ul className="home-feature-list">{product.features.map(feature => <li key={feature}>{feature}</li>)}</ul>
              <div className="home-product-footer"><Link className="text-link" href={product.externalUrl || '/products/' + product.slug}>View product <ArrowUpRight size={20} /></Link><span className="status"><span className="dot" />{statusLabel[product.status]}</span></div>
              {product.externalUrl && <a className="external-link" href={product.externalUrl} target="_blank" rel="noopener noreferrer">Visit product website ↗</a>}
            </div>
            <div className="home-product-stage">{product.id === 'time' ? <Preview /> : <span>{product.name}</span>}<span className="home-stage-caption">PRODUCT CONCEPT / EXAMPLE DATA</span></div>
          </article>
        ))}
      </section>

      <section className="container home-philosophy">
        <div className="home-section-label"><span className="eyebrow">02 / WHY WE BUILD</span></div>
        <div className="home-statement"><h2>Useful software.<br />Nothing in the way.</h2><p>Technology should make everyday work easier. We focus on practical challenges, clear experiences, and products that have a reason to exist.</p></div>
        <div className="home-principles">{principles.map((principle, index) => <article key={principle.title}><span className="home-index">0{index + 1}</span><h3>{principle.title}</h3><p>{principle.text}</p></article>)}</div>
      </section>

      <section className="home-process"><div className="container home-process-grid"><div><span className="eyebrow">03 / OUR APPROACH</span><h2>Understand.<br />Build.<br />Improve.</h2></div><div className="home-process-list">{approach.map((step, index) => <article key={step.title}><span className="home-index">0{index + 1}</span><div><h3>{step.title}</h3><p>{step.text}</p></div></article>)}</div></div></section>

      <section className="container home-ecosystem"><div><span className="eyebrow">04 / THE BIGGER PICTURE</span><h2>One brand.<br />Room for more.</h2><p>Each product has its own purpose. Our shared commitment is to build software around real needs.</p><Link className="text-link" href="/about">About the company <ArrowUpRight size={18} /></Link></div><div className="home-product-register">{products.map(product => <Link key={product.id} href={product.externalUrl || '/products/' + product.slug}><span><b>{product.name}</b><small>{product.category}</small></span><span>{statusLabel[product.status]} <ArrowUpRight size={20} /></span></Link>)}<div><span><b>More solutions</b><small>New products will be introduced when ready.</small></span><span>Coming soon</span></div></div></section>

      <section className="home-contact"><div className="container"><span className="eyebrow">LET’S TALK</span><Link className="home-contact-link" href="/contact">What are you<br />working on?<ArrowUpRight aria-hidden="true" /></Link><div className="home-contact-bottom"><p>Have a practical challenge or a product question? Start a conversation.</p><Link className="text-link" href="/products">View products <ArrowUpRight size={18} /></Link></div></div></section>
    </div>
  );
}

import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import styles from './founder.module.css';
import { Intro, CTA } from '@/components/ui';
import { metadata as m } from '@/lib/metadata';
export const metadata = m('About Us', 'Meet Pav Khemerak, founder of Devaraj Solutions in Phnom Penh, Cambodia, building practical software with AI-assisted development.', '/about');
const sections = [
 { title: 'What we build', text: 'Focused software for everyday work. Devaraj Time brings clarity to attendance and workforce management. Our second product, Devaraj Den, helps small businesses manage orders, customers, and payment records.' },
 { title: 'Our development principles', text: 'Understand the problem before choosing a solution. Design accessible experiences. Build maintainable foundations. Improve through feedback. These principles shape our work from the first idea to each iteration.' },
 { title: 'A growing product ecosystem', text: 'Each Devaraj Solutions product has its own purpose and independent release cycle. The parent brand connects them through a shared commitment to practical technology.' },
];
export default function Page() {
 return <div className="about-page"><section className="container section"><Intro eyebrow="ABOUT DEVARAJ SOLUTIONS" title="Purpose behind every product." text="We’re an independent technology brand focused on creating software that solves practical problems. Useful functionality, thoughtful design, and reliable engineering guide what we build." /><div className="about-grid"><article><span className="eyebrow">OUR MISSION</span><h2>Make everyday work easier.</h2><p>To create accessible, dependable digital solutions that simplify everyday work and help organizations operate more effectively.</p></article><article><span className="eyebrow">OUR VISION</span><h2>Grow with real-world needs.</h2><p>To become a place where people and organizations can find software solutions shaped around their needs.</p></article></div><section id="founder" className={styles.founder} aria-labelledby="founder-name">
 <figure className={styles.portrait}>
  <Image src="/images/pav-khemerak.webp" alt="Pav Khemerak, founder of Devaraj Solutions" width={900} height={1157} sizes="(max-width: 760px) 90vw, 40vw" />
  <figcaption>PHNOM PENH, CAMBODIA</figcaption>
 </figure>
 <div className={styles.bio}>
  <span className="eyebrow">MEET THE FOUNDER</span>
  <h2 id="founder-name">Pav Khemerak</h2>
  <p className={styles.role}>Founder, Devaraj Solutions</p>
  <p>I started Devaraj Solutions with a simple ambition: to help people and companies solve the everyday problems that slow their work down.</p>
  <p>I hold a bachelor’s degree in Computer Science and Engineering from the Royal University of Phnom Penh. Based in Phnom Penh, Cambodia, I explore how AI technology can turn practical ideas into useful software.</p>
  <p>My approach combines AI-assisted development—often called vibe coding—with hands-on review and testing. I review AI-generated code and test the applications it helps create, keeping the focus on the people who will use them.</p>
  <blockquote>“My vision is for Devaraj Solutions to be a place where people can bring their needs and find a software solution that helps.”</blockquote>
  <nav className={styles.links} aria-label="Pav Khemerak’s profiles">
   <a href="https://www.linkedin.com/in/pav-khemerak-6b7270269" target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={16} aria-hidden="true" /></a>
   <a href="https://github.com/khemerak" target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={16} aria-hidden="true" /></a>
   <a href="https://pavkhemerak.is-a.dev" target="_blank" rel="noopener noreferrer">Portfolio <ArrowUpRight size={16} aria-hidden="true" /></a>
  </nav>
 </div>
 </section><div className="about-editorial">{sections.map((section, index) => <article key={section.title}><span className="home-index">0{index + 1}</span><h2>{section.title}</h2><p>{section.text}</p></article>)}</div></section><CTA /></div>;
}

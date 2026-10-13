import { Intro, CTA } from '@/components/ui';
import { metadata as m } from '@/lib/metadata';
export const metadata = m('About Us', 'An independent technology brand creating useful functionality, thoughtful design, and reliable engineering.', '/about');
const sections = [
 { title: 'What we build', text: 'Focused software for businesses, organizations, and individuals. Our first product, Devaraj Time, explores a clearer approach to attendance and workforce management.' },
 { title: 'Our development principles', text: 'Understand the problem before choosing a solution. Design accessible experiences. Build maintainable foundations. Improve through feedback. These principles shape our work from the first idea to each iteration.' },
 { title: 'A growing product ecosystem', text: 'Each Devaraj Solutions product has its own purpose and independent release cycle. The parent brand connects them through a shared commitment to practical technology.' },
];
export default function Page() {
 return <div className="about-page"><section className="container section"><Intro eyebrow="ABOUT DEVARAJ SOLUTIONS" title="Purpose behind every product." text="We’re an independent technology brand focused on creating software that solves practical problems. Useful functionality, thoughtful design, and reliable engineering guide what we build." /><div className="about-grid"><article><span className="eyebrow">OUR MISSION</span><h2>Make everyday work easier.</h2><p>To create accessible, dependable digital solutions that simplify everyday work and help organizations operate more effectively.</p></article><article><span className="eyebrow">OUR VISION</span><h2>Grow with real-world needs.</h2><p>To grow a collection of meaningful technology products built around real-world needs.</p></article></div><div className="about-editorial">{sections.map((section, index) => <article key={section.title}><span className="home-index">0{index + 1}</span><h2>{section.title}</h2><p>{section.text}</p></article>)}</div></section><CTA /></div>;
}

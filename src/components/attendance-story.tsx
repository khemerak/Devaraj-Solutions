'use client';

import { useState } from 'react';
import { QrCode, MapPin, CalendarDays, Check, ArrowRight } from 'lucide-react';

const steps = [
  { title: 'Scan at work', icon: QrCode, heading: 'A simpler start.', text: 'Enrolled employees scan the workplace QR to record attendance.', label: 'Workplace QR', detail: 'Check-in · Check-out', action: 'See location checks' },
  { title: 'Check the location', icon: MapPin, heading: 'The right place.', text: 'Location evidence is checked against the workplace policy. These checks are not fraud-proof.', label: 'Workplace location', detail: 'Verification follows your configured policy', action: 'See attendance records' },
  { title: 'Review the record', icon: CalendarDays, heading: 'A clearer workday.', text: 'Employees review their history. Authorized reviewers handle corrections and export summaries.', label: 'Attendance recorded', detail: 'Example employee · 09:00 AM', action: 'Replay walkthrough' },
];

export default function AttendanceStory() {
  const [active, setActive] = useState(0);
  const step = steps[active];
  const Icon = step.icon;
  return <section className="play-story" id="attendance-story"><div className="container play-story-grid">
    <div><span className="play-sticker">TAKE A LITTLE LOOK</span><h2>FROM SCAN<br />TO <em>sorted.</em></h2><p className="play-story-intro">Explore the attendance flow in three steps.</p><div className="play-story-controls" aria-label="Walkthrough steps">{steps.map((item,index) => <button key={item.title} type="button" aria-pressed={active === index} aria-controls="attendance-panel" onClick={() => setActive(index)}><span>0{index+1}</span>{item.title}<ArrowRight size={18} aria-hidden="true" /></button>)}</div></div>
    <div className="play-demo" id="attendance-panel"><span className="play-demo-label">INTERACTIVE WALKTHROUGH · SIMULATED DATA</span><div className="play-demo-screen" aria-live="polite" aria-atomic="true"><div className="play-demo-icon" key={active}><Icon size={84} strokeWidth={1.5} aria-hidden="true" />{active === 2 && <span><Check size={20} /></span>}</div><span className="play-demo-detail">{step.label}</span><h3>{step.heading}</h3><p>{step.text}</p><div className="play-demo-record">{step.detail}</div></div><button type="button" className="play-button" onClick={() => setActive(current => (current+1)%steps.length)}>{step.action}<ArrowRight size={18} /></button><p className="play-demo-note">An illustration of the workflow. No camera, location, or employee data is collected.</p></div>
  </div></section>;
}

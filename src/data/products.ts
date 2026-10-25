import { config } from '@/lib/config';
export type ProductStatus = 'available' | 'in-development' | 'coming-soon' | 'source-available';
export interface Product {
  id: string; slug: string; name: string; category: string; summary: string;
  description: string; features: string[]; status: ProductStatus;
  sourceUrl?: string; license?: string; services?: { title: string; text: string; action: string; href: string }[];
  externalUrl?: string; featured: boolean; headline: string;
  details: { title: string; text: string }[];
  steps: { title: string; text: string }[];
  audience?: { title: string; text: string }[];
  benefits?: { title: string; text: string }[];
  releaseNote?: string;
  limitations?: string[];
}
export const products: Product[] = [{
  id: 'time', slug: 'devaraj-time', name: 'Devaraj Time',
  category: 'Attendance & Workforce Management',
  summary: 'Open-source attendance. Your choice of hosting.',
  description: 'Open-source QR attendance, employee schedules, and traceable corrections. Host it yourself, or ask Devaraj Solutions to set it up and operate it for your team.',
  features: ['QR-Based Attendance', 'Location Verification', 'Employee Scheduling', 'Attendance Records', 'Leave Requests', 'CSV / XLSX Exports'],
  status: 'source-available',
  externalUrl: config.timeUrl, featured: true,
  sourceUrl: 'https://github.com/khemerak/Devaraj-Time', license: 'MIT',
  services: [
    { title: 'Host it yourself', text: 'Use the MIT-licensed source at no software license cost. You manage your server, credentials, updates, backups, and employee data.', action: 'Read the deployment guide', href: 'https://github.com/khemerak/Devaraj-Time/blob/main/docs/deployment.md' },
    { title: 'Let us set it up', text: 'We help deploy and configure Devaraj Time on your infrastructure, with scope, handover, and support agreed before work starts.', action: 'Request a setup quote', href: '/contact?product=time&service=setup' },
    { title: 'Let us host it', text: 'Ask us to operate the application for your team. Hosting, maintenance, backups, and support responsibilities are agreed in a separate service arrangement.', action: 'Request a hosting quote', href: '/contact?product=time&service=hosting' },
  ],
  headline: 'Smarter attendance. Fairer workplaces.',
  audience: [
    { title: 'Organizations with workplace-based teams', text: 'Manage attendance across configured workplaces, branches, and departments, with schedules that reflect how your team works.' },
    { title: 'HR teams and administrators', text: 'Set up employees and shifts, review leave and correction requests, and export attendance summaries.' },
    { title: 'Department managers', text: 'Review the employees and records your permissions allow, with department-scoped access.' },
    { title: 'Employees', text: 'Scan to record attendance, review your own history, and raise a correction request when a record needs attention.' },
  ],
  benefits: [
    { title: 'Less manual record keeping', text: 'QR-based check-ins record attendance in a shared system instead of leaving HR to assemble disconnected records.' },
    { title: 'A clearer record for both sides', text: 'Employees can see their own history. Authorized reviewers can investigate discrepancies without silently replacing original events.' },
    { title: 'Corrections with context', text: 'Requests and approval decisions create a traceable path from the original attendance event to an adjusted summary.' },
    { title: 'Workplace rules in one place', text: 'Configure schedules and location checks, then review attendance summaries and export them for further analysis.' },
  ],
  releaseNote: 'The MIT-licensed source is available on GitHub. Setup and hosting are offered by arrangement; there is no instant hosted signup. Review the current limitations before production use. The hero preview is illustrative, and screenshots use development example data.',
  details: [
    { title: 'QR attendance', text: 'Use permanent workplace QR points for check-in and check-out. The application also supports break events and employee attendance history.' },
    { title: 'Location-aware verification', text: 'Configure workplace coordinates, a geofence radius, and location accuracy requirements. Browser GPS and QR images can be fabricated; these checks are not fraud-proof.' },
    { title: 'Employee schedules', text: 'Assign effective-dated shifts individually or in bulk, with rotating daily schedules, rest days, and temporary overrides.' },
    { title: 'Transparent records', text: 'Employees can review their original attendance events. Authorized company users can review records within their permitted scope.' },
    { title: 'Correction and leave requests', text: 'Review documented attendance corrections and full-day leave requests through approval workflows. Partial-day leave and leave balances are not included.' },
    { title: 'Attendance exports', text: 'Review attendance summaries and export CSV or XLSX files. Separate advanced report modules and payroll calculation are not included.' },
  ],
  steps: [
    { title: 'Set up your workplace', text: 'An administrator provisions your company, configures workplaces and schedules, and enrolls your team. Public self-registration is not enabled.' },
    { title: 'Employees scan to record attendance', text: 'Enrolled employees use the workplace QR and provide location evidence when required by the configured policy.' },
    { title: 'Review and resolve', text: 'Review attendance, handle correction and leave requests, and export summaries for further analysis.' },
  ],
  limitations: [
    'Advanced reporting, automatic missing-checkout reminders, and payroll calculations are not included.',
    'Leave requests support full days; leave balances and partial-day leave are not implemented.',
    'Attendance requires a connection. An offline notice does not provide offline attendance recording.',
    'Deployment, mobile camera/location behavior, security, and applicable privacy requirements need production review before adoption.',
  ],
}, {
  id: 'orders', slug: 'devaraj-orders', name: 'Devaraj Orders',
  category: 'Order Management',
  summary: 'More orders. Less chaos.',
  description: 'From the first message to the final delivery: keep orders, customers, products, and payment records together. Built for Cambodian small businesses, in English and Khmer.',
  features: ['Multi-item orders', 'Customer history', 'Manual USD / KHR payments', 'Fulfillment tracking', 'English / Khmer', 'Telegram alerts'],
  status: 'available', featured: true,
  externalUrl: config.ordersUrl,
  headline: 'Create an order in seconds. Track everything in one place.',
  releaseNote: 'Now available as a hosted application. Create your own business workspace and start with a 14-day trial. Orders has separate accounts and data from Devaraj Time. Preview images use fictional example data.',
  details: [
    { title: 'Orders without the busywork', text: 'Record customers, multiple items, delivery fees and discounts. Keep historical prices and a traceable fulfillment history.' },
    { title: 'Payments with clarity', text: 'Record cash, bank transfers, KHQR and cash on delivery manually. Payment status stays separate from delivery; KHQR is not automatically verified.' },
    { title: 'A workspace for Cambodia', text: 'English and Khmer, USD cents or whole riel, and organization-local reporting with Phnom Penh as the default timezone.' },
    { title: 'Updates where you work', text: 'Connect your private Telegram chat for order notifications. Review your sales summaries and export CSV records when you need them.' },
    { title: 'Room for your team', text: 'Start with one owner during your trial. An active Starter or Growth subscription lets you invite staff within your plan limits.' },
  ],
  steps: [
    { title: 'Set up your business', text: 'Create an independent Orders account and verify your email.' },
    { title: 'Record the order', text: 'Choose a customer, add products or custom items, and save.' },
    { title: 'Keep things moving', text: 'Record payments, update fulfillment, and see what needs attention.' },
  ],
  limitations: ['Customer order payments are recorded manually; there is no automatic chat import or bank verification.', 'Telegram notifications go to a private chat you explicitly connect.', 'Subscriptions are one-time USD payments for 30 days through Cutluy, not automatic recurring charges. Your plan activates after server-side payment verification.', 'Team invitations require an active paid subscription. Orders and Time remain independent products.'],
}];
export const statusLabel = { available: 'Available', 'in-development': 'In development', 'coming-soon': 'Coming soon', 'source-available': 'Open source' };

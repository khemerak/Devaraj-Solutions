import { config } from '@/lib/config';
export type ProductStatus = 'available' | 'in-development' | 'coming-soon';
export interface Product {
  id: string; slug: string; name: string; category: string; summary: string;
  description: string; features: string[]; status: ProductStatus;
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
  summary: 'Less attendance admin. More time for what matters.',
  description: 'QR attendance, employee schedules, and traceable corrections in one workspace. Give HR teams and employees a clearer view of each workday.',
  features: ['QR-Based Attendance', 'Location Verification', 'Employee Scheduling', 'Attendance Records', 'Leave Requests', 'CSV / XLSX Exports'],
  status: config.timeUrl && process.env.DEVARAJ_TIME_AVAILABLE === 'true' ? 'available' : 'in-development',
  externalUrl: config.timeUrl, featured: true,
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
  releaseNote: 'The application implements the core workflows described here. A public production deployment has not been verified; the hero preview is illustrative, and the application screenshots below use development example data.',
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
}];
export const statusLabel = { available: 'Available', 'in-development': 'In development', 'coming-soon': 'Coming soon' };

import { PackageCheck, Check } from 'lucide-react';

export default function OrdersPreview() {
  return <div style={{ background: '#eef3e5', border: '1px solid #dce6cf', borderRadius: 18, padding: 'clamp(24px, 4vw, 45px)', color: '#45613b', width: '100%' }}>
    <PackageCheck size={36} aria-hidden="true" />
    <p style={{ fontSize: 12, letterSpacing: 2, marginTop: 20 }}>DEVARAJ ORDERS</p>
    <h3 style={{ fontSize: 'clamp(30px, 4vw, 48px)', lineHeight: 1.15, margin: '12px 0 25px' }}>Less admin.<br />More selling.</h3>
    {['Record the order', 'Track the payment', 'Follow the delivery'].map((item, index) => <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 0', borderTop: '1px solid #d7e2c9', fontSize: 13 }}><span style={{ opacity: .6 }}>0{index + 1}</span>{item}<Check size={16} style={{ marginLeft: 'auto' }} /></div>)}
    <p style={{ fontSize: 10, marginTop: 20, opacity: .65 }}>WORKFLOW ILLUSTRATION · EXAMPLE DATA</p>
  </div>;
}

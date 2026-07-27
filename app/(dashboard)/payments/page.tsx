'use client'

import { NotificationBanner } from '@/components/NotificationBanner'
import { ChevronDown, Download } from 'lucide-react'

const payments = [
  { id: 1, reference: 'MP-2026-001', channel: 'QRPH P2M', date: 'Jul 21 2026, 1:20 pm', status: 'Pending', amount: '₱204.00', type: 'Incoming' },
  { id: 2, reference: 'MP-2026-042', channel: 'Security Bank • QRPH P2M', date: 'Jul 21 2026, 1:11 am', status: 'Executed', amount: '₱1,204.00', type: 'Incoming' },
  { id: 3, reference: 'MP-2026-031', channel: 'GCash', date: 'Jul 20 2026, 9:42 pm', status: 'Executed', amount: '₱6,560.00', type: 'Incoming' },
  { id: 4, reference: 'MP-2026-018', channel: 'PayMaya', date: 'Jul 19 2026, 10:30 pm', status: 'Expired', amount: '₱100.00', type: 'Incoming' },
  { id: 5, reference: 'MP-2026-012', channel: 'Bank transfer', date: 'Jul 18 2026, 9:30 pm', status: 'Canceled', amount: '₱2,350.00', type: 'Incoming' },
  { id: 6, reference: 'MP-2026-011', channel: 'E-wallet', date: 'Jul 17 2026, 8:45 pm', status: 'Executed', amount: '₱5,123.00', type: 'Incoming' },
]

export default function PaymentsPage() {
  return (
    <div className="p-6 space-y-6">
      <NotificationBanner />

      <div>
        <h1 className="text-3xl font-bold text-default mb-4">Payments</h1>
        <div className="flex flex-wrap items-center gap-3 text-sm text-muted">
          <span className="font-medium">Range:</span>
          <button className="flex items-center gap-1 rounded-full border card-border bg-card px-3 py-2 text-default shadow-sm transition hover:bg-surface-soft">
            <span>Last 30 days</span>
            <ChevronDown size={16} />
          </button>
          <span className="text-muted">Total: ₱15,541.00</span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="bg-card rounded-3xl border card-border p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted">Total Payments</p>
          <p className="mt-4 text-4xl font-semibold text-default">₱15,541</p>
          <p className="mt-2 text-sm text-muted">156 transactions</p>
        </div>
        <div className="bg-card rounded-3xl border card-border p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted">Status Breakdown</p>
          <div className="mt-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted">Executed</span>
              <span className="font-semibold text-emerald-600">128</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted">Pending</span>
              <span className="font-semibold text-amber-600">18</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted">Failed</span>
              <span className="font-semibold text-red-600">10</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-card rounded-3xl border card-border p-6 shadow-sm">
        <div className="flex items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-lg font-semibold text-default">All payments</h2>
            <p className="text-sm text-muted">Complete transaction history.</p>
          </div>
          <button className="flex items-center gap-2 rounded-full border card-border bg-card px-4 py-2 text-sm font-semibold text-default hover:bg-surface-soft">
            <Download size={16} />
            Export
          </button>
        </div>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[900px] text-left">
            <thead>
              <tr className="border-b card-border text-muted">
                <th className="py-4 px-4 text-xs uppercase tracking-[0.24em]">Reference</th>
                <th className="py-4 px-4 text-xs uppercase tracking-[0.24em]">Channel</th>
                <th className="py-4 px-4 text-xs uppercase tracking-[0.24em]">Date</th>
                <th className="py-4 px-4 text-xs uppercase tracking-[0.24em]">Amount</th>
                <th className="py-4 px-4 text-xs uppercase tracking-[0.24em]">Type</th>
                <th className="py-4 px-4 text-xs uppercase tracking-[0.24em]">Status</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment) => (
                <tr key={payment.id} className="border-b card-border hover:bg-surface-soft">
                  <td className="py-4 px-4 font-medium text-default">{payment.reference}</td>
                  <td className="py-4 px-4 text-muted text-sm">{payment.channel}</td>
                  <td className="py-4 px-4 text-muted text-sm">{payment.date}</td>
                  <td className="py-4 px-4 text-default font-medium">{payment.amount}</td>
                  <td className="py-4 px-4 text-sm text-muted">{payment.type}</td>
                  <td className="py-4 px-4">
                    <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                      payment.status === 'Executed' ? 'bg-emerald-100 text-emerald-700' : payment.status === 'Pending' ? 'bg-amber-100 text-amber-700' : 'bg-surface-soft text-muted'
                    }`}>
                      {payment.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

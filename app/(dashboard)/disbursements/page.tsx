'use client'

import { NotificationBanner } from '@/components/NotificationBanner'
import { ChevronDown, Send, Download } from 'lucide-react'

const disbursements = [
  { id: 1, reference: 'DB-2026-001', recipient: 'John Doe', amount: '₱10,000', date: 'Jul 21 2026, 1:20 pm', status: 'Completed', method: 'Bank Transfer', fee: '₱50' },
  { id: 2, reference: 'DB-2026-002', recipient: 'Jane Smith', amount: '₱25,000', date: 'Jul 20 2026, 3:45 pm', status: 'Pending', method: 'E-wallet', fee: '₱125' },
  { id: 3, reference: 'DB-2026-003', recipient: 'Mike Johnson', amount: '₱5,500', date: 'Jul 19 2026, 11:20 am', status: 'Completed', method: 'Bank Transfer', fee: '₱30' },
  { id: 4, reference: 'DB-2026-004', recipient: 'Sarah Davis', amount: '₱15,000', date: 'Jul 18 2026, 9:30 pm', status: 'Failed', method: 'Bank Transfer', fee: '₱0' },
  { id: 5, reference: 'DB-2026-005', recipient: 'Tom Wilson', amount: '₱30,000', date: 'Jul 17 2026, 8:45 pm', status: 'Completed', method: 'E-wallet', fee: '₱150' },
]

export default function DisbursementsPage() {
  return (
    <div className="p-6 space-y-6">
      <NotificationBanner />

      <div>
        <h1 className="text-3xl font-bold text-default mb-4">Disbursements</h1>
        <div className="flex flex-wrap items-center gap-3 text-sm text-muted">
          <span className="font-medium">Period:</span>
          <button className="flex items-center gap-1 rounded-full border card-border bg-card px-3 py-2 text-default shadow-sm transition hover:bg-surface-soft">
            <span>Last 30 days</span>
            <ChevronDown size={16} />
          </button>
          <span className="text-muted">Total: ₱85,500</span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div className="bg-card rounded-3xl border card-border p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted">Total Disbursed</p>
          <p className="mt-4 text-4xl font-semibold text-default">₱85,500</p>
          <p className="mt-2 text-sm text-muted">5 transactions</p>
        </div>
        <div className="bg-card rounded-3xl border card-border p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted">Avg. Disbursement</p>
          <p className="mt-4 text-4xl font-semibold text-default">₱17,100</p>
          <p className="mt-2 text-sm text-muted">Per transaction</p>
        </div>
        <div className="bg-card rounded-3xl border card-border p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted">Total Fees</p>
          <p className="mt-4 text-4xl font-semibold text-default">₱355</p>
          <p className="mt-2 text-sm text-muted">Processing charges</p>
        </div>
      </div>

      <div className="bg-card rounded-3xl border card-border p-6 shadow-sm">
        <div className="flex items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-lg font-semibold text-default">All disbursements</h2>
            <p className="text-sm text-muted">Complete disbursement history.</p>
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 rounded-full border card-border bg-card px-4 py-2 text-sm font-semibold text-default hover:bg-surface-soft">
              <Send size={16} />
              New
            </button>
            <button className="flex items-center gap-2 rounded-full border card-border bg-card px-4 py-2 text-sm font-semibold text-default hover:bg-surface-soft">
              <Download size={16} />
              Export
            </button>
          </div>
        </div>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[1000px] text-left">
            <thead>
              <tr className="border-b card-border text-muted">
                <th className="py-4 px-4 text-xs uppercase tracking-[0.24em]">Reference</th>
                <th className="py-4 px-4 text-xs uppercase tracking-[0.24em]">Recipient</th>
                <th className="py-4 px-4 text-xs uppercase tracking-[0.24em]">Amount</th>
                <th className="py-4 px-4 text-xs uppercase tracking-[0.24em]">Method</th>
                <th className="py-4 px-4 text-xs uppercase tracking-[0.24em]">Fee</th>
                <th className="py-4 px-4 text-xs uppercase tracking-[0.24em]">Date</th>
                <th className="py-4 px-4 text-xs uppercase tracking-[0.24em]">Status</th>
              </tr>
            </thead>
            <tbody>
              {disbursements.map((disb) => (
                <tr key={disb.id} className="border-b card-border hover:bg-surface-soft">
                  <td className="py-4 px-4 font-medium text-default">{disb.reference}</td>
                  <td className="py-4 px-4 text-muted text-sm">{disb.recipient}</td>
                  <td className="py-4 px-4 text-default font-medium">{disb.amount}</td>
                  <td className="py-4 px-4 text-sm text-muted">{disb.method}</td>
                  <td className="py-4 px-4 text-sm text-muted">{disb.fee}</td>
                  <td className="py-4 px-4 text-sm text-muted">{disb.date}</td>
                  <td className="py-4 px-4">
                    <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                      disb.status === 'Completed' ? 'bg-emerald-100 text-emerald-700' : disb.status === 'Pending' ? 'bg-amber-100 text-amber-700' : 'bg-red-100 text-red-700'
                    }`}>
                      {disb.status}
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

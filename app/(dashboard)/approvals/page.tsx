'use client'

import { NotificationBanner } from '@/components/NotificationBanner'
import { ChevronDown, CheckCircle, Clock } from 'lucide-react'

const approvals = [
  { id: 1, reference: 'TXN-2026-001', type: 'Disbursement', amount: '₱50,000', requestedBy: 'John Doe', requestedDate: 'Jul 21 2026, 2:15 pm', status: 'Pending', priority: 'High' },
  { id: 2, reference: 'TXN-2026-002', type: 'Payment Link', amount: '₱25,000', requestedBy: 'Jane Smith', requestedDate: 'Jul 20 2026, 3:45 pm', status: 'Pending', priority: 'Medium' },
  { id: 3, reference: 'TXN-2026-003', type: 'Batch Payment', amount: '₱100,000', requestedBy: 'Mike Johnson', requestedDate: 'Jul 19 2026, 11:20 am', status: 'Approved', priority: 'Low' },
]

export default function ApprovalsPage() {
  return (
    <div className="p-6 space-y-6">
      <NotificationBanner />

      <div>
        <h1 className="text-3xl font-bold text-default mb-4">Approvals</h1>
        <div className="flex flex-wrap items-center gap-3 text-sm text-muted">
          <span className="font-medium">Status:</span>
          <button className="flex items-center gap-1 rounded-full border card-border bg-card px-3 py-2 text-default shadow-sm transition hover:bg-surface-soft">
            <span>All</span>
            <ChevronDown size={16} />
          </button>
          <span className="text-muted">Pending: 2 · Approved: 1</span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="bg-card rounded-3xl border card-border p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <Clock size={24} className="text-amber-500" />
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted">Pending</p>
          </div>
          <p className="text-4xl font-semibold text-default">2</p>
          <p className="mt-2 text-sm text-muted">Awaiting your approval</p>
        </div>
        <div className="bg-card rounded-3xl border card-border p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <CheckCircle size={24} className="text-emerald-500" />
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted">Approved</p>
          </div>
          <p className="text-4xl font-semibold text-default">1</p>
          <p className="mt-2 text-sm text-muted">Total this period</p>
        </div>
      </div>

      <div className="bg-card rounded-3xl border card-border p-6 shadow-sm">
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-default">Pending approvals</h2>
          <p className="text-sm text-muted">Items requiring your action.</p>
        </div>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[900px] text-left">
            <thead>
              <tr className="border-b card-border text-muted">
                <th className="py-4 px-4 text-xs uppercase tracking-[0.24em]">Reference</th>
                <th className="py-4 px-4 text-xs uppercase tracking-[0.24em]">Type</th>
                <th className="py-4 px-4 text-xs uppercase tracking-[0.24em]">Amount</th>
                <th className="py-4 px-4 text-xs uppercase tracking-[0.24em]">Requested By</th>
                <th className="py-4 px-4 text-xs uppercase tracking-[0.24em]">Date</th>
                <th className="py-4 px-4 text-xs uppercase tracking-[0.24em]">Priority</th>
                <th className="py-4 px-4 text-xs uppercase tracking-[0.24em]">Action</th>
              </tr>
            </thead>
            <tbody>
              {approvals.filter(a => a.status === 'Pending').map((approval) => (
                <tr key={approval.id} className="border-b card-border hover:bg-surface-soft">
                  <td className="py-4 px-4 font-medium text-default">{approval.reference}</td>
                  <td className="py-4 px-4 text-sm text-muted">{approval.type}</td>
                  <td className="py-4 px-4 font-medium text-default">{approval.amount}</td>
                  <td className="py-4 px-4 text-sm text-muted">{approval.requestedBy}</td>
                  <td className="py-4 px-4 text-sm text-muted">{approval.requestedDate}</td>
                  <td className="py-4 px-4">
                    <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                      approval.priority === 'High' ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-700'
                    }`}>
                      {approval.priority}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex gap-2">
                      <button className="text-xs font-semibold text-emerald-600 hover:underline">Approve</button>
                      <button className="text-xs font-semibold text-red-600 hover:underline">Reject</button>
                    </div>
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

'use client'

import Link from 'next/link'
import { ChevronLeft, Clock3 } from 'lucide-react'

export default function ApprovalPendingPage() {
  const pendingApprovals = [
    { id: 'AP-001', type: 'Payment', amount: '₱5,000.00', requester: 'John Doe', date: 'Jul 21 2026' },
    { id: 'AP-002', type: 'Disbursement', amount: '₱3,500.00', requester: 'Jane Smith', date: 'Jul 21 2026' },
  ]

  return (
    <div className="p-6 space-y-6">
      <Link href="/approvals" className="inline-flex items-center gap-2 px-3 py-2 rounded-full border card-border bg-card text-sm font-medium text-default hover:bg-surface-soft">
        <ChevronLeft size={18} /> Back
      </Link>

      <div className="bg-card rounded-3xl border card-border p-6 shadow-sm">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-2xl bg-yellow-100 text-yellow-700">
            <Clock3 size={24} />
          </div>
          <div>
            <h1 className="text-3xl font-semibold text-default">Pending approvals</h1>
            <p className="mt-2 text-sm text-muted">Review items that still need approval before execution.</p>
          </div>
        </div>

        <div className="mt-8 overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b card-border bg-surface-soft">
                <th className="px-6 py-4 text-xs font-semibold uppercase text-muted">Approval</th>
                <th className="px-6 py-4 text-xs font-semibold uppercase text-muted">Requester</th>
                <th className="px-6 py-4 text-xs font-semibold uppercase text-muted">Amount</th>
                <th className="px-6 py-4 text-xs font-semibold uppercase text-muted">Date</th>
                <th className="px-6 py-4 text-xs font-semibold uppercase text-muted">Action</th>
              </tr>
            </thead>
            <tbody>
              {pendingApprovals.map((item) => (
                <tr key={item.id} className="border-b card-border hover:bg-surface-soft">
                  <td className="px-6 py-4 text-sm font-semibold text-default">{item.id}</td>
                  <td className="px-6 py-4 text-sm text-muted">{item.requester}</td>
                  <td className="px-6 py-4 text-sm font-semibold text-default">{item.amount}</td>
                  <td className="px-6 py-4 text-sm text-muted">{item.date}</td>
                  <td className="px-6 py-4">
                    <button className="px-4 py-2 rounded-lg bg-orange-600 text-white text-sm font-semibold hover:bg-orange-700">Review</button>
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

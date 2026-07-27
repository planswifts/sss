'use client'

import Link from 'next/link'
import { ChevronLeft, Clock2 } from 'lucide-react'

const history = [
  { id: 'AP-001', type: 'Payment', status: 'Approved', date: 'Jul 20 2026', approver: 'Admin' },
  { id: 'AP-002', type: 'Disbursement', status: 'Rejected', date: 'Jul 19 2026', approver: 'Admin' },
]

export default function ApprovalHistoryPage() {
  return (
    <div className="p-6 space-y-6">
      <Link href="/approvals" className="inline-flex items-center gap-2 px-3 py-2 rounded-full border card-border bg-card text-sm font-medium text-default hover:bg-surface-soft">
        <ChevronLeft size={18} /> Back
      </Link>

      <div className="bg-card rounded-3xl border card-border p-6 shadow-sm">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-2xl bg-surface-soft text-default">
            <Clock2 size={24} />
          </div>
          <div>
            <h1 className="text-3xl font-semibold text-default">Approval history</h1>
            <p className="mt-2 text-sm text-muted">View all approval activity for completed requests.</p>
          </div>
        </div>

        <div className="mt-8 overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b card-border bg-surface-soft">
                <th className="px-6 py-4 text-xs font-semibold uppercase text-muted">Approval</th>
                <th className="px-6 py-4 text-xs font-semibold uppercase text-muted">Status</th>
                <th className="px-6 py-4 text-xs font-semibold uppercase text-muted">Approver</th>
                <th className="px-6 py-4 text-xs font-semibold uppercase text-muted">Date</th>
              </tr>
            </thead>
            <tbody>
              {history.map((item) => (
                <tr key={item.id} className="border-b card-border hover:bg-surface-soft">
                  <td className="px-6 py-4 text-sm font-semibold text-default">{item.id}</td>
                  <td className="px-6 py-4 text-sm text-muted">{item.status}</td>
                  <td className="px-6 py-4 text-sm text-muted">{item.approver}</td>
                  <td className="px-6 py-4 text-sm text-muted">{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

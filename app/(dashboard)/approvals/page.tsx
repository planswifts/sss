'use client'

import Link from 'next/link'
import { NotificationBanner } from '@/components/NotificationBanner'
import { ChevronDown, MoreVertical } from 'lucide-react'

const approvalsData = [
  { id: 1, title: 'Payment Approval #001', amount: '₱5,000.00', requester: 'John Doe', date: 'Jul 21, 2026', status: 'Pending' },
  { id: 2, title: 'Disbursement Approval #002', amount: '₱3,500.00', requester: 'Jane Smith', date: 'Jul 21, 2026', status: 'Pending' },
  { id: 3, title: 'Payment Link Approval #003', amount: '₱2,000.00', requester: 'Bob Johnson', date: 'Jul 20, 2026', status: 'Approved' },
]

export default function ApprovalsPage() {
  return (
    <div className="p-6 space-y-6">
      <NotificationBanner />

      <div className="flex items-center justify-between mb-6 gap-3 flex-wrap">
        <h1 className="text-3xl font-bold text-default">Approvals</h1>
        <div className="flex gap-3 flex-wrap">
          <Link href="/approvals/pending" className="px-4 py-2 rounded-full border card-border bg-card text-sm font-medium text-default hover:bg-surface-soft">
            Pending
          </Link>
          <Link href="/approvals/history" className="px-4 py-2 rounded-full bg-accent text-white text-sm font-medium shadow-sm hover:bg-orange-600">
            History
          </Link>
        </div>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-3 bg-card p-4 rounded-lg border card-border">
        <span className="text-sm text-muted">Status:</span>
        <button className="flex items-center gap-2 px-3 py-1.5 rounded-full border card-border bg-card text-sm text-default hover:bg-surface-soft">
          <span>All</span>
          <ChevronDown size={16} />
        </button>
      </div>

      {/* Approvals List */}
      <div className="bg-card rounded-lg border card-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-surface-soft border-b card-border">
                <th className="text-left text-xs font-semibold text-muted px-6 py-4">TITLE</th>
                <th className="text-left text-xs font-semibold text-muted px-6 py-4">AMOUNT</th>
                <th className="text-left text-xs font-semibold text-muted px-6 py-4">REQUESTER</th>
                <th className="text-left text-xs font-semibold text-muted px-6 py-4">DATE</th>
                <th className="text-left text-xs font-semibold text-muted px-6 py-4">STATUS</th>
                <th className="text-right text-xs font-semibold text-muted px-6 py-4"></th>
              </tr>
            </thead>
            <tbody>
              {approvalsData.map((approval) => (
                <tr key={approval.id} className="border-b card-border hover:bg-surface-soft">
                  <td className="px-6 py-4">
                    <p className="text-sm font-semibold text-default">{approval.title}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm font-semibold text-default">{approval.amount}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-muted">{approval.requester}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-muted">{approval.date}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${approval.status === 'Approved' ? 'bg-emerald-100 text-emerald-700' : 'bg-yellow-100 text-yellow-700'}`}>
                      {approval.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-1 rounded-full hover:bg-surface-soft">
                      <MoreVertical size={18} className="text-muted" />
                    </button>
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

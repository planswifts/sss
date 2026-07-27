'use client'

import Link from 'next/link'
import { NotificationBanner } from '@/components/NotificationBanner'
import { ChevronDown, MoreVertical, Search } from 'lucide-react'

const disbursements = [
  { id: 1, reference: 'DB-471', amount: '₱28,000.00', recipient: 'Michaela Santos', status: 'Completed', date: 'Jul 21, 2026' },
  { id: 2, reference: 'DB-472', amount: '₱5,300.00', recipient: 'Rafael Cruz', status: 'Pending', date: 'Jul 21, 2026' },
  { id: 3, reference: 'DB-473', amount: '₱2,450.00', recipient: 'Ariel Torrez', status: 'Failed', date: 'Jul 20, 2026' },
  { id: 4, reference: 'DB-474', amount: '₱18,200.00', recipient: 'Lina De Guzman', status: 'Completed', date: 'Jul 18, 2026' },
]

export default function DisbursementsPage() {
  return (
    <div className="p-6 space-y-6">
      <NotificationBanner />

      <div className="flex items-center justify-between mb-6 gap-3 flex-wrap">
        <h1 className="text-3xl font-bold text-default">Disbursements</h1>
        <Link href="/disbursements/send-single-disbursement" className="px-4 py-2 rounded-full bg-accent text-white text-sm font-medium shadow-sm hover:bg-orange-600">
          + Create Disbursement
        </Link>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-3 bg-card p-4 rounded-lg border card-border">
        <span className="text-sm text-muted">Status:</span>
        <button className="flex items-center gap-2 px-3 py-1.5 rounded-full border card-border bg-card text-sm text-default hover:bg-surface-soft">
          <span>All</span>
          <ChevronDown size={16} />
        </button>

        <div className="ml-auto relative w-64">
          <Search size={18} className="absolute left-3 top-2.5 text-muted" />
          <input type="text" placeholder="Search..." className="w-full pl-10 pr-4 py-1.5 rounded-full border card-border bg-surface outline-none focus:border-accent focus:ring-2 focus:ring-orange-100" />
        </div>
      </div>

      {/* Table */}
      <div className="bg-card rounded-lg border card-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-surface-soft border-b card-border">
                <th className="text-left text-xs font-semibold text-muted px-6 py-4">REFERENCE</th>
                <th className="text-left text-xs font-semibold text-muted px-6 py-4">AMOUNT</th>
                <th className="text-left text-xs font-semibold text-muted px-6 py-4">RECIPIENT</th>
                <th className="text-left text-xs font-semibold text-muted px-6 py-4">STATUS</th>
                <th className="text-left text-xs font-semibold text-muted px-6 py-4">DATE</th>
                <th className="text-right text-xs font-semibold text-muted px-6 py-4"></th>
              </tr>
            </thead>
            <tbody>
              {disbursements.map((disburse) => (
                <tr key={disburse.id} className="border-b border-surface-soft hover:bg-surface-soft">
                  <td className="px-6 py-4">
                    <Link href="/disbursements/details" className="text-sm font-semibold text-accent hover:text-orange-600">{disburse.reference}</Link>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm font-semibold text-default">{disburse.amount}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-muted">{disburse.recipient}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${disburse.status === 'Completed' ? 'bg-emerald-100 text-emerald-700' : disburse.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'}`}>
                      {disburse.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-muted">{disburse.date}</p>
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

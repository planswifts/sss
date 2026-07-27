'use client'

import Link from 'next/link'
import { NotificationBanner } from '@/components/NotificationBanner'
import { Search, ChevronDown, Copy, MoreVertical } from 'lucide-react'

const paymentLinks = [
  { id: 1, reference: 'PL-001', amount: '₱1,500.00', status: 'Active', created: 'Jul 21, 2026', usage: '15 payments' },
  { id: 2, reference: 'PL-002', amount: '₱2,000.00', status: 'Expired', created: 'Jul 20, 2026', usage: '8 payments' },
  { id: 3, reference: 'PL-003', amount: '₱500.00', status: 'Active', created: 'Jul 19, 2026', usage: '4 payments' },
]

export default function PaymentLinksPage() {
  return (
    <div className="p-6 space-y-6">
      <NotificationBanner />

      <div className="flex items-center justify-between mb-6 gap-3 flex-wrap">
        <h1 className="text-3xl font-bold text-default">Payment Links</h1>
        <Link href="/payment-links/create" className="px-4 py-2 rounded-full bg-accent text-white text-sm font-medium shadow-sm hover:bg-orange-600">
          + Create Payment Link
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
                <th className="text-left text-xs font-semibold text-muted px-6 py-4">STATUS</th>
                <th className="text-left text-xs font-semibold text-muted px-6 py-4">CREATED</th>
                <th className="text-right text-xs font-semibold text-muted px-6 py-4"></th>
              </tr>
            </thead>
            <tbody>
              {paymentLinks.map((link) => (
                <tr key={link.id} className="border-b border-surface-soft hover:bg-surface-soft">
                  <td className="px-6 py-4">
                    <Link href="/payment-links/details" className="text-sm font-semibold text-accent hover:text-orange-600">{link.reference}</Link>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm font-semibold text-default">{link.amount}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${link.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 'bg-surface-soft text-muted'}`}>
                      {link.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-muted">{link.created}</p>
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

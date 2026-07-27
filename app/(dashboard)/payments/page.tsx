'use client'

import Link from 'next/link'
import { NotificationBanner } from '@/components/NotificationBanner'
import { Search, MoreVertical, ChevronDown, Copy } from 'lucide-react'
import { useState } from 'react'

const payments = [
  { id: 1, amount: '₱12,850.00', ref: 'MP-2026-001', channel: 'PayMaya', date: 'Jul 21 2026, 1:20 pm', status: 'Pending' },
  { id: 2, amount: '₱8,250.00', ref: 'MP-2026-042', channel: 'Security Bank • QRPH P2M', date: 'Jul 21 2026, 1:11 am', status: 'Executed' },
  { id: 3, amount: '₱2,100.00', ref: 'MP-2026-031', channel: 'GCash', date: 'Jul 20 2026, 9:42 pm', status: 'Executed' },
  { id: 4, amount: '₱100.00', ref: 'MP-2026-018', channel: 'PayMaya', date: 'Jul 19 2026, 10:30 pm', status: 'Expired' },
  { id: 5, amount: '₱18,500.00', ref: 'MP-2026-022', channel: 'Bank transfer', date: 'Jul 19 2026, 4:10 pm', status: 'Executed' },
  { id: 6, amount: '₱3,950.00', ref: 'MP-2026-010', channel: 'QRPH P2M', date: 'Jul 18 2026, 9:30 pm', status: 'Canceled' },
]

export default function PaymentsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const filteredPayments = payments.filter((payment) =>
    payment.ref.toLowerCase().includes(searchTerm.toLowerCase()) ||
    payment.channel.toLowerCase().includes(searchTerm.toLowerCase()) ||
    payment.amount.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="p-6 space-y-6">
      <NotificationBanner />

      <div className="flex items-center justify-between mb-6 gap-3 flex-wrap">
        <div>
          <h1 className="text-3xl font-bold text-default">Payments</h1>
        </div>
        <div className="flex gap-3 flex-wrap">
          <Link href="/payments/find-by-payment-proof" className="px-4 py-2 rounded-full border card-border bg-card text-sm font-medium text-default hover:bg-surface-soft">
            Search proof
          </Link>
          <Link href="/payments/transaction-details" className="px-4 py-2 rounded-full bg-accent text-white text-sm font-medium shadow-sm hover:bg-orange-600">
            + Create Payment
          </Link>
        </div>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-3 bg-card p-4 rounded-lg border card-border">
        <span className="text-sm text-muted">Created on:</span>
        <button className="flex items-center gap-2 px-3 py-1.5 rounded-full border card-border bg-card text-sm text-default hover:bg-surface-soft">
          <span>Last 7 days</span>
          <ChevronDown size={16} />
        </button>

        <span className="text-sm text-muted">Status:</span>
        <button className="flex items-center gap-2 px-3 py-1.5 rounded-full border card-border bg-card text-sm text-default hover:bg-surface-soft">
          <span>All</span>
          <ChevronDown size={16} />
        </button>

        <div className="ml-auto relative w-64">
          <Search size={18} className="absolute left-3 top-2.5 text-muted" />
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-1.5 rounded-full border card-border bg-surface outline-none focus:border-accent focus:ring-2 focus:ring-orange-100"
          />
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="bg-card rounded-3xl p-6 border card-border shadow-sm">
          <p className="text-sm font-semibold text-muted">Transactions</p>
          <p className="text-3xl font-bold text-default mt-2">8</p>
        </div>
        <div className="bg-card rounded-3xl p-6 border card-border shadow-sm">
          <p className="text-sm font-semibold text-muted">Total amount</p>
          <p className="text-3xl font-bold text-default mt-2">₱605.00</p>
        </div>
        <div className="bg-card rounded-3xl p-6 border card-border shadow-sm">
          <p className="text-sm font-semibold text-muted">Average amount</p>
          <p className="text-3xl font-bold text-default mt-2">₱75.63</p>
        </div>
      </div>

      {/* Transactions Table */}
      <div className="bg-card rounded-lg border card-border overflow-hidden">
        <div className="p-6 border-b card-border">
          <h2 className="text-lg font-bold text-default">Transactions history</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-surface-soft border-b card-border">
                <th className="text-left text-xs font-semibold text-muted px-6 py-4">PAYMENT</th>
                <th className="text-left text-xs font-semibold text-muted px-6 py-4">REFERENCE NO</th>
                <th className="text-left text-xs font-semibold text-muted px-6 py-4">DATE</th>
                <th className="text-left text-xs font-semibold text-muted px-6 py-4">PAYMENT STATUS</th>
                <th className="text-right text-xs font-semibold text-muted px-6 py-4"></th>
              </tr>
            </thead>
            <tbody>
              {filteredPayments.map((payment) => (
                <tr key={payment.id} className="border-b border-surface-soft hover:bg-surface-soft">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-surface-soft rounded flex items-center justify-center text-xs font-semibold text-muted">₱</div>
                      <div>
                        <p className="font-semibold text-default">{payment.amount}</p>
                        <p className="text-xs text-muted">{payment.ref}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <Link href="/payments/transaction-details" className="text-sm font-medium text-accent hover:text-orange-600">{payment.ref}</Link>
                    <button className="mt-1 p-1 rounded-full hover:bg-surface-soft">
                      <Copy size={14} className="text-muted" />
                    </button>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-muted">{payment.date}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${payment.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' : payment.status === 'Executed' ? 'bg-emerald-100 text-emerald-700' : payment.status === 'Canceled' ? 'bg-red-100 text-red-700' : 'bg-surface-soft text-muted'}`}>
                      • {payment.status}
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

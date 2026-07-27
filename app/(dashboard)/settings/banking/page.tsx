'use client'

import { NotificationBanner } from '@/components/NotificationBanner'
import { ChevronLeft, Plus, MoreVertical } from 'lucide-react'
import Link from 'next/link'

const bankAccounts = [
  { id: 1, bankName: 'Security Bank', accountNumber: '****3456', accountHolder: 'DRL Solutions Inc', status: 'Verified', addedDate: 'Jan 15 2026' },
  { id: 2, bankName: 'BDO', accountNumber: '****7890', accountHolder: 'DRL Solutions Inc', status: 'Verified', addedDate: 'Feb 20 2026' },
  { id: 3, bankName: 'Metrobank', accountNumber: '****1234', accountHolder: 'DRL Solutions Inc', status: 'Pending', addedDate: 'Jul 10 2026' },
]

export default function BankingPage() {
  return (
    <div className="p-6 space-y-6">
      <NotificationBanner />

      <div className="flex items-center gap-3 mb-6">
        <Link href="/settings" className="text-muted hover:text-default transition">
          <ChevronLeft size={24} />
        </Link>
        <h1 className="text-3xl font-bold text-default">Banking Setup</h1>
      </div>

      <div className="bg-card rounded-3xl border card-border p-6 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-lg font-semibold text-default">Bank Accounts</h2>
            <p className="text-sm text-muted">{bankAccounts.length} accounts added</p>
          </div>
          <button className="flex items-center gap-2 rounded-full border card-border bg-card px-4 py-2 text-sm font-semibold text-default hover:bg-surface-soft">
            <Plus size={16} />
            Add Account
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px] text-left">
            <thead>
              <tr className="border-b card-border text-muted">
                <th className="py-4 px-4 text-xs uppercase tracking-[0.24em]">Bank</th>
                <th className="py-4 px-4 text-xs uppercase tracking-[0.24em]">Account Number</th>
                <th className="py-4 px-4 text-xs uppercase tracking-[0.24em]">Account Holder</th>
                <th className="py-4 px-4 text-xs uppercase tracking-[0.24em]">Added Date</th>
                <th className="py-4 px-4 text-xs uppercase tracking-[0.24em]">Status</th>
                <th className="py-4 px-4 text-xs uppercase tracking-[0.24em]">Action</th>
              </tr>
            </thead>
            <tbody>
              {bankAccounts.map((account) => (
                <tr key={account.id} className="border-b card-border hover:bg-surface-soft">
                  <td className="py-4 px-4 font-medium text-default">{account.bankName}</td>
                  <td className="py-4 px-4 text-sm text-muted font-mono">{account.accountNumber}</td>
                  <td className="py-4 px-4 text-sm text-muted">{account.accountHolder}</td>
                  <td className="py-4 px-4 text-sm text-muted">{account.addedDate}</td>
                  <td className="py-4 px-4">
                    <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                      account.status === 'Verified' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                    }`}>
                      {account.status}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <button className="text-muted hover:text-default transition">
                      <MoreVertical size={16} />
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

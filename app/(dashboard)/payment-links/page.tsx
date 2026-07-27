'use client'

import { NotificationBanner } from '@/components/NotificationBanner'
import { ChevronDown, Plus, Copy, Download } from 'lucide-react'

const paymentLinks = [
  { id: 1, name: 'Summer Sale 2026', link: 'https://pay.swiftpay.io/link-001', amount: '₱999.00', createdDate: 'Jul 15 2026', status: 'Active', scans: 142, conversions: 38 },
  { id: 2, name: 'Product Preorder', link: 'https://pay.swiftpay.io/link-002', amount: '₱2,500.00', createdDate: 'Jul 10 2026', status: 'Active', scans: 256, conversions: 71 },
  { id: 3, name: 'Event Ticket', link: 'https://pay.swiftpay.io/link-003', amount: '₱1,500.00', createdDate: 'Jul 5 2026', status: 'Expired', scans: 89, conversions: 12 },
  { id: 4, name: 'Service Fee', link: 'https://pay.swiftpay.io/link-004', amount: '₱500.00', createdDate: 'Jun 28 2026', status: 'Active', scans: 103, conversions: 45 },
]

export default function PaymentLinksPage() {
  return (
    <div className="p-6 space-y-6">
      <NotificationBanner />

      <div>
        <h1 className="text-3xl font-bold text-default mb-4">Payment Links</h1>
        <div className="flex flex-wrap items-center gap-3 text-sm text-muted">
          <span className="font-medium">Status:</span>
          <button className="flex items-center gap-1 rounded-full border card-border bg-card px-3 py-2 text-default shadow-sm transition hover:bg-surface-soft">
            <span>All</span>
            <ChevronDown size={16} />
          </button>
          <span className="text-muted">Active: 3 · Expired: 1</span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="bg-card rounded-3xl border card-border p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted">Active Links</p>
          <p className="mt-4 text-4xl font-semibold text-default">3</p>
          <p className="mt-2 text-sm text-muted">Currently active</p>
        </div>
        <div className="bg-card rounded-3xl border card-border p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted">Total Conversions</p>
          <p className="mt-4 text-4xl font-semibold text-default">166</p>
          <p className="mt-2 text-sm text-muted">All time payments</p>
        </div>
      </div>

      <div className="bg-card rounded-3xl border card-border p-6 shadow-sm">
        <div className="flex items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-lg font-semibold text-default">All links</h2>
            <p className="text-sm text-muted">Manage your payment links.</p>
          </div>
          <button className="flex items-center gap-2 rounded-full border card-border bg-card px-4 py-2 text-sm font-semibold text-default hover:bg-surface-soft">
            <Plus size={16} />
            New Link
          </button>
        </div>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[1000px] text-left">
            <thead>
              <tr className="border-b card-border text-muted">
                <th className="py-4 px-4 text-xs uppercase tracking-[0.24em]">Name</th>
                <th className="py-4 px-4 text-xs uppercase tracking-[0.24em]">Amount</th>
                <th className="py-4 px-4 text-xs uppercase tracking-[0.24em]">Created</th>
                <th className="py-4 px-4 text-xs uppercase tracking-[0.24em]">Scans</th>
                <th className="py-4 px-4 text-xs uppercase tracking-[0.24em]">Conversions</th>
                <th className="py-4 px-4 text-xs uppercase tracking-[0.24em]">Status</th>
                <th className="py-4 px-4 text-xs uppercase tracking-[0.24em]">Action</th>
              </tr>
            </thead>
            <tbody>
              {paymentLinks.map((link) => (
                <tr key={link.id} className="border-b card-border hover:bg-surface-soft">
                  <td className="py-4 px-4 font-medium text-default">{link.name}</td>
                  <td className="py-4 px-4 text-default font-medium">{link.amount}</td>
                  <td className="py-4 px-4 text-sm text-muted">{link.createdDate}</td>
                  <td className="py-4 px-4 text-default">{link.scans}</td>
                  <td className="py-4 px-4 text-default font-medium">{link.conversions}</td>
                  <td className="py-4 px-4">
                    <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                      link.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 'bg-surface-soft text-muted'
                    }`}>
                      {link.status}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <button className="text-primary hover:underline">
                      <Copy size={16} />
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

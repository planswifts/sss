'use client'

import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'

export default function TransactionDetailsPage() {
  return (
    <div className="p-6 space-y-6">
      <Link href="/payments" className="inline-flex items-center gap-2 px-3 py-2 rounded-full border card-border bg-card text-sm font-medium text-default hover:bg-surface-soft">
        <ChevronLeft size={18} /> Back to payments
      </Link>

      <div className="bg-card rounded-3xl border card-border p-6 shadow-sm">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-semibold text-default">Payment details</h1>
            <p className="text-sm text-muted">QRPH P2M</p>
          </div>
          <span className="rounded-full bg-emerald-100 text-emerald-700 px-3 py-1 text-sm font-semibold">Executed</span>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-muted">
          <div className="space-y-2">
            <p className="font-semibold text-default">Amount</p>
            <p>₱1.00</p>
          </div>
          <div className="space-y-2">
            <p className="font-semibold text-default">Reference</p>
            <p>MP-4faf40d9759c4fcd8adef1509c5a7a</p>
          </div>
          <div className="space-y-2">
            <p className="font-semibold text-default">Created on</p>
            <p>Jul 21 2026, 1:20 am</p>
          </div>
        </div>

        <div className="mt-8 border-t card-border pt-6">
          <h2 className="text-lg font-semibold text-default">Status timeline</h2>
          <div className="mt-4 space-y-4 text-sm text-muted">
            <div className="flex items-start gap-3">
              <div className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
              <div>
                <p className="font-semibold text-default">Executed</p>
                <p>Jul 21 2026, 1:21 am</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1 h-2 w-2 rounded-full bg-surface-soft" />
              <div>
                <p className="font-semibold text-default">Created</p>
                <p>Jul 21 2026, 1:20 am</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

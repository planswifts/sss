'use client'

import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'

export default function SendSingleDisbursementPage() {
  return (
    <div className="p-6 space-y-6">
      <Link href="/disbursements" className="inline-flex items-center gap-2 px-3 py-2 rounded-full border card-border bg-card text-sm font-medium text-default hover:bg-surface-soft">
        <ChevronLeft size={18} /> Back to disbursements
      </Link>

      <div className="bg-card rounded-3xl border card-border p-6 shadow-sm space-y-6">
        <div>
          <h1 className="text-3xl font-semibold text-default">Send single disbursement</h1>
          <p className="mt-2 text-sm text-muted">Complete this form to send funds to an individual recipient.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label className="text-sm font-semibold text-default">Recipient name</label>
            <input type="text" placeholder="Enter name" className="mt-2 w-full px-4 py-3 rounded-3xl border card-border bg-card text-default focus:border-accent focus:ring-2 focus:ring-orange-100" />
          </div>
          <div>
            <label className="text-sm font-semibold text-default">Amount</label>
            <input type="text" placeholder="₱0.00" className="mt-2 w-full px-4 py-3 rounded-3xl border card-border bg-card text-default focus:border-accent focus:ring-2 focus:ring-orange-100" />
          </div>
          <div className="md:col-span-2">
            <label className="text-sm font-semibold text-default">Payment method</label>
            <select className="mt-2 w-full px-4 py-3 rounded-3xl border card-border bg-card text-default focus:border-accent focus:ring-2 focus:ring-orange-100">
              <option>Bank transfer</option>
              <option>Maya</option>
              <option>GCash</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <label className="text-sm font-semibold text-default">Notes</label>
            <textarea rows={4} placeholder="Add a note..." className="mt-2 w-full px-4 py-3 rounded-3xl border card-border bg-card text-default focus:border-accent focus:ring-2 focus:ring-orange-100"></textarea>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <button className="px-5 py-3 rounded-lg bg-accent text-white text-sm font-semibold hover:bg-orange-600">Send disbursement</button>
          <button className="px-5 py-3 rounded-lg border card-border bg-card text-sm font-medium text-default hover:bg-surface-soft">Cancel</button>
        </div>
      </div>
    </div>
  )
}

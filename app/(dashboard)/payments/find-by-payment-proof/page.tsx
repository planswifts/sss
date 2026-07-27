'use client'

import { Search, FileSearch } from 'lucide-react'

export default function PaymentsFindByPaymentProofPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="bg-card rounded-3xl border card-border p-6 shadow-sm">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-semibold text-default">Find payments by payment proof</h1>
            <p className="mt-2 text-sm text-muted">Search by payment proof reference and view matching transactions.</p>
          </div>
          <button className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-accent text-white text-sm font-semibold hover:bg-orange-600">
            <FileSearch size={18} /> Search proof
          </button>
        </div>

        <div className="mt-6">
          <label className="block text-sm font-semibold text-default mb-2">Payment proof reference</label>
          <div className="relative">
            <Search size={18} className="absolute left-3 top-3 text-muted" />
            <input type="text" placeholder="Enter payment proof" className="w-full pl-10 pr-4 py-3 rounded-3xl border card-border bg-card text-default focus:border-accent focus:ring-2 focus:ring-orange-100" />
          </div>
        </div>

        <div className="mt-8 rounded-3xl border border-dashed border-surface-soft bg-surface-soft p-8 text-center text-muted">
          <p className="font-semibold text-default">No results found</p>
          <p className="mt-2 text-sm">Try adjusting your search or use different criteria to find what you’re looking for.</p>
        </div>
      </div>
    </div>
  )
}

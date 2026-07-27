'use client'

import { Search, CreditCard } from 'lucide-react'

export default function HomeFindByPaymentProofPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="bg-card rounded-3xl border card-border p-6 shadow-sm">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-semibold text-default">Search payment proof</h1>
            <p className="mt-2 text-sm text-muted">Find payment details quickly using the proof reference code.</p>
          </div>
          <button className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-accent text-white text-sm font-semibold hover:bg-orange-600">
            <CreditCard size={18} /> Start search
          </button>
        </div>

        <div className="mt-6 relative">
          <Search size={18} className="absolute left-3 top-3 text-muted" />
          <input type="text" placeholder="Search payment proof" className="w-full pl-10 pr-4 py-3 rounded-3xl border card-border bg-card text-default focus:border-accent focus:ring-2 focus:ring-orange-100" />
        </div>
      </div>
    </div>
  )
}

'use client'

import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'

export default function BankingSettingsPage() {
  return (
    <div className="p-6 space-y-6">
      <Link href="/settings" className="inline-flex items-center gap-2 px-3 py-2 rounded-full border card-border bg-card text-sm font-medium text-default hover:bg-surface-soft">
        <ChevronLeft size={18} /> Back to settings
      </Link>

      <div className="bg-card rounded-3xl border card-border p-6 shadow-sm space-y-6">
        <h1 className="text-3xl font-semibold text-default">Banking</h1>
        <p className="text-sm text-muted">Manage your bank accounts and payment methods.</p>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-default">Primary bank</label>
            <input type="text" defaultValue="Asia United Bank" className="w-full px-4 py-3 rounded-3xl border card-border bg-card text-default focus:border-accent focus:ring-2 focus:ring-orange-100" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-default">SWIFT code</label>
            <input type="text" defaultValue="AUBKPHMMXXX" className="w-full px-4 py-3 rounded-3xl border card-border bg-card text-default focus:border-accent focus:ring-2 focus:ring-orange-100" />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-default">Account number</label>
          <input type="text" defaultValue="934105321485" className="w-full px-4 py-3 rounded-3xl border card-border bg-card text-default focus:border-accent focus:ring-2 focus:ring-orange-100" />
        </div>

        <button className="px-5 py-3 rounded-lg bg-accent text-white text-sm font-semibold hover:bg-orange-600">Save banking settings</button>
      </div>
    </div>
  )
}

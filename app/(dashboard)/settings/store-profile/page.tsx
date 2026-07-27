'use client'

import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'

export default function StoreProfilePage() {
  return (
    <div className="p-6 space-y-6">
      <Link href="/settings" className="inline-flex items-center gap-2 px-3 py-2 rounded-full border card-border bg-card text-sm font-medium text-default hover:bg-surface-soft">
        <ChevronLeft size={18} /> Back to settings
      </Link>

      <div className="bg-card rounded-3xl border card-border p-6 shadow-sm">
        <h1 className="text-3xl font-semibold text-default">Store profile</h1>
        <p className="mt-2 text-sm text-muted">Personalize your online store with a unique shop name, custom URL, and the platform that best suits your business needs.</p>

        <div className="mt-8 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-default mb-2">Shop name</label>
              <input type="text" defaultValue="DRL Solutions" className="w-full px-4 py-3 rounded-3xl border card-border bg-card text-default focus:border-accent focus:ring-2 focus:ring-orange-100" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-default mb-2">Shop URL</label>
              <input type="text" defaultValue="https://drl-itsolutions.atoms.world/" className="w-full px-4 py-3 rounded-3xl border card-border bg-card text-default focus:border-accent focus:ring-2 focus:ring-orange-100" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-default mb-2">Platform</label>
              <select className="w-full px-4 py-3 rounded-3xl border card-border bg-card text-default focus:border-accent focus:ring-2 focus:ring-orange-100">
                <option>Custom</option>
                <option>Shopify</option>
                <option>WooCommerce</option>
              </select>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative inline-flex items-center rounded-full w-14 h-8 bg-surface-soft cursor-pointer">
                <span className="absolute left-1 w-6 h-6 rounded-full bg-card shadow transition-transform" />
              </div>
              <span className="text-sm text-muted">Receive daily stats email</span>
            </div>
            <button className="px-5 py-3 rounded-lg bg-accent text-white text-sm font-semibold hover:bg-orange-600">Save</button>
          </div>

          <div className="bg-surface-soft rounded-3xl border card-border p-6">
            <p className="text-sm font-semibold text-default mb-3">Store logo</p>
            <div className="rounded-2xl border card-border p-4 bg-card flex items-center justify-center">
              <img src="/logo.png" alt="Store logo" className="max-h-24 object-contain" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

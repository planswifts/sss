'use client'

import { NotificationBanner } from '@/components/NotificationBanner'
import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'

export default function StoreProfilePage() {
  return (
    <div className="p-6 space-y-6">
      <NotificationBanner />

      <div className="flex items-center gap-3 mb-6">
        <Link href="/settings" className="text-muted hover:text-default transition">
          <ChevronLeft size={24} />
        </Link>
        <h1 className="text-3xl font-bold text-default">Store Profile</h1>
      </div>

      <div className="bg-card rounded-3xl border card-border p-8 shadow-sm max-w-2xl">
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-default mb-2">Store Name</label>
            <input type="text" placeholder="DRL Solutions" className="w-full px-4 py-3 rounded-2xl border card-border bg-surface-soft focus:outline-none focus:ring-2 focus:ring-accent/20" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-default mb-2">Business Email</label>
            <input type="email" placeholder="contact@drlsolutions.com" className="w-full px-4 py-3 rounded-2xl border card-border bg-surface-soft focus:outline-none focus:ring-2 focus:ring-accent/20" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-default mb-2">Phone Number</label>
            <input type="tel" placeholder="+63 900 123 4567" className="w-full px-4 py-3 rounded-2xl border card-border bg-surface-soft focus:outline-none focus:ring-2 focus:ring-accent/20" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-default mb-2">Business Address</label>
            <textarea placeholder="123 Business St, Metro Manila" rows={3} className="w-full px-4 py-3 rounded-2xl border card-border bg-surface-soft focus:outline-none focus:ring-2 focus:ring-accent/20" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-default mb-2">Business Category</label>
            <select className="w-full px-4 py-3 rounded-2xl border card-border bg-surface-soft focus:outline-none focus:ring-2 focus:ring-accent/20">
              <option>Retail</option>
              <option>Services</option>
              <option>E-commerce</option>
              <option>Other</option>
            </select>
          </div>
          <div className="flex gap-3 pt-4">
            <button type="submit" className="flex-1 px-6 py-3 rounded-2xl bg-accent text-white font-semibold hover:opacity-90 transition">
              Save Changes
            </button>
            <Link href="/settings" className="flex-1 px-6 py-3 rounded-2xl border card-border text-default font-semibold hover:bg-surface-soft transition text-center">
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

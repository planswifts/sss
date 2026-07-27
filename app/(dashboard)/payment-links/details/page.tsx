'use client'

import Link from 'next/link'
import { Copy, ChevronLeft } from 'lucide-react'

export default function PaymentLinkDetailsPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/payment-links" className="inline-flex items-center gap-2 px-3 py-2 rounded-full border card-border bg-card text-sm font-medium text-default hover:bg-surface-soft">
          <ChevronLeft size={18} /> Back
        </Link>
      </div>

      <div className="bg-card rounded-3xl border card-border p-6 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="text-4xl font-semibold text-default">₱100.00</div>
          <span className="rounded-full bg-surface-soft text-muted px-3 py-1 text-sm font-semibold">Active</span>
        </div>
        <p className="text-sm text-muted mt-2">try</p>

        <div className="mt-8 grid grid-cols-3 gap-6 text-sm text-muted">
          <div className="space-y-2">
            <p className="font-semibold text-default">Code</p>
            <p>E3Z4</p>
          </div>
          <div className="space-y-2">
            <p className="font-semibold text-default">Created on</p>
            <p>Jul 19 2026, 2:49 pm</p>
          </div>
          <div className="space-y-2">
            <p className="font-semibold text-default">Valid until</p>
            <p>Jul 21 2026, 11:59 pm</p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-3 gap-6 text-sm text-muted">
          <div className="space-y-2">
            <p className="font-semibold text-default">Description</p>
            <p>-</p>
          </div>
          <div className="space-y-2">
            <p className="font-semibold text-default">Order number</p>
            <p>-</p>
          </div>
          <div className="space-y-2">
            <p className="font-semibold text-default">Payor</p>
            <p>-</p>
          </div>
        </div>

        <div className="mt-6 p-4 rounded-lg border card-border bg-surface-soft flex items-center justify-between gap-4">
          <p className="text-sm text-muted">https://link.live.swiftpay.ph/E3Z4</p>
          <button className="inline-flex items-center gap-2 px-4 py-2 rounded-full border card-border bg-card text-sm font-semibold text-default hover:bg-surface-soft">
            <Copy size={16} /> Copy link
          </button>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <button className="px-4 py-3 rounded-lg border card-border bg-card text-sm font-medium text-default hover:bg-surface-soft">Copy link</button>
          <button className="px-4 py-3 rounded-lg bg-accent text-white text-sm font-medium hover:bg-orange-600">Deactivate link</button>
        </div>
      </div>

      <div className="bg-card rounded-3xl border card-border p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-default">Payment history</h2>
        <div className="mt-6 border-t card-border pt-6 space-y-4">
          <div className="grid grid-cols-4 gap-6 text-sm text-muted items-center">
            <div>
              <p className="font-semibold text-default">₱100.00</p>
              <p className="text-xs text-muted">-</p>
            </div>
            <div>
              <p className="font-semibold text-default">E3Z4</p>
            </div>
            <div>
              <p className="text-muted">Created on: Jul 19 2026, 2:49 pm</p>
              <p className="text-muted">Executed on: -</p>
            </div>
            <div>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-surface-soft text-muted text-xs">Expired</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

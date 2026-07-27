'use client'

import Link from 'next/link'
import { ChevronLeft, Download, Upload } from 'lucide-react'

export default function BatchDisbursementPage() {
  return (
    <div className="p-6 space-y-6">
      <Link href="/disbursements" className="inline-flex items-center gap-2 px-3 py-2 rounded-full border card-border bg-card text-sm font-medium text-default hover:bg-surface-soft">
        <ChevronLeft size={18} /> Back to disbursements
      </Link>

      <div className="grid gap-6 xl:grid-cols-[1.4fr_0.6fr]">
        <div className="bg-card rounded-3xl border card-border p-6 shadow-sm">
          <h1 className="text-3xl font-semibold text-default">New batch disbursement</h1>
          <p className="mt-2 text-sm text-muted">Upload a file with your new batch disbursement.</p>

          <div className="mt-8 space-y-6">
            <div>
              <label className="block text-sm font-semibold text-default mb-2">Batch disbursement name</label>
              <input type="text" placeholder="e.g. My New Batch Disbursement #1" className="w-full px-4 py-3 rounded-3xl border card-border bg-card text-default focus:border-accent focus:ring-2 focus:ring-orange-100" />
            </div>

            <div className="border border-dashed border-surface-soft rounded-3xl p-8 text-center bg-surface-soft">
              <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-surface-soft flex items-center justify-center text-muted">
                <Upload size={28} />
              </div>
              <p className="font-semibold text-default">Click to upload</p>
              <p className="mt-2 text-sm text-muted">or drag and drop</p>
              <p className="mt-1 text-xs text-muted">CSV format only (max of 10 MB)</p>
            </div>

            <button className="px-5 py-3 rounded-lg bg-accent text-white text-sm font-semibold hover:bg-orange-600">
              Import
            </button>
          </div>
        </div>

        <div className="bg-card rounded-3xl border card-border p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-default">File rules</h2>
            <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border card-border bg-card text-sm font-semibold text-default hover:bg-surface-soft">
              <Download size={16} /> Download sample
            </button>
          </div>
          <div className="space-y-3 text-sm text-muted">
            <p className="text-muted">Please follow these guidelines when uploading your CSV file.</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Merchant reference no</li>
              <li>SWIFT code of recipient's bank</li>
              <li>Recipient account number</li>
              <li>Transfer amount</li>
              <li>Recipient name</li>
              <li>Recipient address (optional)</li>
              <li>Remarks</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

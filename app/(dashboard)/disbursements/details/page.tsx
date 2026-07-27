'use client'

import Link from 'next/link'
import { ChevronLeft, Download } from 'lucide-react'

export default function DisbursementDetailsPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between gap-4">
        <Link href="/disbursements" className="inline-flex items-center gap-2 px-3 py-2 rounded-full border card-border bg-card text-sm font-medium text-default hover:bg-surface-soft">
          <ChevronLeft size={18} /> Back
        </Link>
        <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-white text-sm font-semibold hover:bg-orange-600">
          <Download size={16} /> Download confirmation
        </button>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">
        <div className="bg-card rounded-3xl border card-border p-6 shadow-sm">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-semibold text-default">Disbursement details</h1>
              <p className="text-sm text-muted">InstaPay • ASIA UNITED BANK (AUBKPHMMXXX)</p>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 text-emerald-700 px-3 py-1 text-sm font-semibold">
              • Executed
            </span>
          </div>

          <div className="mt-8 space-y-6">
            <div className="space-y-3">
              <p className="font-semibold text-default">History</p>
              <div className="space-y-4">
                <div className="flex items-start gap-3 text-sm text-muted">
                  <div className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                  <div>
                    <p className="font-semibold text-default">Disbursement settled</p>
                    <p>Jul 18 2026, 10:22 PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-sm text-muted">
                  <div className="mt-1 h-2 w-2 rounded-full bg-surface-soft" />
                  <div>
                    <p className="font-semibold text-default">Disbursement registered</p>
                    <p>Jul 18 2026, 10:22 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <p className="font-semibold text-default">Disbursement breakdown</p>
              <div className="grid gap-2 text-sm text-muted">
                <div className="flex justify-between border-b card-border py-2">
                  <span>Amount</span>
                  <span>₱2,983.00</span>
                </div>
                <div className="flex justify-between border-b card-border py-2">
                  <span>Commission</span>
                  <span>₱10.00</span>
                </div>
                <div className="flex justify-between py-2 font-semibold text-default">
                  <span>Total amount</span>
                  <span>₱2,993.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-3xl border card-border p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-default mb-4">Details</h2>
          <div className="space-y-4 text-sm text-muted">
            <div>
              <p className="font-semibold text-default">Disbursement ID</p>
              <p className="flex items-center gap-2">019f759b-5ba6-d77d-564d-91dd5edc274d <span className="text-muted">📋</span></p>
            </div>
            <div>
              <p className="font-semibold text-default">Short ID</p>
              <p className="flex items-center gap-2">dd5edc274d <span className="text-muted">📋</span></p>
            </div>
            <div>
              <p className="font-semibold text-default">Destination</p>
              <p>InstaPay • ASIA UNITED BANK (AUBKPHMMXXX)</p>
            </div>
            <div>
              <p className="font-semibold text-default">Merchant reference number</p>
              <p className="flex items-center gap-2">934105321485 <span className="text-muted">📋</span></p>
            </div>
            <div>
              <p className="font-semibold text-default">Channel reference number</p>
              <p>202619900195553</p>
            </div>
            <div>
              <p className="font-semibold text-default">Recipient name</p>
              <p>Den Russell Leonardo</p>
            </div>
            <div>
              <p className="font-semibold text-default">Recipient account number</p>
              <p>934105321485</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

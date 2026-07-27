'use client'

import { NotificationBanner } from '@/components/NotificationBanner'
import { ChevronDown, Download, BarChart3 } from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const reportData = [
  { month: 'Jan', payments: 65000, disbursements: 28000 },
  { month: 'Feb', payments: 59000, disbursements: 32000 },
  { month: 'Mar', payments: 72000, disbursements: 35000 },
  { month: 'Apr', payments: 68000, disbursements: 30000 },
  { month: 'May', payments: 81000, disbursements: 42000 },
  { month: 'Jun', payments: 89000, disbursements: 45000 },
  { month: 'Jul', payments: 95000, disbursements: 48000 },
]

export default function ReportsPage() {
  return (
    <div className="p-6 space-y-6">
      <NotificationBanner />

      <div>
        <h1 className="text-3xl font-bold text-default mb-4">Reports</h1>
        <div className="flex flex-wrap items-center gap-3 text-sm text-muted">
          <span className="font-medium">Period:</span>
          <button className="flex items-center gap-1 rounded-full border card-border bg-card px-3 py-2 text-default shadow-sm transition hover:bg-surface-soft">
            <span>Last 12 months</span>
            <ChevronDown size={16} />
          </button>
          <span className="text-muted">Generated today</span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="bg-card rounded-3xl border card-border p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted">Total Volume</p>
          <p className="mt-4 text-4xl font-semibold text-default">₱629,000</p>
          <p className="mt-2 text-sm text-muted">All transactions</p>
        </div>
        <div className="bg-card rounded-3xl border card-border p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted">Avg. Monthly</p>
          <p className="mt-4 text-4xl font-semibold text-default">₱89,857</p>
          <p className="mt-2 text-sm text-muted">7 months average</p>
        </div>
        <div className="bg-card rounded-3xl border card-border p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted">Growth Rate</p>
          <p className="mt-4 text-4xl font-semibold text-default">+46%</p>
          <p className="mt-2 text-sm text-muted">YoY increase</p>
        </div>
      </div>

      <div className="bg-card rounded-3xl border card-border p-6 shadow-sm">
        <div className="flex items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-lg font-semibold text-default">Monthly trends</h2>
            <p className="text-sm text-muted">Payment and disbursement volume.</p>
          </div>
          <button className="flex items-center gap-2 rounded-full border card-border bg-card px-4 py-2 text-sm font-semibold text-default hover:bg-surface-soft">
            <Download size={16} />
            Download
          </button>
        </div>

        <div className="mt-6 h-[320px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={reportData} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="month" stroke="#64748b" tickLine={false} />
              <YAxis stroke="#64748b" tickLine={false} />
              <Tooltip formatter={(value: number) => `₱${value.toLocaleString()}`} />
              <Legend />
              <Bar dataKey="payments" fill="#f97316" radius={[8, 8, 0, 0]} />
              <Bar dataKey="disbursements" fill="#38bdf8" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-card rounded-3xl border card-border p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-default mb-4">Report summary</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-3 border-b card-border">
              <span className="text-muted">Total Payments</span>
              <span className="font-semibold text-default">₱589,000</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b card-border">
              <span className="text-muted">Total Disbursements</span>
              <span className="font-semibold text-default">₱240,000</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b card-border">
              <span className="text-muted">Processing Fees</span>
              <span className="font-semibold text-default">₱2,945</span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-3 border-b card-border">
              <span className="text-muted">Avg Transaction Value</span>
              <span className="font-semibold text-default">₱8,414</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b card-border">
              <span className="text-muted">Transaction Count</span>
              <span className="font-semibold text-default">347</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b card-border">
              <span className="text-muted">Success Rate</span>
              <span className="font-semibold text-emerald-600">98.3%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

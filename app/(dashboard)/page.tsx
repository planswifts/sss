'use client'

import { NotificationBanner } from '@/components/NotificationBanner'
import { AreaChart, Area, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { ChevronDown } from 'lucide-react'

const chartData = [
  { name: 'Tue', Payments: 112500, Disbursements: 42000 },
  { name: 'Wed', Payments: 98000, Disbursements: 36000 },
  { name: 'Thu', Payments: 134200, Disbursements: 48000 },
  { name: 'Fri', Payments: 165400, Disbursements: 52000 },
  { name: 'Sat', Payments: 143900, Disbursements: 47000 },
  { name: 'Sun', Payments: 98000, Disbursements: 26000 },
  { name: 'Mon', Payments: 156700, Disbursements: 39000 },
]

const pieData = [
  { name: 'QRPH P2M', value: 58 },
  { name: 'Bank transfer', value: 28 },
  { name: 'E-wallet', value: 14 },
]

const transactions = [
  { id: 1, reference: 'MP-2026-001', channel: 'QRPH P2M', date: 'Jul 21 2026, 1:20 pm', status: 'Pending', amount: '₱204.00' },
  { id: 2, reference: 'MP-2026-042', channel: 'Security Bank • QRPH P2M', date: 'Jul 21 2026, 1:11 am', status: 'Executed', amount: '₱1,204.00' },
  { id: 3, reference: 'MP-2026-031', channel: 'GCash', date: 'Jul 20 2026, 9:42 pm', status: 'Executed', amount: '₱6,560.00' },
  { id: 4, reference: 'MP-2026-018', channel: 'PayMaya', date: 'Jul 19 2026, 10:30 pm', status: 'Expired', amount: '₱100.00' },
  { id: 5, reference: 'MP-2026-012', channel: 'Bank transfer', date: 'Jul 18 2026, 9:30 pm', status: 'Canceled', amount: '₱2,350.00' },
]

export default function DashboardPage() {
  return (
    <div className="p-6 space-y-6">
      <NotificationBanner />

      <div>
        <h1 className="text-3xl font-bold text-default mb-4">DRL Solutions</h1>
        <div className="flex flex-wrap items-center gap-3 text-sm text-muted">
          <span className="font-medium">Range:</span>
          <button className="flex items-center gap-1 rounded-full border card-border bg-card px-3 py-2 text-default shadow-sm transition hover:bg-surface-soft">
            <span>Last 7 days</span>
            <ChevronDown size={16} />
          </button>
          <span className="text-muted">Updated 5 minutes ago</span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div className="bg-card rounded-3xl border card-border p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted">Payments</p>
          <p className="mt-4 text-4xl font-semibold text-default">₱763,700</p>
          <p className="mt-2 text-sm text-muted">145 successful payments</p>
        </div>
        <div className="bg-card rounded-3xl border card-border p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted">Disbursements</p>
          <p className="mt-4 text-4xl font-semibold text-default">₱221,400</p>
          <p className="mt-2 text-sm text-muted">34 completed transfers</p>
        </div>
        <div className="bg-card rounded-3xl border card-border p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted">Conversion mix</p>
          <div className="mt-4 h-32">
            <ResponsiveContainer width="100%" height={120}>
              <PieChart>
                <Pie data={pieData} cx="50%" cy="50%" innerRadius={32} outerRadius={58} paddingAngle={2} dataKey="value">
                  {pieData.map((entry, index) => (
                    <Cell key={entry.name} fill={['#fb923c', '#38bdf8', '#f472b6'][index]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3 text-sm text-muted">
            {pieData.map((item, index) => (
              <div key={item.name} className="rounded-2xl bg-surface-soft p-3">
                <p className="font-semibold text-default">{item.name}</p>
                <p>{item.value}%</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-card rounded-3xl border card-border p-6 shadow-sm">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-lg font-semibold text-default">Transaction volume</h2>
            <p className="text-sm text-muted">Live volume for the selected period.</p>
          </div>
          <span className="inline-flex items-center rounded-full bg-surface-soft px-3 py-1 text-sm font-semibold text-default">+8.2% vs last 7 days</span>
        </div>
        <div className="mt-6 h-[320px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>
              <defs>
                <linearGradient id="colorPayments" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f97316" stopOpacity={0.28} />
                  <stop offset="95%" stopColor="#f97316" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorDisbursements" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#38bdf8" stopOpacity={0.28} />
                  <stop offset="95%" stopColor="#38bdf8" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="name" stroke="#64748b" tickLine={false} />
              <YAxis stroke="#64748b" tickLine={false} />
              <Tooltip formatter={(value: number) => `₱${value.toLocaleString()}`} />
              <Legend />
              <Area type="monotone" dataKey="Payments" stroke="#f97316" fill="url(#colorPayments)" strokeWidth={3} />
              <Area type="monotone" dataKey="Disbursements" stroke="#38bdf8" fill="url(#colorDisbursements)" strokeWidth={3} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-card rounded-3xl border card-border p-6 shadow-sm">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-semibold text-default">Recent activity</h2>
            <p className="text-sm text-muted">Latest transactions and payment statuses.</p>
          </div>
          <button className="rounded-full border card-border bg-card px-4 py-2 text-sm font-semibold text-default hover:bg-surface-soft">View all</button>
        </div>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[720px] text-left">
            <thead>
              <tr className="border-b card-border text-muted">
                <th className="py-4 px-4 text-xs uppercase tracking-[0.24em]">Reference</th>
                <th className="py-4 px-4 text-xs uppercase tracking-[0.24em]">Channel</th>
                <th className="py-4 px-4 text-xs uppercase tracking-[0.24em]">Date</th>
                <th className="py-4 px-4 text-xs uppercase tracking-[0.24em]">Amount</th>
                <th className="py-4 px-4 text-xs uppercase tracking-[0.24em]">Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx) => (
                <tr key={tx.id} className="border-b card-border hover:bg-surface-soft">
                  <td className="py-4 px-4 font-medium text-default">{tx.reference}</td>
                  <td className="py-4 px-4 text-muted">{tx.channel}</td>
                  <td className="py-4 px-4 text-muted">{tx.date}</td>
                  <td className="py-4 px-4 text-default">{tx.amount}</td>
                  <td className="py-4 px-4">
                    <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                      tx.status === 'Executed' ? 'bg-emerald-100 text-emerald-700' : tx.status === 'Pending' ? 'bg-amber-100 text-amber-700' : 'bg-surface-soft text-muted'
                    }`}>
                      {tx.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

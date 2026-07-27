'use client'

import { NotificationBanner } from '@/components/NotificationBanner'
import { ChevronLeft, Plus, Copy, Eye, EyeOff } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

const apiKeys = [
  { id: 1, name: 'Production Key', key: 'pk_live_51234567890abcdef', createdDate: 'Jan 15 2026', status: 'Active', lastUsed: 'Jul 21 2026, 2:15 pm' },
  { id: 2, name: 'Development Key', key: 'pk_test_0987654321fedcba', createdDate: 'Feb 20 2026', status: 'Active', lastUsed: 'Jul 20 2026, 10:30 am' },
]

const webhooks = [
  { id: 1, endpoint: 'https://yoursite.com/webhooks/payment', events: 'payment.completed', status: 'Active', lastTriggered: 'Jul 21 2026, 1:45 pm' },
  { id: 2, endpoint: 'https://yoursite.com/webhooks/disbursement', events: 'disbursement.sent', status: 'Active', lastTriggered: 'Jul 20 2026, 3:20 pm' },
]

export default function ApiIntegrationPage() {
  const [showKeys, setShowKeys] = useState<{[key: number]: boolean}>({})

  return (
    <div className="p-6 space-y-6">
      <NotificationBanner />

      <div className="flex items-center gap-3 mb-6">
        <Link href="/settings" className="text-muted hover:text-default transition">
          <ChevronLeft size={24} />
        </Link>
        <h1 className="text-3xl font-bold text-default">API Integration</h1>
      </div>

      <div className="bg-card rounded-3xl border card-border p-6 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-lg font-semibold text-default">API Keys</h2>
            <p className="text-sm text-muted">Manage your API credentials</p>
          </div>
          <button className="flex items-center gap-2 rounded-full border card-border bg-card px-4 py-2 text-sm font-semibold text-default hover:bg-surface-soft">
            <Plus size={16} />
            Generate Key
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px] text-left">
            <thead>
              <tr className="border-b card-border text-muted">
                <th className="py-4 px-4 text-xs uppercase tracking-[0.24em]">Name</th>
                <th className="py-4 px-4 text-xs uppercase tracking-[0.24em]">Key</th>
                <th className="py-4 px-4 text-xs uppercase tracking-[0.24em]">Created</th>
                <th className="py-4 px-4 text-xs uppercase tracking-[0.24em]">Last Used</th>
                <th className="py-4 px-4 text-xs uppercase tracking-[0.24em]">Status</th>
                <th className="py-4 px-4 text-xs uppercase tracking-[0.24em]">Action</th>
              </tr>
            </thead>
            <tbody>
              {apiKeys.map((apiKey) => (
                <tr key={apiKey.id} className="border-b card-border hover:bg-surface-soft">
                  <td className="py-4 px-4 font-medium text-default">{apiKey.name}</td>
                  <td className="py-4 px-4 text-sm text-muted font-mono flex items-center gap-2">
                    {showKeys[apiKey.id] ? apiKey.key : '••••••••••••••••'}
                    <button onClick={() => setShowKeys({...showKeys, [apiKey.id]: !showKeys[apiKey.id]})} className="text-muted hover:text-default">
                      {showKeys[apiKey.id] ? <EyeOff size={14} /> : <Eye size={14} />}
                    </button>
                  </td>
                  <td className="py-4 px-4 text-sm text-muted">{apiKey.createdDate}</td>
                  <td className="py-4 px-4 text-sm text-muted">{apiKey.lastUsed}</td>
                  <td className="py-4 px-4">
                    <span className="inline-flex rounded-full px-3 py-1 text-xs font-semibold bg-emerald-100 text-emerald-700">
                      {apiKey.status}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <button className="text-primary hover:underline text-sm font-semibold">
                      Copy
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-card rounded-3xl border card-border p-6 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-lg font-semibold text-default">Webhooks</h2>
            <p className="text-sm text-muted">Configure event notifications</p>
          </div>
          <button className="flex items-center gap-2 rounded-full border card-border bg-card px-4 py-2 text-sm font-semibold text-default hover:bg-surface-soft">
            <Plus size={16} />
            Add Webhook
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px] text-left">
            <thead>
              <tr className="border-b card-border text-muted">
                <th className="py-4 px-4 text-xs uppercase tracking-[0.24em]">Endpoint</th>
                <th className="py-4 px-4 text-xs uppercase tracking-[0.24em]">Events</th>
                <th className="py-4 px-4 text-xs uppercase tracking-[0.24em]">Last Triggered</th>
                <th className="py-4 px-4 text-xs uppercase tracking-[0.24em]">Status</th>
              </tr>
            </thead>
            <tbody>
              {webhooks.map((webhook) => (
                <tr key={webhook.id} className="border-b card-border hover:bg-surface-soft">
                  <td className="py-4 px-4 text-sm text-muted font-mono">{webhook.endpoint}</td>
                  <td className="py-4 px-4 text-sm text-muted">{webhook.events}</td>
                  <td className="py-4 px-4 text-sm text-muted">{webhook.lastTriggered}</td>
                  <td className="py-4 px-4">
                    <span className="inline-flex rounded-full px-3 py-1 text-xs font-semibold bg-emerald-100 text-emerald-700">
                      {webhook.status}
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

'use client'

import Link from 'next/link'
import { NotificationBanner } from '@/components/NotificationBanner'
import { ChevronRight } from 'lucide-react'

export default function SettingsPage() {
  return (
    <div className="p-6 space-y-6">
      <NotificationBanner />

      <div className="mb-6">
        <h1 className="text-3xl font-bold text-default">Settings</h1>
      </div>

      {/* Settings Sections */}
      <div className="space-y-4">
        <Link href="/settings/store-profile" className="block bg-card rounded-lg border card-border p-6 hover:bg-surface-soft transition">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-default">Store Profile</h3>
              <p className="text-sm text-muted mt-1">Manage your store information and branding</p>
            </div>
            <ChevronRight size={24} className="text-muted" />
          </div>
        </Link>

        <Link href="/settings/banking" className="block bg-card rounded-lg border card-border p-6 hover:bg-surface-soft transition">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-default">Banking</h3>
              <p className="text-sm text-muted mt-1">Manage your bank accounts and payment methods</p>
            </div>
            <ChevronRight size={24} className="text-muted" />
          </div>
        </Link>

        <Link href="/settings/team" className="block bg-card rounded-lg border card-border p-6 hover:bg-surface-soft transition">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-default">Team</h3>
              <p className="text-sm text-muted mt-1">Manage team members and permissions</p>
            </div>
            <ChevronRight size={24} className="text-muted" />
          </div>
        </Link>

        <Link href="/settings/api-integration" className="block bg-card rounded-lg border card-border p-6 hover:bg-surface-soft transition">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-default">API Integration</h3>
              <p className="text-sm text-muted mt-1">Manage API keys and integrations</p>
            </div>
            <ChevronRight size={24} className="text-muted" />
          </div>
        </Link>
      </div>
    </div>
  )
}

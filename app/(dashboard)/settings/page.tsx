'use client'

import { NotificationBanner } from '@/components/NotificationBanner'
import { ChevronRight, Lock, Users, CreditCard, Code } from 'lucide-react'
import Link from 'next/link'

const settingsMenus = [
  { label: 'Store Profile', description: 'Update your business information', icon: CreditCard, href: '/settings/store-profile' },
  { label: 'Team', description: 'Manage team members and roles', icon: Users, href: '/settings/team' },
  { label: 'Banking', description: 'Configure bank accounts', icon: Lock, href: '/settings/banking' },
  { label: 'API Integration', description: 'Manage API keys and webhooks', icon: Code, href: '/settings/api-integration' },
]

export default function SettingsPage() {
  return (
    <div className="p-6 space-y-6">
      <NotificationBanner />

      <div>
        <h1 className="text-3xl font-bold text-default mb-4">Settings</h1>
        <p className="text-sm text-muted">Manage your account and platform preferences.</p>
      </div>

      <div className="space-y-3">
        {settingsMenus.map((menu) => {
          const Icon = menu.icon
          return (
            <Link
              key={menu.href}
              href={menu.href}
              className="bg-card rounded-3xl border card-border p-6 shadow-sm hover:bg-surface-soft transition flex items-center justify-between group"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-surface-soft group-hover:bg-card transition">
                  <Icon size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-default">{menu.label}</h3>
                  <p className="text-sm text-muted">{menu.description}</p>
                </div>
              </div>
              <ChevronRight size={20} className="text-muted group-hover:text-default transition" />
            </Link>
          )
        })}
      </div>
    </div>
  )
}

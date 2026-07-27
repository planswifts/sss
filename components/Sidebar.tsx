'use client'

import { Home, CheckSquare, DollarSign, Link as LinkIcon, Send, PieChart, Settings, LogOut, ChevronLeft, ChevronRight, ToggleLeft } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const navItems = [
  { label: 'Home', href: '/', icon: Home, section: 'MAIN' },
  { label: 'Approvals', href: '/approvals', icon: CheckSquare, section: 'MAIN' },
  { label: 'Payments', href: '/payments', icon: DollarSign, section: 'TRANSACTIONS' },
  { label: 'Payment Links', href: '/payment-links', icon: LinkIcon, section: 'TRANSACTIONS' },
  { label: 'Disbursements', href: '/disbursements', icon: Send, section: 'TRANSACTIONS' },
  { label: 'Reports', href: '/reports', icon: PieChart, section: 'INSIGHTS' },
  { label: 'Settings', href: '/settings', icon: Settings, section: 'SYSTEM' },
]

export function Sidebar() {
  const pathname = usePathname()
  const [isCollapsed, setIsCollapsed] = useState(false)

  const isActive = (path: string) => pathname === path || pathname?.startsWith(path + '/')

  return (
    <div className={`${isCollapsed ? 'w-20' : 'w-56'} bg-sidebar text-on-dark min-h-screen transition-all duration-300 flex flex-col border-r card-border`}>
      <div className="p-5 border-b border-slate-900 flex items-center justify-between gap-3">
        <div className={`flex items-center gap-3 ${isCollapsed ? 'justify-center w-full' : ''}`}>
          <div className="w-10 h-10 rounded-2xl accent-bg shadow-lg flex items-center justify-center">
            <span className="text-sm font-bold text-white">SP</span>
          </div>
          {!isCollapsed && (
            <div>
              <p className="text-sm font-semibold text-on-dark">SwiftPay</p>
              <p className="text-xs uppercase tracking-[0.24em] text-muted">Merchant Portal</p>
            </div>
          )}
        </div>
        <button onClick={() => setIsCollapsed(!isCollapsed)} className="p-2 rounded-lg bg-sidebar hover:opacity-90 transition">
          {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-4">
        {['MAIN', 'TRANSACTIONS', 'INSIGHTS', 'SYSTEM'].map((section) => (
          <div key={section} className="space-y-2">
            {!isCollapsed && <p className="px-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-muted">{section}</p>}
            <div className="space-y-1">
              {navItems.filter((item) => item.section === section).map((item) => {
                const Icon = item.icon
                const active = isActive(item.href)
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`group flex items-center gap-3 rounded-2xl px-3 py-3 text-sm transition ${
                      active
                        ? 'bg-orange-500/10 text-orange-300 ring-1 ring-orange-500/20'
                        : 'text-muted hover:opacity-95'
                    }`}
                  >
                    <Icon size={18} className={active ? 'text-accent' : 'text-muted group-hover:text-on-dark'} />
                    {!isCollapsed && <span className="font-medium">{item.label}</span>}
                  </Link>
                )
              })}
            </div>
          </div>
        ))}
      </nav>

      <div className="px-4 pb-5 pt-4 border-t card-border">
        <div className="flex items-center justify-between gap-2 rounded-3xl bg-sidebar px-4 py-3 text-xs text-muted">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span>Live</span>
          </div>
          {!isCollapsed && <span>v1.0</span>}
        </div>
        <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl border card-border bg-sidebar px-3 py-3 text-sm text-muted hover:opacity-95 transition">
          <LogOut size={18} />
          {!isCollapsed && 'Logout'}
        </button>
      </div>
    </div>
  )
}

'use client'

import { ChevronDown, HelpCircle } from 'lucide-react'
import { useState } from 'react'

export function TopBar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="bg-card border-b card-border px-6 py-4 flex items-center justify-between shadow-sm">
      <div className="flex items-center gap-4">
        <div className="text-sm text-muted font-semibold">
          DRL Solutions <ChevronDown size={16} className="inline ml-1" />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="p-2 rounded-lg transition hover:bg-slate-100">
          <HelpCircle size={20} className="text-muted" />
        </button>
        <div className="w-10 h-10 rounded-full bg-slate-200" />
      </div>
    </div>
  )
}

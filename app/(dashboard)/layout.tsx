'use client'

import { Sidebar } from '@/components/Sidebar'
import { TopBar } from '@/components/TopBar'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen bg-app text-default">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <TopBar />
        <div className="flex-1 bg-app">
          {children}
        </div>
      </div>
    </div>
  )
}

'use client'

import { NotificationBanner } from '@/components/NotificationBanner'
import { ChevronLeft, Plus, MoreVertical, Trash2 } from 'lucide-react'
import Link from 'next/link'

const teamMembers = [
  { id: 1, name: 'You', email: 'admin@drlsolutions.com', role: 'Owner', joinedDate: 'Jan 1 2026', status: 'Active' },
  { id: 2, name: 'John Doe', email: 'john@drlsolutions.com', role: 'Manager', joinedDate: 'Feb 15 2026', status: 'Active' },
  { id: 3, name: 'Jane Smith', email: 'jane@drlsolutions.com', role: 'Editor', joinedDate: 'Mar 10 2026', status: 'Active' },
  { id: 4, name: 'Mike Johnson', email: 'mike@drlsolutions.com', role: 'Viewer', joinedDate: 'Apr 5 2026', status: 'Pending' },
]

export default function TeamPage() {
  return (
    <div className="p-6 space-y-6">
      <NotificationBanner />

      <div className="flex items-center gap-3 mb-6">
        <Link href="/settings" className="text-muted hover:text-default transition">
          <ChevronLeft size={24} />
        </Link>
        <h1 className="text-3xl font-bold text-default">Team Management</h1>
      </div>

      <div className="bg-card rounded-3xl border card-border p-6 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-lg font-semibold text-default">Team Members</h2>
            <p className="text-sm text-muted">{teamMembers.length} members in your team</p>
          </div>
          <button className="flex items-center gap-2 rounded-full border card-border bg-card px-4 py-2 text-sm font-semibold text-default hover:bg-surface-soft">
            <Plus size={16} />
            Invite
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px] text-left">
            <thead>
              <tr className="border-b card-border text-muted">
                <th className="py-4 px-4 text-xs uppercase tracking-[0.24em]">Name</th>
                <th className="py-4 px-4 text-xs uppercase tracking-[0.24em]">Email</th>
                <th className="py-4 px-4 text-xs uppercase tracking-[0.24em]">Role</th>
                <th className="py-4 px-4 text-xs uppercase tracking-[0.24em]">Joined</th>
                <th className="py-4 px-4 text-xs uppercase tracking-[0.24em]">Status</th>
                <th className="py-4 px-4 text-xs uppercase tracking-[0.24em]">Action</th>
              </tr>
            </thead>
            <tbody>
              {teamMembers.map((member) => (
                <tr key={member.id} className="border-b card-border hover:bg-surface-soft">
                  <td className="py-4 px-4 font-medium text-default">{member.name}</td>
                  <td className="py-4 px-4 text-sm text-muted">{member.email}</td>
                  <td className="py-4 px-4 text-sm text-muted">{member.role}</td>
                  <td className="py-4 px-4 text-sm text-muted">{member.joinedDate}</td>
                  <td className="py-4 px-4">
                    <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                      member.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                    }`}>
                      {member.status}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <button className="text-muted hover:text-default transition" disabled={member.id === 1}>
                      <MoreVertical size={16} />
                    </button>
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

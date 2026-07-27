'use client'

import Link from 'next/link'
import { ChevronLeft, Users } from 'lucide-react'

const teamMembers = [
  { id: 1, name: 'Maria Santos', role: 'Admin', email: 'maria@drl.com' },
  { id: 2, name: 'Rafael Cruz', role: 'Agent', email: 'rafael@drl.com' },
]

export default function TeamSettingsPage() {
  return (
    <div className="p-6 space-y-6">
      <Link href="/settings" className="inline-flex items-center gap-2 px-3 py-2 rounded-full border card-border bg-card text-sm font-medium text-default hover:bg-surface-soft">
        <ChevronLeft size={18} /> Back
      </Link>

      <div className="bg-card rounded-3xl border card-border p-6 shadow-sm">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-2xl bg-surface-soft text-default">
            <Users size={24} />
          </div>
          <div>
            <h1 className="text-3xl font-semibold text-default">Team settings</h1>
            <p className="mt-2 text-sm text-muted">Manage team members, roles, and permissions.</p>
          </div>
        </div>

        <div className="mt-8 overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b card-border bg-surface-soft">
                <th className="px-6 py-4 text-xs font-semibold uppercase text-muted">Name</th>
                <th className="px-6 py-4 text-xs font-semibold uppercase text-muted">Role</th>
                <th className="px-6 py-4 text-xs font-semibold uppercase text-muted">Email</th>
              </tr>
            </thead>
            <tbody>
              {teamMembers.map((member) => (
                <tr key={member.id} className="border-b card-border hover:bg-surface-soft">
                  <td className="px-6 py-4 text-sm font-semibold text-default">{member.name}</td>
                  <td className="px-6 py-4 text-sm text-muted">{member.role}</td>
                  <td className="px-6 py-4 text-sm text-muted">{member.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

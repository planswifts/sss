'use client'

import { NotificationBanner } from '@/components/NotificationBanner'
import { ChevronDown, Download, MoreVertical } from 'lucide-react'

const reports = [
  { id: 1, reportId: '2327135', name: 'Reconciliation', date: 'Jul 20, 2026', status: 'No report data' },
  { id: 2, reportId: '2323845', name: 'Daily disbursement', date: 'Jul 20, 2026', status: 'No report data' },
  { id: 3, reportId: '2323779', name: 'Reconciliation', date: 'Jul 19, 2026', status: 'No report data' },
  { id: 4, reportId: '2320490', name: 'Daily disbursement', date: 'Jul 19, 2026', status: 'No report data' },
  { id: 5, reportId: '2320425', name: 'Reconciliation', date: 'Jul 18, 2026', status: 'No report data' },
  { id: 6, reportId: '2317136', name: 'Daily disbursement', date: 'Jul 18, 2026', canDownload: true },
]

export default function ReportsPage() {
  return (
    <div className="p-6 space-y-6">
      <NotificationBanner />

      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-default">Reports</h1>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-3 bg-card p-4 rounded-lg border card-border">
        <span className="text-sm text-muted">Range:</span>
        <button className="flex items-center gap-2 px-3 py-1.5 rounded-full border card-border bg-card text-sm text-default hover:bg-surface-soft">
          <span>Last 7 days</span>
          <ChevronDown size={16} />
        </button>
      </div>

      {/* Reports Table */}
      <div className="bg-card rounded-lg border card-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-surface-soft border-b card-border">
                <th className="text-left text-xs font-semibold text-muted px-6 py-4">ID</th>
                <th className="text-left text-xs font-semibold text-muted px-6 py-4">NAME</th>
                <th className="text-left text-xs font-semibold text-muted px-6 py-4">DATE</th>
                <th className="text-left text-xs font-semibold text-muted px-6 py-4">STATUS</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report) => (
                <tr key={report.id} className="border-b card-border hover:bg-surface-soft">
                  <td className="px-6 py-4">
                    <p className="text-sm text-muted">{report.reportId}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm font-semibold text-accent hover:text-orange-600 cursor-pointer">{report.name}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-muted">{report.date}</p>
                  </td>
                  <td className="px-6 py-4">
                    {report.canDownload ? (
                      <button className="flex items-center gap-2 px-2 py-1 text-accent hover:text-orange-600 text-sm font-medium">
                        <Download size={16} />
                        Download
                      </button>
                    ) : (
                      <p className="text-sm text-muted">{report.status}</p>
                    )}
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
